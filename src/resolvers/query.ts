import { IResolvers } from 'graphql-tools';

const query : IResolvers = {
    Query: {
        estudiantes(): string {
            return "Probando la Query de estudiantes de Iresolvers"
        }
    }
};

export default query;