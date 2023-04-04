import jwt from "jsonwebtoken";

export const authCheck = (req,res,next) => {
    const token = req.cookies.token;
    const secretKey = process.env.JWT_SECRET_KEY;
    // check json web token exists & is verified
    if(token){
        jwt.verify( token , secretKey, (err,decodedToken)=> {
            if(err){
                return res.status().json("")
            }else{
                console.log({decodedToken});
                next();
            }
        })
    }else{
        res.redirect('/login')
    }
};

 