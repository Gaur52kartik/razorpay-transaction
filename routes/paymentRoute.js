const express = require('express');
const payment = express();
const paymentController = require('../controllers/paymentController');

const bodyParser = require('body-parser');
payment.use(bodyParser.json());
payment.use(bodyParser.urlencoded({ extended:false }));

const path = require('path');

payment.set('view engine','ejs');
payment.set('views',path.join(__dirname, '../views'));

payment.get('/', paymentController.renderProductPage);
payment.post('/createOrder', paymentController.createOrder);

module.exports = payment;