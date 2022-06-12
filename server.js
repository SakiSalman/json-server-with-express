const express = require('express')
const { authChek } = require('./middleware/authmiddleware')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

// request body init
app.get('/haq', authChek, (req, res, next) => {

    console.log('done')
    next();


})
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// Server Create
app.use('/api/students', require('./routes/students'))

// Server Listening port 5050
app.listen(5050, () => {
    console.log(`Server is running ${port}`);
})