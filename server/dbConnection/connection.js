
import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = 
    `mongodb://${username}:${password}@cluster0-shard-00-00.4qrz7.mongodb.net:27017,cluster0-shard-00-01.4qrz7.mongodb.net:27017,cluster0-shard-00-02.4qrz7.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7fmhda-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;