import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { json } from 'body-parser';
import getUserId from './middlewares/get-user-id';
import resolvers from './resolvers';
import typeDefs from './schema';
import getConfig from './utils/get-config';

interface MyContext {
  token?: String;
}

dotenv.config();

const PORT = getConfig()?.PORT!;

const corsOptions = {
  credentials: true,
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

async function startServer() {
  const app = express();
  const prisma = new PrismaClient();
  const httpServer = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(corsOptions),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({
        token: req.headers.token,
        req,
        prisma,
        userID: getUserId(req),
      }),
    })
  );

  httpServer.listen({ port: PORT });
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}

startServer();
