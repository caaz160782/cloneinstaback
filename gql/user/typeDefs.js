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

       type Token {        
        token: String
       }

       input UserInput
       {
        name: String!
        userName: String!
        email: String!        
        password: String!        
       }

       input LoginInput
       {
        email: String!        
        password: String!        
       }
    
    
      type Query {
      
       getUser: [User]
      }

      type Mutation {
         LoginUser(input:LoginInput): Token
         registerUser(input:UserInput): User         
      }


`;

module.exports = userTypeDefs;