import * as Payment from './provider.js';

export const paymentController = {

    order: async(req,res)=>{
        let {code,data} = await Payment.order(req);
        res.status(code).json(data);
    },

    checkout: async(req,res)=>{
        let {code,data} = await Payment.checkout(req);
        res.status(code).json(data);
    }
}