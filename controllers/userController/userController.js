const User= require("../../models/users");
const { hashPassword } = require("../../utils/hash");

const getAllUserController = async () => {
    try {
    const getAllUser = await User.find();
    return getAllUser
    } catch(error) {
        console.error(error)
    }
}

const registerUserController = async (input) => {
    const newUser = input
    newUser.email    = newUser.email.toLowerCase();
    newUser.userName = newUser.userName.toLowerCase();

    const { userName, email,password }=newUser
    const foundEmail = await User.findOne({email})
    if(foundEmail) throw new Error("El email ya fue registrado");

    const foundUserEmail = await User.findOne({userName})
    if(foundUserEmail) throw new Error("El userName ya fue registrado");

    newUser.password =  await hashPassword(password);

    try {
      const user = new User(newUser)  
      user.save()
      return user
    } catch(error) {
        console.error(error)
    }

}

module.exports = {
    getAllUserController,
    registerUserController,
    
};