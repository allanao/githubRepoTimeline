const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String},
    avatar_url: {type: String},
    name: {type: String},
    public_repo: {type: String},
    followers: {type: String},
    following: {type: String},
});

module.exports = mongoose.model('User', userSchema);