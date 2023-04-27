const mongoose = require('mongoose');

const connectDB =  async () => {
    try{
        await mongoose.connect(`mongodb+srv://shreshth542002:Fakepassword123@cluster0.ejp033c.mongodb.net/Medical_Device_Data`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
    catch(err) {
        console.error(`Error: ${err}`);
        process.exit();
    }
}

module.exports = connectDB;