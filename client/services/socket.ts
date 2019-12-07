import openSocket from 'socket.io-client';

let socket = null;

const getSocket = () => {
    if (socket) {
        socket = openSocket('http://localhost:3001');
    }
    return socket;
}

export { getSocket };