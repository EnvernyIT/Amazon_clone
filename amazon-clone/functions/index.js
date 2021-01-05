const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I5b35BQcPwezxqKL4LKm6iR02VAxxUGFhDtYcOdC9nO59Mt4FyYumn1QPDzVYvIU4bf5CH0USg12Y1eV49CSuJB00cXET4Yci')

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received BOOM!! for this amount>> ',total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // submits of the currency
        currency: "usd",
    });

    //OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
// http://localhost:5001/fir-5ac9b/us-central1/api

