
// import express
import express from 'express';

// create server
const server = express();

// default request handler
server.get('/', (req, res) => {
    res.send('Backend Api Project');
})

// listen on port 3200

server.listen(3200, () => {
    console.log('listening on port 3200')
})