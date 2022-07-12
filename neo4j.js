import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer, gql } from "apollo-server-express";

import express from 'express';
import resolvers from "./resolvers.js";
import schema from './schema.js';

const app = express();




const startServer = async () => {
    const server = new ApolloServer({
        schema,
        rootValue: resolvers,
        
    });
    await server.start();
    server.applyMiddleware({ app });
    
    app.listen(8081, () => {
        console.log("server is running on port 8081");
    })
}

startServer()