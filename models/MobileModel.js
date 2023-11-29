var mongoose = require('mongoose');
var MobileSchema = mongoose.Schema({
model:String,
color:String,
image:String,
brand:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'brands'
},

})
var MobileModel = mongoose.model('mobiles', MobileSchema);
module.exports = MobileModel;