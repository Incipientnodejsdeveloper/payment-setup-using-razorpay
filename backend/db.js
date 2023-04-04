import mongoose from 'mongoose';

import "dotenv/config";

const mongooseOptions = {
    serverSelectionTimeoutMS: 5000,
};
const uri = process.env.URI;

export const dbInstance = mongoose.connect(uri,mongooseOptions)
