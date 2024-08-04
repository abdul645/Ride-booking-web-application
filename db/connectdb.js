import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) =>{
    try{
        const DB_OPTIONS = {
            dbName:process.env.DB_NAME,
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
            socketTimeoutMS: 45000, // 45 seconds
        }

        console.log('Connecting to MongoDB...');
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        .then(() => console.log('MongoDB connected successfully'))
          .catch(err => console.log('MongoDB connection error: ' + err));
        // console.log("connected successfully....");
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB