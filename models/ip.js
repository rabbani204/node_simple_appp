var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ipSchema=new Schema({
  title: {type:String, required:true}
});

module.exports=mongoose.model('IP',ipSchema);