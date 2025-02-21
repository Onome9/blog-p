import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();


// Ensure MongoDB Connection String Exists
if (!process.env.MONGO) {
    console.error('❌ MONGO environment variable is missing.');
    process.exit(1); // Exit if no database URL
}


mongoose
.connect(process.env.MONGO, {useNewUrlParser: true,
    useUnifiedTopology: true})
.then(() => {
    console.log('MongoDb is connected');
})
.catch((err) => {
    console.log('Mongodb failed', err);
});

const app = express ();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});


app.use('/api/user', userRoutes);