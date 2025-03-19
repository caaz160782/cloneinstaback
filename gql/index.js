const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const userTypeDefs =require( './user/typeDefs.js');
const userResolvers =require('./user/resolvers.js');

const typeDefs = mergeTypeDefs([userTypeDefs]);
const resolvers = mergeResolvers([userResolvers]);


module.exports = { typeDefs, resolvers };