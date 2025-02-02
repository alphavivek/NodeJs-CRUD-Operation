const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    age: {
        type : Number
    },
    work :{
        type : String,
        enum : ['Chef','Waiter','Manager'],
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String
    },
    salary : {
        type : Number
    }
})

// Create Person Model
const Person = mongoose.model("People" , personSchema );
module.exports = Person;