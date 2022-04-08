const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        minlength: [2, "There is no pet with a 2 character name, please insert a true pet name"],
        required: [true, "Please enter a pet name!"]
    },
    petType: {
        type: String,
        minlength: [2, "There is no pet with a 2 character type, please insert a true pet type"],
        required: [true, "Please enter a pet name!"]
    },
    petDescription: {
        type: String,
        minlength: [2, "Please enter a proper description for a pet"],
        maxlength: [200, "Please enter a description with less than 200 characters"],
        required: [true, "Please enter a pet description that is import for adoption!"]
    },
    skillOne: {
        type: String,
        maxlength: [30, "Please enter a skill with less than 30 characters"],
        required: false
    },
    skillTwo: {
        type: String,
        maxlength: [30, "Please enter a skill with less than 30 characters"],
        required: false
    },    
    skillThree: {
        type: String,
        maxlength: [30, "Please enter a skill with less than 30 characters"],
        required: false
    }
    // ,
    // likes: {
    //     type: Number,
    //     required: false
    // }
            

}, {timestamps:true})

const PetShelter = mongoose.model("PetShelter", PetSchema)

module.exports = PetShelter;