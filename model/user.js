import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxLength: 50
    },
    googleId: {
        type: String,
        required: true,
        minlength: 3,
        maxLength: 50
    },
})

const user = mongoose.model("User", UserSchema)

export default user 