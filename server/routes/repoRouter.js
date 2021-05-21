const express = require('express');
const repoController = require('../controllers/repoController');

const router = express.Router();

router.get('/',
    repoController.getRepoList,
    (req, res) => {
        console.log('Router: get all user data');
        res.status(200).json([...res.locals.repoData]);
    }
);

module.exports = router;