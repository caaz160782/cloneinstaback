const User= require("../../models/users");
const { hashPassword,checkPassword } = require("../../utils/hash");
const {generateJWT}= require("../../utils/jwt")

const LoginUserController = async (input) => {
    const UserLogin = input
    const { email,password:pswF }= UserLogin
    try {
        const userFound = await User.findOne({ email:email.toLowerCase() });
        if(!userFound) throw new Error("El email no se encuentra registrado");
        
        const match = await checkPassword(pswF, found.password);

        if (match) {
            const payload = {
              sub: found._id.toString(),
              userName: found.userName              
            };
            const tokenJWT = generateJWT(payload);
            const Token = { token:tokenJWT}

            return Token;
        }else{
            new Error("no fue posible generar el token");
        }        
      } catch(error) {
          console.error(error)
      }
}


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
    LoginUserController,
    getAllUserController,
    registerUserController,
    
};