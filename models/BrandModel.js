var mongoose = require('mongoose');
var BrandSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[3, 'brand muss3']
    },
    country:String
});
var BrandModel = mongoose.model('brands', BrandSchema);
module.exports = BrandModel;