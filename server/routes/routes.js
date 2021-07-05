import express from 'express';
const router = express.Router();

import { signUp, login } from './../controller/signup-controller.js';
import { getProductById, getProducts } from './../controller/prod-controller.js';

router.post('/signup', signUp);
router.post('/login', login);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);

export default router;

