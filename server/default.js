import Product from './model/prodSchema.js';
import { products } from './constants/products.js';

const ProdData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('Data imported!');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default ProdData;
