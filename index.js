const express = require('express');
const connection = require('./config/db');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = 8002;
// const users = require('./configs/users');
const cors = require('cors');

const app = express();
var server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(bodyParser.json());

var clients = [];

io.on('connection', (client) => {
  console.log('connected');
  client.on('onTouch', (e) => {
    console.log(e.id, 'user onTouch');
    let user_id = e.id;
    if (!user_id) return;
    client.user_id = user_id;
    console.log(client.user_id);
    clients.push(user_id);
    client.join('private');
    if (clients.length >= 2) {
      client.emit('touchDetected', 'yeeee!!');
    }
    console.log(clients, clients.length, 'all Clients');
  });

  client.on('leaveRoom', function (data) {
    try {
      console.log('[socket]', 'leave room :', data.room);
      let user = data.id;
      // delete clients[user];
      var index = clients.indexOf(data.id);
      if (index >= 0) {
        clients.splice(index, 1);
      }
      console.log(user, clients, 'delete');
      client.leave(data.room);
      client.to(data.room).emit('user left', client.id);
    } catch (e) {
      console.log('[error]', 'leave room :', e);
      client.emit('error', 'couldnt perform requested action');
    }
    // if (!client.user_id || !clients[client.user_id]) {
    //   return;
    // }
    // let targetClients = clients[client.user_id];
    // for (let i = 0; i < targetClients.length; ++i) {
    //   if (targetClients[i] == client) {
    //     targetClients.splice(i, 1);
    //   }
    // }
  });
});

// const routes = require("./routes/")
app.use('/', require('./routes'));
app.use(function (req, res, next) {
  res.status(404).json({ errorCode: 404, errorMsg: 'Route not found!' });
});

server.listen(port, () =>
  console.log(`Connect Server running on port ${port}!`)
);
