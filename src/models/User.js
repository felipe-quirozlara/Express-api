import { Schema, model } from "mongoose";

new Schema({
    username: {
        type: String,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    roles: []
})