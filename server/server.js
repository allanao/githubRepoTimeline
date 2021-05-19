const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


// - handle parsing request body
// app.use(express.json());


// - require routers
// const apiRouter = require('./routes/api.js');

// - define route handlers
// app.use('/api', apiRouter);

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});




// ERROR HANDLERS

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

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