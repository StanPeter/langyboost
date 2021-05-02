import "reflect-metadata";
import express from "express";
import dotenv from 'dotenv';
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { createConnection } from "typeorm";
import { User } from "entity/User";

(async () => {
    //define express server
    const app = express();

    //loads from .env file
    dotenv.config();

    //a random route, just to try out
    app.get("/users", async (_req, res) => {
        const users = await User.find();

        res.json(users);
    });

    //a second random route, just to try out
    app.get("/users/:id", async (req, res) => {
        const user = await User.findOne({ where: { id: req.params.id } });

        if (!user) res.send("User not found");
        else res.json(user);
    });

    //connection for typeorm using ormconfig.json and its entities
    await createConnection();

    //define apolloserver for graphql
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver],
        }),
        context: ({ req, res }) => ({ req, res }), //to have an access for req and res inside resolvers
    });

    //connect express server with apollo
    apolloServer.applyMiddleware({ app });

    //run express server
    app.listen(4000, () => {
        console.log("Server started");
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
