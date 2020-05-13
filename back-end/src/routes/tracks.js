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

router.post('/searchByTitle', (req, res) => {
    request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let token = body.access_token;
            console.log(token);
            console.log(`Search Term: ${ req.body.title }`);
            let query = {
                url: `https://api.spotify.com/v1/search?q=track:${req.body.title}&type=track&limit=50`,
                headers: {
                    'Authorization': `Bearer ${ token }`
                },
                json: true
            };

            request.get(query, (error, response, body) => {
                if(!error && response.statusCode === 200) {
                    console.log(response.body.tracks.items);
                    res.send({ noResult: false, tracks: response.body.tracks.items });
                } else {
                    console.log(response);
                    res.send({ noResults: true, message: 'No results found. Please check your search term and try again.' });
                }
            })
        }
    })
})

router.post('/searchByArtist', (req, res) => {
    request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let token = body.access_token;
            console.log(token);
            console.log(`Search Term: ${ req.body.artist }`);
            let query = {
                url: `https://api.spotify.com/v1/search?q=artist:${req.body.artist}&type=track&limit=50`,
                headers: {
                    'Authorization': `Bearer ${ token }`
                },
                json: true
            };

            request.get(query, (error, response, body) => {
                if(!error && response.statusCode === 200) {
                    console.log(response.body.tracks.items);
                    res.send({ noResult: false, tracks: response.body.tracks.items });
                } else {
                    console.log(response);
                    res.send({ noResults: true, message: 'No results found. Please check your search term and try again.' });
                }
            })
        }
    })
})

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
                if (!error && response.statusCode === 200) {
                    // console.log(response.body.tracks.items);
                    res.send({ noResult: false, tracks: response.body.tracks.items });
                } else {
                    res.send({ noResult: true, message: 'No result found.' });
                }
            })
        }
    })
})

module.exports = router;