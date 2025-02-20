import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


// Ensure MongoDB Connection String Exists
if (!process.env.MONGO) {
    console.error('❌ MONGO environment variable is missing.');
    process.exit(1); // Exit if no database URL
}


mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDb is connected');
})
.catch((err) => {
    console.log(err);
});

const app = express ();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});