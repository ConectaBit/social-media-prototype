import { Query } from './query';
import { Mutation } from './mutation';

import { commentTypes } from './resources/comment/comment.schema';
import { postTypes } from './resources/post/post.schema';
import { userTypes } from './resources/user/user.schema';
import {biaTypes} from './resources/bia/bia.schema'
import { tokenTypes } from './resources/token/token.schema';

import { commentResolvers } from './resources/comment/comment.resolvers';
import { postResolvers } from './resources/post/post.resolvers';
import { userResolvers } from './resources/user/user.resolvers';
import {biaResolvers} from './resources/bia/bia.resolvers'
import { tokenResolvers } from './resources/token/token.resolvers';

import { makeExecutableSchema } from 'graphql-tools'    
import { merge } from 'lodash';
import { elementTypes } from './resources/element/element.schema';
import { elementResolvers } from './resources/element/element.resolvers';



const resolvers = merge(
    commentResolvers,
    postResolvers,
    tokenResolvers,
    userResolvers,
    elementResolvers,
    biaResolvers
);

const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        commentTypes,
        postTypes,
        tokenTypes,
        userTypes,
        elementTypes,
        biaTypes
    ],
    resolvers
});
