import UserModel from "../models/user.model.js";
export default class UserController {
    getResgister(req, res) {
        res.render('register');
    }
    postRegister(req, res) {
        try {
            const newUser = req.body; // Correct way to access the request body
            const result = UserModel.registerUser(newUser); // Assuming registerUser is an async function

            if (result) {
                res.status(201).json({ success: `${newUser.name} registered successfully` });
            } else {
                res.status(409).json({ error: `${newUser.name} already exists` }); // 409 Conflict is more appropriate for existing resource
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while registering the user' });
        }
    }
    getLogin(req, res) {
        res.render('login');
    }
    postLogin(req, res) {
        const { email, password } = req.body;
        const result = UserModel.loginUser(email, password);
        if(!result){
            res.status(401).json({error: 'Invalid credentials'});
        }
        req.session.userEmail = result.email;
        req.session.role = result.role;
        res.render('landing',{userEmail:req.session.userEmail});

    }

}