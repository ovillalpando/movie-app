const users = require('../models/users');

//Welcome page
const index = (req, res) => {
    res.render('users/index.ejs')
};  
//render signup page
const renderSignup = (req, res) => {
    res.render('users/signup.ejs')
};   
//adds new user 
const signup = (req, res) => {
    users.push(req.body);
    res.redirect(`/users/profile/${users.length-1}`);
};
//existing user login
const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}; 
//profile for user
const renderProfile = (req, res) => {
    res.render('users/profile.ejs', {
        user: users[req.params.index],
        index: req.params.index
    })
};





module.exports = {
    index,
    renderSignup,
    signup,
    renderLogin,
    renderProfile,
            
};