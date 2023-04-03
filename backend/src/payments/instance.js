import Razorpay from "razorpay";

const RAZORPAY_API_KEY = process.env.RAZORPAY_API_KEY
const RAZORPAY_API_SECRET = process.env.RAZORPAY_API_SECRET

export const instance = new Razorpay({
    key_id: RAZORPAY_API_KEY,
    key_secret: RAZORPAY_API_SECRET,
  });