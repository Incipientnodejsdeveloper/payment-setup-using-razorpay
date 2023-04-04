import jwt from 'jsonwebtoken';

export const createToken = (id) => {
    // calculate in seconds
    const maxAge = 1 * 24 * 60 * 60;
    const secretKey = process.env.JWT_SECRET_KEY;
    return jwt.sign({id},secretKey,{
        expiresIn: maxAge
    });
};