const User = require('../models/userModel');
// const mongoose = ('mongoose');
// const fs = require('fs');
// const path = require('path');

const userController = {};

// FOR FETCHING API DATA
// const API_KEY = 'SHA256:/V+HDj6Uwl/9DEfHjUc91eZSCudrPXQVhKJQMRoAi/I=';
const client_id = 'Iv1.60275089b6a5eee8';
const client_secret = 'c68f5a1691565c1374fca0e04b9793b0f3c3ed17';



// retrieves all user data from github API and stores it in the database
userController.getUserData = (req, res, next) => {
    const username = req.params.username;
    fetch(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`)
    .then(res => {
        console.log('HERE');
        return res.json();
        })
    .then((data) => {
            res.locals.userData = data.results;
            return next();
        })
        .catch(err => {
            return next(err);
        })
};


// display user data upon search button click
// userController.displayUserData = (req, res, next) => {
//     // userData doesn't exist
//     if (!res.locals.userData) {
//         return next({
//             log: 'userController.displayUserData: ERROR: Missing res.locals.userData data',
//             message: { err: 'userController.displayUserData: ERROR: Check server log for details'},
//         })
//     }

//     // handle how to display userData before calling next middleware


//     // return next();
// };


// save user data to mongoDB
userController.saveUserData = (req, res, next) => {

};



module.exports = userController;