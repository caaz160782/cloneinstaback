const { registerUserController } = require("../../controllers/userController/userController");
const userMutations = {
    Mutation: {
      registerUser:async (_, { input }, context) => await registerUserController(input)
    },
  };
  
  module.exports = userMutations;