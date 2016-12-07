import * as http from 'http';
import * as express from 'express';
//Sockets
import * as socketio from 'socket.io';
import { Server } from 'socket.io-p2p-server';


const app = express();
const server = http.createServer(app);

const io = socketio(server);
const p2p = Server;

io.use(p2p);


io.on('connection', (socket) => {
    console.log(`socket`);
})

app.use(express.static('./app/web'));

app.get('/', (req, res) => {
    console.log(`express touched`);
    res.sendFile('index.html', { root: "./app/web" });
 });

server.listen(3000, () => {
    console.log(`listening on :3000`);
})