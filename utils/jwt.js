const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret =process.env.JWT_SECRET;

const generateJWT = (payload) => {
    const jwtGenerate = jwt.sign(payload, secret, {
        expiresIn: '180d'
    });    
    return jwtGenerate;
};

const verify = (token) => {
    const payload = jwt.verify(token.replace('Bearer ', ''),secret);
    return payload
 };


module.exports = { generateJWT,verify };