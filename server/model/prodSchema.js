import mongoose from 'mongoose';

const prodSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Number,
    description: String,
    about: String
});

const products = mongoose.model('product', prodSchema);

export default products;
