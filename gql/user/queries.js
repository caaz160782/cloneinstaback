const {  getAllUserController } = require("../../controllers/userController/userController");
const userQueries = {
    Query: {
    
      getUser:async () => await getAllUserController()
    }
  };
  
  module.exports = userQueries;
  