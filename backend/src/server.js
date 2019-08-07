const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://omnistak8:NAHc0PavzSOA5ZHs@cluster0-56zxm.mongodb.net/omnistak8?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes);

server.listen(3333)