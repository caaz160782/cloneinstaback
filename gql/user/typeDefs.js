const { gql } = require('graphql-tag');

const userTypeDefs  = gql`
     type User {
        id: ID
        name: String
        userName: String
        email: String
        avatar: String
        siteWeb: String
        description: String
        password: String
        createAt: String
       }

       input UserInput
       {
        name: String!
        userName: String!
        email: String!        
        password: String!        
       }
    
      type Query {
       getUser: [User]
      }

      type Mutation {
         registerUser(input:UserInput): User
      }


`;

module.exports = userTypeDefs;