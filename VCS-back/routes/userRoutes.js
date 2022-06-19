
const express = require('express');
const router = express.Router();

const {addUser, login, oneUserByID, } = require('../controllers/userControllers');

router.post('/signup', addUser, (req, res) => {
    res.json('okk router post')
})

router.post('/login', login )

router.get('/:id', oneUserByID)

module.exports = router