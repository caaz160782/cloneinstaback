const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    avatar: {
        type: String,
        trim: true,        
    },
    siteWeb: {
        type: String,
        trim: true,        
    },
    description: {
        type: String,
        trim: true,        
    },
    password: {
        type: String,        
        required: true,
        trim: true       
    },
    createAt: {
        type: Date,
        default: Date.now() 
    }
});

module.exports = mongoose.model('User', UsersSchema);