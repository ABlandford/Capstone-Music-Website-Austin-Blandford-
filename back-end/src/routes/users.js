const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/music_hub');

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', (callback) => {

});

const router = express.Router();

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fname: String,
    lname: String
})

const User = mongoose.model('users', userSchema);

router.get('/', (req, res) => {
    res.send('Welcome to the users section of the Music Hub back end!');
})

module.exports = router;