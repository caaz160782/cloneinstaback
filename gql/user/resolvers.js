const userQueries =require('./queries');
const userMutations =require('./mutations');

const userResolvers = {
  ...userQueries,
  ...userMutations
};


module.exports = userResolvers;