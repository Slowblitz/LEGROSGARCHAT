let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {

    // Log whenever a user connects
    console.log('User connected');

    // Log whenever a client disconnects from our websocket server
    socket.on('disconnect', function(){
        console.log('User disconnected');
    });

    // When we receive a 'message' event from our client, print out
    // the contents of that message and then echo it back to our client
    // using `io.emit()`
    socket.on('message', (message) => {
        console.log("Message from " + message.user + " received: " + message.msg);
        io.emit('message', {type:'new-message', user: message.user, text: message.msg});
    });
});

// Initialize our websocket server on port 5000
http.listen(5000, () => {
    console.log('Started on port 5000');
});
