const express = require('express')
const server = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const routes = require('./src/routes/items')

//Set config for server instance
server.use(express.json())
server.use(cors())
server.use(bodyParser.json())
server.use(cookieParser())
server.use('/',routes)

//Set port for server instance
const PORT = process.env.PORT || 3001

//Serve Ready
server.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})

module.exports = server