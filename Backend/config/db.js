const mongoos = require("mongoose");
mongoos.set('strictQuery', false);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://Nano:Tech1133@cluster0.pe6hke6.mongodb.net/?appName=Cluster0";

const connectDB = async () => {
  try {
    const conn = await mongoos.connect(MONGODB_URI);
    console.log(`mongodb connected ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
