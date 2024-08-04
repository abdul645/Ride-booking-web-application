const homeController = (req, res) =>{
    res.render('home',{'title' : 'Home'});
}

export { homeController }


// class homeController {
//     static home = (req, res) =>{
//         res.render("home", {'title': 'Home'})
//     }

//     static signup = (req, res) =>{
//         res.render('signup', {'title': 'Sign up'})
//     }

//     static createUserDoc = (req, res) =>{
//         try {
//             // creating new document using model 
//             const doc = new user
//         } catch (error) {
//             console.log(error);
//         }
//     }


//     static login = (req, res) =>{
//         res.render('login', {'title': 'login'})
//     }
// }


// export  {homeController}