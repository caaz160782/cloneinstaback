const { gql } = require('graphql-tag');
const typeDefs = gql`
     type User {
        id: ID
        name: String
        userName: String
        email: String
        createAt: String
       }
    
       type Query {
          getUser: User
        }


`;

module.exports = typeDefs;