const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://jaiswararpita18_db_user:61xsqpgYaAvXZArO@cluster0.ohxrjis.mongodb.net/employeeDB?retryWrites=true&w=majority"
        );

        console.log("connected");
    } catch (err) {
        console.log(err);
    }
};

module.exports = { connectDB };