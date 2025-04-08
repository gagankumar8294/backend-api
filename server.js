// import express
import express from 'express';
import productRoutes from './src/features/product/product.routes.js';
import bodyParser from 'body-parser';

// create server
const server = express();
server.use(bodyParser.json());
server.use('/api/products', productRoutes)

// default request handler
server.get('/', (req, res) => {
    res.send('Backend Api Project');
})

// listening on port 3200
server.listen(3200, () => {
    console.log("listening on port 3200")
})