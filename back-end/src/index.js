const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');

let indexRouter = require('./routes/index')
let userRouter = require('./routes/users');
let playlistRouter = require('./routes/playlists');
let reviewRouter = require('./routes/reviews');

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/playlist', playlistRouter);
app.use('/review', reviewRouter);
app.use(function(req, res, next) {
    next(createError(404));
});

app.listen(9000, () => 
    console.log('Listening on port 9000!')
);

module.exports = app;