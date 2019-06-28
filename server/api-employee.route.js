//
const express=require('Express');
const app=express();
//we are craeting api link for employee
const apiEmpRouter=express.Router();
//we are importing employee schema
let Employee=require('./employee');


//get all employee
apiEmpRouter.route('/allEmp').get((req,resp)=>
{
    Employee.find((err,data)=>{
        if(err){
            resp.send("failure");
    }
    resp.send(data);
        });

//resp.send("<h1>called all employee</h1>")
});


//get employee by empId
apiEmpRouter.route('/:empId').get((req,resp)=>{
    // resp.send("<h1>called getby empId</h1>")
    let p_empId=req.params.empId;
    Employee.find({empId:p_empId},(err,data)=>{
        if(err){
            resp.send("failed to load data for:"+p_empId);
        }
        
        resp.send(data);
    });
    });


//get employee by empName
apiEmpRouter.route('/ename/:empName').get((req,resp)=>{
    // resp.send("<h1>called getby empName</h1>")
    let p_empName=req.params.empName;
    Employee.find({empName:p_empName},(err,data)=>{
        if(err){
            resp.send("failed to load data for:"+p_empName);
        }
        resp.send(data);
    });
    });


//add employee
apiEmpRouter.route('/addEmp').post((req,resp)=>{
    let body_employee=new Employee(req.body);
    // let message="<h1>called add emp post</h1>"
    // +employee.empId+"<br/>"
    // +employee.empName+"<br/>"
    // +employee.designation+"<br/>";
    // resp.send(employee);
    body_employee.save().then(
        ()=>resp.send("new employee added to database"),
        (err)=>resp.send("failure while adding employee details!")
    );
    });


//delete employee
apiEmpRouter.route('/delete/:empId').delete((req,resp)=>{
    // resp.send("<h1>called delete by empId</h1>")
    let p_empId=req.params.empId;
    Employee.findOneAndDelete({empId:p_empId},(err,data)=>{
        if(err){
            resp.send("failed to load data for:"+p_empId);
        }
        resp.send(p_empId+ ":removed");
    });
    });


//update employee
apiEmpRouter.route('/update/:empId/:desig').put((req,resp)=>{
    let p_empId=req.params.empId;
    let p_desig=req.params.desig;
    Employee.findOneAndUpdate({empId:p_empId},{designation:p_desig},(err,data)=>{
    if(err){
        resp.send("failed to update");
    }
    resp.send("update records for"+p_empId+" as "+p_desig);
});
});
module.exports=apiEmpRouter;