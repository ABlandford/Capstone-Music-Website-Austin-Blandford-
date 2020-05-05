const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/music_hub');

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', (callback) => {

})

const trackSchema = mongoose.Schema({
    uri: String,
    title: String,
    artist: String
})

const playlistSchema = mongoose.Schema({
    userId: String,
    title: String,
    description: String,
    tracks: [trackSchema]
})

const Playlist = mongoose.model('playlists', playlistSchema);

router.post('/getPlaylists', (req, res) => {
    console.log(`Submitted userId: ${req.body.userId}`)
    Playlist.find({ userId: req.body.userId }, (err, playlists) => {
        if (err) return console.log(err);
        let playlistCollection = [];
        playlists.forEach(playlist => {
            console.log(playlist);
            playlistCollection.push(playlist);
        })
        res.send(playlistCollection);
    });
})

router.post('/create', (req, res) => {
    const newPlaylist = new Playlist({
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        tracks: []
    })

    newPlaylist.save((err, playlist) => {
        if (err) return console.log(err);
        console.log(`${playlist.title} playlist saved!`);
    })

    res.send({message: 'Success! New playlist made.'});
})

module.exports = router;