const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
let routes = require('./routes')

const app = express();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(cors());


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

app.use('/user', routes.user);
app.use('/playlist', routes.playlist);
app.use('/tracks', routes.tracks);
app.use('/review', routes.review);

app.get('/', (req, res) => {
    res.send('Welcome to the Music Hub backend!');
});

app.listen(9000, () => {
    console.log('Listening on PORT 9000');
});