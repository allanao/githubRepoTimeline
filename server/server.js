const express = require('express');
const path = require('path');
const app = express(); // invokes express
const bodyParser = require('body-parser');
// const mongoose = require('mongoose'); // provides us with DB we want to connect to

const PORT = 3000;

// require models
const User = require('./models/userModel');
const Repo = require('./models/repoModel');

// require controllers
const userController = require('./controllers/userController');
const repoController = require('./controllers/repoController');

// require routers
const userRouter = require('./routes/userRouter');
const repoRouter = require('./routes/repoRouter');

// connect mongoose to MongoDB
// mongoose.connect('mongodb+srv://allanao:repotime@repotime.azhfb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// mongoose.Promise = global.Promise; // overwriting mongo promise bec deprecated


// Handles parsing request body
// app.use(express.json());
app.use(bodyParser.json());

// Automatically parse urlencoded body content from incoming requests and place it in req.body
app.use(bodyParser.urlencoded({ extended: true }));


// DEFINE ROUTE HANDLERS
// app.use('/user/repo', repoRouter);
app.use('/user', userRouter);
// app.use('/api', apiRouter);
// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// ROUTE REQUESTS
app.get('/hey', (req, res) => {
  return res.send('ho!');
});



// app.post('/signup', 
//   userController.showUserData,
//   (req, res) => {
// });


// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});




// ERROR HANDLERS
// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => {
  res.sendStatus(404);
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Internal Server Error!')
});



// listens on port 3000 -> http://localhost:3000/
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;