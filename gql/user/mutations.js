const { LoginUserController,
        registerUserController } = require("../../controllers/userController/userController");
const userMutations = {
    Mutation: {
      LoginUser: async(_,{ input }) => await LoginUserController(input), 
      registerUser:async (_, { input }, context) => await registerUserController(input)
    },
  };
  
  module.exports = userMutations;