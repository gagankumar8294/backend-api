
// import express
import express from 'express';
import productRoutes from './src/features/product/product.routes.js';

// create server
const server = express();

server.use('/api/products', productRoutes)

// default request handler
server.get('/', (req, res) => {
    res.send('Backend Api Project');
})

// listen on port 3200

server.listen(3200, () => {
    console.log("listening on port 3200")
})