// importing express
import express from 'express';
import ProductController from './product.controller.js';

// initialize express router
const productRoutes = express.Router();

const productController = new ProductController();
// All the paths to controller methos
 
productRoutes.get('/' , productController.getAllProducts);

//export router
export default productRoutes;