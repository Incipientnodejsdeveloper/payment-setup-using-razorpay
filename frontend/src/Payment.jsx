import React from "react";
import axios from "axios";

function Payment({ product }) {
    const handleOrder = async () => {
        const config = {
            method: "post",
            url: "http://localhost:5000/api/v1/payment/order",
            data: {
                amount: product.price,
                currency: "INR",
            },
        };
        const { data } = await axios(config);
        console.log(data);

        if (!data) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = data.message;

        const options = {
            key: "rzp_test_FckgGnh83Nt4DF", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Incipient Corp.",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {
                const config = {
                    method:"post",
                    url:"http://localhost:5000/api/v1/payment/checkout",
                    data:{
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature
                    }
                };

                const result = await axios(config);

                if(result){
                    alert("payment successfull");
                }else{
                    alert("unsuccessfull payment");
                }
            },
        };

        const Razorpay = new window.Razorpay(options);
        Razorpay.open();
    };

    return (
        <button onClick={handleOrder} className="btn btn-primary stretched-link">
            Buy Now
        </button>
    );
}

export default Payment;
