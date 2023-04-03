import { GenResObj } from "../helper/responseFormatter.js";
import { httpStatusCodes } from "../helper/statusCodeFormatter.js";
import { instance } from "./instance.js";
import crypto from "crypto"

export const order = async (req)=>{
    try {
        let {amount,currency} = req.body;
        const options = {
            amount: amount*100,  // amount in the smallest currency unit
            currency,
          };
        const order = await instance.orders.create(options);
        return GenResObj(httpStatusCodes.CREATED,true,order);
    } catch (err) {
        return GenResObj(httpStatusCodes.INTERNAL_SERVER,false,err.message);
    }
}

export const checkout = async (req)=>{
    try {
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;

        const scretkey = process.env.RAZORPAY_API_SECRET

        let shasum = crypto.createHmac("sha256", scretkey);

        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

        const digest = shasum.digest("hex");

        // comaparing our digest with the actual signature
        if (digest !== razorpaySignature) return GenResObj(httpStatusCodes.BAD_REQUEST,true,"Transaction not legit!");

        // THE PAYMENT IS LEGIT & VERIFIED
        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

        let result = {
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        };
        return GenResObj(httpStatusCodes.ACCEPTED,true,result);
    } catch (err) {
        console.log(err)
        return GenResObj(httpStatusCodes.INTERNAL_SERVER,false,err.message);
    }
}