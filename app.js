const products = require('./public/assets/js/products.json');
const mathl = require('./private/mathLogic');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
//add the router
app.listen(process.env.port || 489);
console.log('Running at Port 489');
console.log(products);

router.get('/calculate/', function (res) {
    res.send(mathl.showTotalPrice());
});
app.use(express.static("public"));
app.use('/', router);