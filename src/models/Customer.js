const mongoose = require('mongoose');
const validator = require('validator');

const customerSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:[true, "Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    name: {
        type:String,
        required:true,
        minlength:3
    }
})

// create a new collecton
const Customer = new mongoose.model('Customer', customerSchema);

module.exports = Customer;