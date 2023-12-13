import { v4 as uuidv4 } from "uuid";
import express from "express";

const app = express();
const PORT = 3000;

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

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/api/customers', (req, res) => {
    res.send({ customer: people });
});

app.post('/', (req, res) => {
    res.send('This is a post request!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});