import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
// reflect metadata has to be imported before schema due to experimental decorators
import 'reflect-metadata';
import userRoutes from 'routes/userRoutes';

(async () => {
	// allowing CORS
	const CORS_OPTIONS = {
		credentials: true,
		origin: 'http://localhost:3000',
	};

	// define express server
	const app = express();

	// set cors manually
	app.use(cors(CORS_OPTIONS));

	// use cookie parser to get later cookies from req. in an object
	app.use(cookieParser());

	// loads from .env file
	dotenv.config();

	// refresh_token route to improve security and do this outside /graphql route
	// app.post('/refreshToken', async (req, res) => {
	// 	// get refresh token and validate
	// 	const refreshToken = req.cookies.jid;

	// 	if (!refreshToken) return res.send({ ok: false, accessToken: '' });

	// 	let payload: any;
	// 	try {
	// 		// it will automatically throw an error if verify(whether token is valid and not expired) fails
	// 		payload = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!);
	// 	} catch (error) {
	// 		console.log(error, 'error');
	// 		return res.send({ ok: false, accessToken: '' });
	// 	}

	// 	// when mocked
	// 	if (projectConfiq.isMocked) {
	// 		sendRefreshToken(res, createRefreshToken(TEST_USER_DATA as any));
	// 		return res.send({ ok: true, accessToken: createAccessToken(TEST_USER_DATA as any) });
	// 	}

	// 	// payload has property userId
	// 	const user = await db.user.findFirst({ where: { id: payload.userId } });

	// 	if (!user) {
	// 		console.log('User not found');
	// 		return res.send({ ok: false, accessToken: '' });
	// 	}

	// 	// in case the token has been revoked before
	// 	if (user.tokenVersion !== payload.tokenVersion) {
	// 		console.log('Token version invalid');
	// 		return res.send({ ok: false, accessToken: '' });
	// 	}

	// 	sendRefreshToken(res, createRefreshToken(user));
	// 	return res.send({ ok: true, accessToken: createAccessToken(user) });
	// });

	app.use('/api/users', userRoutes);

	// define apolloserver for graphql
	// const apolloServer = new ApolloServer({
	// 	schema: await schema,
	// 	context: ({ req, res }) => ({ req, res }), //to have an access for req and res inside resolvers
	// });

	// connect express server with apollo
	// apolloServer.applyMiddleware({ app, cors: CORS_OPTIONS });

	// run express server
	app.listen(4000, () => {
		console.log('Server started: http://localhost:4000');
	});
})();
