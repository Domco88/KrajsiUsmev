// -------- const 
    const express = require("express")
    const path = require("path")
    const bodyParser = require("body-parser")
    const cors = require("cors")
    const passport = require("passport")
    const mongoose = require("mongoose")

    const users = require('./routes/users')

// ------- declaration
    const app = express()
    const port = 4000

    const myLogger = function (req, res, next) {
        console.log("passed : ", req.originalUrl, req.method)
        next()
    }

// ------- app. 
    app.use(myLogger)
    app.use(cors())
    app.use(bodyParser.json())

    app.use('/users', users)

    app.get('/', (req, res) => {
        res.send('hello there 1')
    })

    app.listen(port, () => {
        console.log("server started on port " + port)
    } )
