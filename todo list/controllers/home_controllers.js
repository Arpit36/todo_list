const List = require('../models/list');


module.exports.home = function(req,res){
   
   //with the ejs page in views, any functions on the page must be included here itsef
   List.find({}, function(err, listitems){
       if(err){
           console.log('Error in fetching contacts from db');
       }
       return res.render('home',{
        title: "Home Page",
        list_item : listitems

   });
   });
}
// create task has been exported now , all you need to call this 

module.exports.createTask = (req,res)=>{

      
        console.log('***********');
         console.log(req.body);
         List.create({
             
             textfieldmain : req.body.textfieldmain,
             category : req.body.categoryyy,
             date : req.body.date},
     
             function(err,newItem){
                 if(err){
                     
                     console.log("Error in creating list *****************");
                     console.log(err);
                     return;
                 }
                 console.log(req.body.textfieldmain);
             console.log('Task created!!!!!')
             console.log('********', newItem);
             return res.redirect('back');
     
         });
     }


     