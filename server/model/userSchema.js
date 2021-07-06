import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 1,
        max: 40
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 1,
        max: 40
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});

const user = mongoose.model('user', userSchema);

export default user;
