const express = require('express');
const app = express();
const cors = require('cors');
const Shopify = require('shopify-api-node');
const fetch = require('node-fetch');
require('dotenv').config();

app.use(express.json());

app.use(cors());//WildCard Allow

app.use(express.static('public'));




const shopify = new Shopify({
    shopName: 'alejandruchos3',
    apiKey: 'apikey',
    password: 'token'
});



//
let orderTags = "";

app.get('/', async (req, res) => {
    res.send("Welcome to the server");
});

app.get('/ping', async (req, res) => {
    res.send("pong");
});

app.get('/orders', async (req, res) => {
    const orderResponse = await shopify.order.list({ limit: 10 })
    console.log(orderResponse)
    res.send(orderResponse);
});



app.listen(process.env.PORT || 8080, () => console.log('Listening and ready '));