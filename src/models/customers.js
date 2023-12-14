import mongoose from "mongoose";

// defines the scturcture of the database/fields
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    industry: String,
});

// builds the database model/table and exports the customer as `Customer`
const Customer = mongoose.model('Customer', customerSchema);
export default Customer;