import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import typeDefs from './schema.graphql';
import resolvers from './../resolvers/resolversMap';


const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;