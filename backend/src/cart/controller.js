import * as Cart from './provider.js';

export const cartController = {

    createCart: async(req,res)=>{
        let {code,data} = await Cart.createCart(req);
        res.status(code).json(data);
    },

    cartDetails: async(req,res)=>{
        let {code,data} = await Cart.cartDetail(req);
        res.status(code).json(data);
    }
}