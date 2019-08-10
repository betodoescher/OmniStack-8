const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectedUsers = {}

io.on('connection', socket => {

    const { user } = socket.handshake.query

    connectedUsers[user] = socket.id
})

app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers

    return next()
})


mongoose.connect('mongodb+srv://omnistak8:NAHc0PavzSOA5ZHs@cluster0-56zxm.mongodb.net/omnistak8?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use(cors())
app.use(express.json())
app.use(routes);

server.listen(3333)