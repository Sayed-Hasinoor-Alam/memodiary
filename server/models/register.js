const mongoose = require('mongoose');
const express= require('express');

const empSchema = new mongoose.Schema({
    firstname:{
    type:String,
    require:true
    },
    lastname: {
        type:String,
        require:true,
        unique:true
    },
    email: {
        type:String,
        require:true,
        unique:true
    },
    gender: {
        type:String,
        require:true,
    },
    phone: {
        type:Number,
        require:true,
        unique:true
    },
    Age: {
        type:Number,
        require:true,
       
    },

    password: {
        type:String,
        require:true
    },
    confirmPassword: {
        type:String,
        require:true
    }
    

});

//create collection

const Register= new mongoose.model("cluster1", empSchema);

module.exports=Register;