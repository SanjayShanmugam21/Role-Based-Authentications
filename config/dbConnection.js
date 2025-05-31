const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`The DB is connected to host: ${connect.connection.host}, database: ${connect.connection.name}`);
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
};

module.exports = dbConnect;
