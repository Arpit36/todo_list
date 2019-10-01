module.exports.profile = function(req,res){
    return res.render('profile', {
        title : "profile page"
    });
}





// module.exports.home = function(req,res){
//     // return res.end('<h1> getting started </h1>'); with no ejs page
 
 
//     //with the ejs page in views, any functions on the page must be included here itsef
//     return res.render('home',{
//         title: "Home Page"
//     });
//  }