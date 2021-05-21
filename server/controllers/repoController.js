const Repo = require('../models/repoModel');
// const mongoose = ('mongoose');
// const fs = require('fs');
// const path = require('path');

const repoController = {};


// retrieves all user data from github API and stores it in the database
repoController.getRepoList = (req, res, next) => {
    // try {
    //     // const { results } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '')))
    //     res.locals.characters = results;
    //     next();
        
    // }
};


// retrieves all repository data from github API and stores it in the database
repoController.addRepoData = (req, res, next) => {
    
};


// retrieves all repository data from github API and stores it in the database
repoController.getRepoData = (req, res, next) => {

};

module.exports = repoController;