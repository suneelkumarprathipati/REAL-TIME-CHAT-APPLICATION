const socket = new WebSocket('ws://localhost:8080');
socket.onmessage = (event) => {
    displayMessage(JSON.parse(event.data));
};