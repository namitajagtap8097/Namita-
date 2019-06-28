//include all modules
const express=require('express');
const cors=require('cors');
const path=require('path');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const dbconfig=require('./DB');
const apiEmpRouter=require('./server/api-employee.route');
const app=express();

//configuration of database
mongoose.Promise=global.Promise;
mongoose.connect(dbconfig.DB,{useNewUrlParser:true}).then(
    ()=>console.log("database connected"),
    (err)=>console.log("failed to connect database")
);

//handling app static resource and api call
app.use(bodyparser.json());
app.use(cors());
//public:folder which contains all static resources=.html,.jog,.png,.css,.js
app.use(express.static(path.join(__dirname,'public')));
//when server will start it will display below msg
app.get('/',(req,resp)=>{
     resp.sendFile("index.html");
});

app.use('/emp',apiEmpRouter);
//strating server
app.listen(4000,()=>{console.log("server listening at 4000")});

