const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const updateSchema = new Schema({
    email: {
        type:String,
        required:true,   
    },
    feedback : {
        type:String,
        required:true,   
    },
    reply : {
        type:String,
        required:true,   
    },
});

// Compile model from schema
const updatesModel = mongoose.model("updateModel", updateSchema);
module.exports = updatesModel
