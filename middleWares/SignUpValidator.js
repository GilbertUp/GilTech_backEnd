import User from "../models/userModel.js"
const signupValidator = (req, res, next) => {
    let email = req.body.email
    let name = req.body.fullName
    let pwd = req.body.password
    let confirm = req.body.confirmPassword
    let atpos, dotpos
    if (!email) {
        return res.json({ Error: 'Email required!' });
    }
    if (!name) {
        return res.json({ Error: 'full name required!' });
    }
    if (name.length < 5) {
        return res.json({ error: 'Enter at least 5 characters!' });
    }
    if (!pwd) {
        return res.json({ Error: 'Password required!' });
    }
    if (!confirm) {
        return res.json({ Error: 'Please confirm password!' });
    }
    if (email != "") {
        atpos = email.indexOf("@");
        dotpos = email.lastIndexOf(".");
        if (atpos < 1 || (dotpos - atpos < 2)) {
            return res.json({ Error: 'Incorrect email!' });
        }
    }
    if (pwd != "" && confirm != "") {
        if (pwd !== confirm) {
            return res.json({ Error: 'Password does not match!' });
        }
    }
    if (pwd.length < 8) {
        return res.json({ Error: 'Enter at least 8 characters' });
    }
    
    User.confirmPassword = undefined
    next();
}
export { signupValidator as default }