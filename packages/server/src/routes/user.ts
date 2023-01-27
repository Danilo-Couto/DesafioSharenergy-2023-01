import express from 'express';

const router = express.Router();

const userController = require('../controllers/userController');

router
    .route('/user')
    .get((req, res) => {
        userController.getAll(req, res);
    })
    .post((req, res)=> userController.create(req, res));

router
    .route('/user/:id')  
    .get((req, res) => {
        userController.get(req, res);
    })
    .delete((req, res) => {
        userController.delete(req, res);
    })
    .put((req, res) => {
        userController.update(req, res);
    });

module.exports = router;