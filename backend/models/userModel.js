const mongoose = require('mongoose');

// Define schema for the users table
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    email_verified_at: {
        type: Date,
        default: null
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['admin', 'superadmin'],
        default: 'admin'
    }
}, {
    timestamps: true
});


const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
