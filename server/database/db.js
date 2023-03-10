import mongoose  from 'mongoose';

const Connection = async (username = 'admin-arihant', password = '78vZYPc2gyBywRY6') => {
    mongoose.set('strictQuery', false);
    const URL = `mongodb+srv://${username}:${password}@cluster0.kgenaht.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;