import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from 'db';
import dotenv from 'dotenv';
import { User } from 'entity/_DEPRECATED_User';
import express from 'express';
import { verify } from 'jsonwebtoken';
import 'reflect-metadata';
import { PhrasesResolver } from 'resolvers/PhrasesResolver';
import { testUserData } from 'settings/mockData';
import settings from 'settings/projectConfiq.json';
import { buildSchema } from 'type-graphql';
import { createAccessToken, createRefreshToken, sendRefreshToken } from 'utils/auth';
import { UserResolver } from './resolvers/UserResolver';

// DB
// const pass = 'stancek97';
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://stan05:${pass}@langyboostcluster.5eza2kb.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
// 	serverApi: {
// 		version: ServerApiVersion.v1,
// 		strict: true,
// 		deprecationErrors: true,
// 	},
// });

// async function run() {
// 	try {
// 		// Connect the client to the server	(optional starting in v4.7)
// 		await client.connect();
// 		// Send a ping to confirm a successful connection
// 		await client.db('admin').command({ ping: 1 });
// 		console.log('Pinged your deployment. You successfully connected to MongoDB!');
// 	} finally {
// 		// Ensures that the client will close when you finish/error
// 		await client.close();
// 	}
// }
// run().catch(console.dir);

// DB END

(async () => {
	// allowing CORS
	const CORS_OPTIONS = {
		credentials: true,
		origin: 'http://localhost:3000',
	};

	//define express server
	const app = express();

	// run().catch(console.dir);

	//set cors manually
	app.use(cors(CORS_OPTIONS));

	//use cookie parser to get later cookies from req. in an object
	app.use(cookieParser());

	//loads from .env file
	dotenv.config();

	//a random route, just to try out
	app.get('/users', async (_req, res) => {
		const users = await User.find();

		res.json(users);
	});

	//a second random route, just to try out
	app.get('/users/:id', async (req, res) => {
		const user = await User.findOne({ where: { id: req.params.id } });

		if (!user) res.send('User not found');
		else res.json(user);
	});

	//refresh_token route to improve security and do this outside /graphql route
	app.post('/refreshToken', async (req, res) => {
		//get refresh token and validate
		const refreshToken = req.cookies.jid;

		console.log(refreshToken, ' refreshToken');

		if (!refreshToken) return res.send({ ok: false, accessToken: '' });

		let payload: any;
		try {
			//it will automatically throw an error if verify(whether token is valid and not expired) fails
			payload = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!);
		} catch (error) {
			console.log(error, 'error');
			return res.send({ ok: false, accessToken: '' });
		}

		// when mocked
		if (settings.isMocked) {
			const testUser = User.create(testUserData);

			sendRefreshToken(res, createRefreshToken(testUser));
			return res.send({ ok: true, accessToken: createAccessToken(testUser) });
		}

		//payload has property userId
		const user = await User.findOne({ id: payload.userId });

		if (!user) {
			console.log('User not found');
			return res.send({ ok: false, accessToken: '' });
		}

		//in case the token has been revoked before
		if (user.tokenVersion !== payload.tokenVersion) {
			console.log('Token version invalid');
			return res.send({ ok: false, accessToken: '' });
		}

		sendRefreshToken(res, createRefreshToken(user));
		return res.send({ ok: true, accessToken: createAccessToken(user) });
	});

	console.log(' FIST CONNECTION');

	//connection for typeorm using ormconfig.json and its entities
	// await createConnection().then(() => console.log('DONE'));

	const post = db.post.findFirst();
	console.log(post, ' RANDOMDADASAFASFASAS');
	// const random = getMongoRepository(Phrases);

	//define apolloserver for graphql
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [UserResolver, PhrasesResolver],
		}),
		context: ({ req, res }) => ({ req, res }), //to have an access for req and res inside resolvers
	});

	//connect express server with apollo
	apolloServer.applyMiddleware({ app, cors: CORS_OPTIONS });

	//run express server
	app.listen(4000, () => {
		console.log('Server started: http://localhost:4000/graphql');
	});
})();

// createConnection()
//   .then(async (connection) => {
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");
//   })
//   .catch((error) => console.log(error));
