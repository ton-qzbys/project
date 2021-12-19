var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var requestFormSchema = new Schema({
    title: {
        type : String,
        required : true
    },
    term: {
        type : String,
        required : true
    },
    year: {
        type : String,
        required : true
    },
    tel: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    studentId: {
        type : String,
        required : true
    },
    formStatus: {
        type : String,
        default : 'send'
    }
})

module.exports= mongoose.model('requestForm',requestFormSchema)