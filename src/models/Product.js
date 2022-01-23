import { Schema, model } from "mongoose";

const product = new Schema({
    name: String,
    category: String,
    price: Number,
    imgUrl: String
},{
    timestamps: true,
    versionKey: false
})

export default model('Product', product)