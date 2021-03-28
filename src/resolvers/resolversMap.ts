import query  from './query';
import { IResolvers } from 'graphql-tools';
import type from './type';

const resolversMap : IResolvers = {
    ...query,
    ...type
};

export default resolversMap;