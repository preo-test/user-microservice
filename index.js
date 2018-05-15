import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models from './models';
import config from './config/config';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname,'./schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname,'./resolvers')));

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const app = express();

app.use(config.graphqlEndpoint, bodyParser.json(),graphqlExpress({ schema, context:{models}}));
app.use(config.graphiqlEndpoint, graphiqlExpress({endpointURL:config.graphqlEndpoint}));

// NEVER USE {force:true} AFTER FIRST TIME IN PRODUCTION ENVIRONMENTS, WILL ERASE THE ENTIRE DB
models.sequelize.sync({force:true}).then(()=>{
    app.listen(config.port);
});