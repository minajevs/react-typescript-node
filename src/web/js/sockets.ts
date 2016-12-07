//.Sockets
import * as P2P from 'socket.io-p2p';
import * as io from 'socket.io-client';

//Init Sockets
const socket = io();
const opts = { peerOpts: { trickle: false }, autoUpgrade: false };

const p2p = new P2P(socket, opts, () => {
    p2p.emit('peer-obj', 'Hello there.');
});

console.log('sockets init!');

p2p.on('ready', () => {
    p2p.usePeerConnection = true;
    p2p.emit('peer-obj', { peerId: 1337 });
    p2p.emit('msg', 'sup!');
})

p2p.on('msg', function (data) {
    console.log(data);
});

export class Sockets{
    private _onMsg = () => {};
    constructor() {
        
    }

    sendMsg(msg: string) {
        p2p.emit('msg', msg);
    }

    receiveMsg(callback) {
        this._onMsg = callback;
    }
}
