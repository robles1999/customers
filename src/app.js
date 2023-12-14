// import { v4 as uuidv4 } from "uuid";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Customer from "./models/customers.js";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATA ARRAY
const people = [
    {
        name: "Caleb",
        industry: "music"
    },
    {
        name: "John",
        industry: "networking"
    },
    {
        name: "Sal",
        industry: "sports medicine"
    }
];

const customer = new Customer({
    name: "Mari",
    industry: "music"
});

// customer.save();

// ROUTES
// ------------------------------
app.get('/', (req, res) => {
    res.send(customer);
});

// GET ALL CUSTOMERS
app.get('/api/customers', async (req, res) => {
    try {
        const result = await Customer.find();
        res.send({ customer: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ADD A NEW CUSTOMER 
app.post('/api/customers', async (req, res) => {

    try {
        await customer.save();
        res.status(201).json({ customer });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

});

// FIND A CUSTOMER BY ID
app.post('/api/customers/:id', async (req, res) => {
    const id = req.params;
    res.json({
        requestParam: id,
        requestQuery: req.query
    });

});

const start = async () => {
    try {

        await mongoose.connect(process.env.DB_CONNECT);

        app.listen(PORT, () => {
            console.log(`Server is listening on ${process.env.PORT}`);
        });
    } catch (e) {
        console.log(e.message);
    }
};
start();
