const mongoose = require("mongoose");

const Patient = new mongoose.Schema({
    owner: {
        type: String,
        trim: true
    },
    pet: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    symptoms: {
        type: String,
        trim: true
    }
    
});


module.exports = mongoose.model("Patient", Patient);