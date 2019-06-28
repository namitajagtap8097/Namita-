const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Employee=new Schema
(
    {

    empId:{type:Number},
    empName:{type:String},
    designation:{type:String}
},
{
    collection:'employee'
}
);
module.exports=mongoose.model("employee",Employee);