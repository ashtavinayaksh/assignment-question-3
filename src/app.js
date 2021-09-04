const express = require('express');
const app = express();

// mongoDB
require("./db/conn");
// Studdent Collection
const Customer = require('./models/Customer');

const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("GET Page Responded!!");
})

app.post("/customer", (req, res) => {
    console.log(req.body);
    const user = new Customer(req.body);
    // save json data into the MongoDB database
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err)
    })
});

app.get('/customer', async(req, res)=>{
    try{
        const customerData = await Customer.find();
        res.status(200).send(customerData);
    }catch(err){
        res.status(404).send("Bad Request");
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});