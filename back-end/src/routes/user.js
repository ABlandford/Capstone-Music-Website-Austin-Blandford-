const express = require('express');
const request = require('request');
const cors = require('cors');
const mongoose = require('mongoose');
const querystring = require('querystring');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const router = express.Router();

router.use(cors());

const client_id = '2160308cf13f44cfa5821df71c80338a';
const redirect_uri = 'http://localhost:9000/user/callback';

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

router.post('/login', (req, res) => {
    console.log('Validating login...');
    
    if(req.body.username != null && req.body.password != null) {
        let login = false;
        
        User.findOne({ username: req.body.username }, function(err, user) {
            if(!user) {
                let message = "The USERNAME you entered is not in our database. Please try again.";
                res.send({ status: login, statusMessage: message });
            } else if(user) {
                bcrypt.compare(req.body.password, user.password).then(result => {
                    if(result == true) {
                        login = !login;
                        // res.redirect('https://accounts.spotify.com/authorize?' + 
                        //     querystring.stringify({
                        //         response_type: 'code',
                        //         client_id: client_id,
                        //         redirect_uri: redirect_uri
                        //     }));
                        
                        // request.get(`http://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=user-modify-playback-state`, (error, response, body) => {
                        //     console.log(body);
                        // })
                        
                        res.send({ status: login, user: user });
                    } else {
                        let message = "The PASSWORD you entered does not match this username. Please try again.";
                        res.send({ status: login, statusMessage: message });
                    }
                });
            }
        });
    } else {
        let login = false;
        let message = "The fields you entered have invalid values. Please enter a proper username and password.";
        res.send({ status: login, statusMessage: message })
    }
});

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
    if(!req.body.password) {
        errors = true;
        error_message += '\nThe password field is empty. Please enter a password to secure your account.\n';
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
});

router.put('/editAccount', (req, res) => {
    console.log('Validating data...');
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
        User.findById(req.body.userId, (err, user) => {
            if(err) return console.log(err);
            user.username = req.body.username,
            user.email = req.body.email,
            user.fname = req.body.fname,
            user.lname = req.body.lname

            user.save((err, savedUser) => {
                if(err) return console.log(err);
                console.log(savedUser.username + ' updated!');
                return res.send({ error_check: errors, user: savedUser });
            })
        })
    }
})

router.get('/callback', (req, res) => {
    let code = req.query.code

    let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect: redirect_uri,
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': `Basic ${encodedID}`
        },
        json: true
    };

    request.post(authOptions, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            let accessToken = body.accessToken;
            let refreshToken = body.refreshToken;

            res.send({ access: accessToken, refresh: refreshToken });
        }
    })
})

module.exports = router;