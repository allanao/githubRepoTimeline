// const fs = require('fs');
// const path = require('path');

const User = require('../models/userModel')

const userController = {};

userController.getUserData = (req, res, next) => {
    // try {
    //     // const { results } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '')))
    //     res.locals.characters = results;
    //     next();
        
    // }
};

userController.getRepositoryData = (req, res, next) => {

};

module.exports = userController;