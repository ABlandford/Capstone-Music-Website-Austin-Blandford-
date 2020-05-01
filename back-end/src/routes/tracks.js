const express = require('express');
const request = require('request');

const router = express.Router();
const encodedID = 'MjE2MDMwOGNmMTNmNDRjZmE1ODIxZGY3MWM4MDMzOGE6Yjg4N2Q2NTZiOTdhNDdhNmI2YjYyYjA5ZjgxNGU4MTA=';

const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': `Basic ${encodedID}`
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
}

router.post('/getTracks', (req, res) => {
    request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let token = body.access_token
            console.log(token);
            let opt1 = {
                url: `https://api.spotify.com/v1/search?q=artist:${req.body.artist} track:${req.body.title}&type=track`,
                headers: {
                    'Authorization': `Bearer ${ token }`
                },
                json: true
            };

            request.get(opt1, (error, response, body) => {
                console.log(response.body.tracks.items[0].uri);
                let trackURL = encodeURI(response.body.tracks.items[0].uri)
                res.send({ track: trackURL });
            })
        }
    })
})

// router.post('/search', (req, res) => {
//     request
// })

module.exports = router;