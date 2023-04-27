const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const User = require('./config/Schema');
const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL;

const app = express();
dotenv.config();
connectDB();

app.get('/', (req,res) => {
    res.send('Welcome to the API');
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors());
app.use(express.json());

app.get(`/:phoneNumber`, async (req, res) => {
  try {
    var number = req.params.phoneNumber
    var query = { number: `${number}`}
    const user = await User.find(query);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));