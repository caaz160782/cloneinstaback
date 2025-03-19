const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret =process.env.JWT_SECRET;

const generateJWT = (payload,expires) => {
    const jwtGenerate = jwt.sign(payload, secret, {
        expiresIn: expires
    });    
    const Token = { token:jwtGenerate};
    return Token
};

const verify = (token) => {
    const payload = jwt.verify(token.replace('Bearer ', ''),secret);
    return payload
 };


module.exports = { generateJWT,verify };