const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const User = require('../models/userModel');

router.get('/:username',
    userController.getUserData,
    // userController.displayUserData,
    // userController.saveUserData,
    (req, res) => {
        // STORE USER DATA IN THE RES.LOCALS OBJ
        const { userData } = res.locals;
        console.log('userRouter: get all user data');
        // res.status(200).json([...res.locals.userData]);
        res.status(200).json({ userData });
    }
);

// router.post('/user', (req, res) => {
//     // // create new user instance
//     // const user = new User(req.body);
//     // // .save is a mongoose method that saves to your mongodb collection
//     // user.save();

//     //// Combines the functionality of those 2 lines of code above
//     // saves data to the database
//     User.create(req.body)
//         .then((data) => {
//             res.send(data);
//             // res.send({
//             //     type: 'POST',
//             //     username: req.body.username,
//             //     avatar_url: req.body.avatar_url,
//             //     name: req.body.name,
//             //     public_repo: req.body.public_repo,
//             //     followers: req.body.followers,
//             //     following: req.body.following,
//             // });
//         })
// });

module.exports = router;