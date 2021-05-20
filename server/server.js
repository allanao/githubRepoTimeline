const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const PORT = 3000;

// controllers
const userController = require('./controllers/userController');



// Handles parsing request body
// app.use(express.json());
app.use(bodyParser.json());

// Automatically parse urlencoded body content from incoming requests and place it in req.body
app.use(bodyParser.urlencoded({ extended: true }));


// - require routers
// const apiRouter = require('./routes/api.js');


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});


app.post('/signup', 
  userController.showUserData,
  (req, res) => {
});


// DEFINE ROUTE HANDLERS
// app.use('/api', apiRouter);







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