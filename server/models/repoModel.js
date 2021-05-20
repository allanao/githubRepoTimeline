const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repoSchema = new Schema({
    reponame: {type: String},
});

module.exports = mongoose.model('Repos', repoSchema);