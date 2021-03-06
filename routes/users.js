const express = require("express")
const router = express.Router()

//register
router.get('/register', (req, res, next) => {
    res.send('register')
})

//Authenticate
router.get('/authenticate', (req, res, next) => {
    res.send('authenticate')
})

//Profile
router.get('/profile', (req, res, next) => {
    res.send('profile')
})

//Validate
router.get('/validate', (req, res, next) => {
    res.send('validate')
})

module.exports = router