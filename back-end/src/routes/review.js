const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/music_hub');

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', (callback) => {

})

const reviewSchema = mongoose.Schema({
    userId: String,
    username: String,
    review: String,
    rating: Number,
    songId: String
});

const Review = mongoose.model('review', reviewSchema);

router.post('/getReviews', (req, res) => {
    Review.find({ songId: req.body.songId }, (err, reviews) => {
        if(err) return console.log(err);

        let reviewCollection = [];
        reviews.forEach(review => {
            console.log(review);
            reviewCollection.push(review);
        })
        
        res.send({ allReviews: reviewCollection });
    })
})

router.post('/submitReview', (req, res) => {
    Review.findOne({ userId: req.body.userId, songId: req.body.songId }, (err, review) => {
        if(!review) {
            console.log(`Submitting review created by ${ req.body.username } for song id ${ req.body.songId }`)
            const newReview = new Review({
                userId: req.body.userId,
                username: req.body.username,
                review: req.body.review,
                rating: req.body.rating,
                songId: req.body.songId
            })
        
            newReview.save((err, review) => {
                if (err) return console.log(err);
                console.log(`Review for song id ${ review.songId } saved for ${ review.username }`)
            })
        
            res.send({ success: true });
        } else {
            res.send({ success: false, message: "You already have a review saved for this song." });
        }
    })
})

module.exports = router;