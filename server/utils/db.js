const mongoose = require('mongoose')

// const URI = "mongodb://127.0.0.1:27017/mern_admin"
// moongoose.connect(URI)

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try{
        await mongoose.connect(URI);
        console.log('Connection successful to db')
    }
    catch (error) {
        console.error("Database connection failed");
        console.error(error.message);   // 👈 THIS is important
        process.exit(1);
    }
}
module.exports = connectDb

// mongodb://127.0.0.1:27017/ ye url mujhe 
// C:\Users\Ankit>mongosh  ye command run karne ke baad usspe mila cmd main 