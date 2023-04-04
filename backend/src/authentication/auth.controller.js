import User from '../models/user.schema.js';
import { createToken } from '../jwt/createToken.js';


export const authController = {
    register: async (req, res) => {
        try {
            const user = await User.create(req.body);
            const token = createToken(user._id);
            const maxAge = 1000 * 24 * 60 * 60  //In milliseconds
            res.cookie('token', token, { maxAge, httpOnly: false })
            res.json({ success: true,message: "new signup", user });

        } catch (err) {
            if(err.code == "11000"){
                return res.json({ success: false,message: "Email Already Exists", data: null });
            }
            res.send({ success: false,message: err.message, data: null })
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.login(email, password);
            const token = createToken(user._id);
            const maxAge = 1000 * 24 * 60 * 60  //In milliseconds
            res.cookie('token', token, { maxAge, httpOnly: false })
            res.send({ success: true, message: "user details", data: user });

        } catch (err) {
            res.send({ success: false, message: err.message, data: null });
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('token');
            res.send("Logout successfully");
        } catch (err) {
            res.send(err);
        }
    },
    test: async (req, res) => {
        try {
           let user =  await User.findById("63523913ac0c91432670425f",(err,data)=>{
            if(err) throw err
            data.save((err)=>{
                console.log(err)
                data.data = "false";
            })
           })
           res.send({user})
        } catch (err) {
            console.log(err)
        }
    }
};