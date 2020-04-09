const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const router = express.Router();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/music_hub');

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', (callback) => {

})

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fname: String,
    lname: String
});

const User = mongoose.model('users', userSchema);

router.post('/register', (req, res) => {
    console.log('Checking data...');
    let errors = false;
    let error_message = "";
    let name_check = /[a-z]{2,}/i;
    // email regex provided by Mohamed Abdelgawad from regexlib.com
    let email_check = /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/;
    if(!req.body.username) {
        errors = true;
        error_message += '\nThe username you entered is invalid. Please enter a username to register for Music Hub.\n';
    }
    if(!email_check.test(req.body.email)) {
        errors = true;
        error_message += '\nThe email you entered is invalid. You must submit a valid email to register for Music Hub.\n';
    }
    if(!name_check.test(req.body.fname)) {
        errors = true;
        error_message += '\nThe first name you submitted is not a name or is empty. Please submit a proper first name.\n';
    }
    if(!name_check.test(req.body.lname)) {
        errors = true;
        error_message += '\nThe last name you entered seems to not be a name or is empty. Please enter a proper last name.\n'
    }
    if(errors) {
        res.send({ error_check: errors, message: error_message });
    } else {
        bcrypt.hash(req.body.password, saltRounds).then(hash => {
            const newUser = new User({
                username: req.body.username,
                password: hash,
                email: req.body.email,
                fname: req.body.fname,
                lname: req.body.lname
            })

            newUser.save((err, user) => {
                if (err) return console.log(err);
                console.log(user.username + " now registered!");
            })

            return res.send({ error_check: errors, user: newUser });
        })
    }
})

module.exports = router;