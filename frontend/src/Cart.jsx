import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeProducts } from "./app/cartSlice";
import { products as prodData } from "./productData";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const productIds = useSelector((state) => state.cart.value);
  const {_id: userId} = useSelector((state) => state.user.value);

  // State object to store the quantity of each product
  const [quantities, setQuantities] = useState(
    Object.fromEntries(productIds.map((id) => [id, 1]))
  );

  const filteredProducts = prodData.filter((item) =>
    productIds.find((id) => item.id === id)
  );

  const handleRemoveProduct = (prodId) => {
    dispatch(removeProducts(prodId));
  };

  const handleSub = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] - 1
    }));
    if(quantities[id] -1 < 1 ){
      dispatch(removeProducts(id));
    }
  };

  const handleAdd = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };


  const total = filteredProducts
    ? filteredProducts.reduce((acc, curr) => {
      return acc + curr.price * quantities[curr.id];
    }, 0)
    : 0;

  const handleOrder = async () => {
    const config = {
      method: "post",
      url: "http://localhost:5000/api/v1/payment/order",
      data: {
        amount: +total.toFixed(2),
        currency: "INR",
      },
    };
    const { data } = await axios(config);
    let order_id = data.data.id;  
    console.log({order_id})
    if (!data) {
      alert("Server error. Are you online?");
      return;
    } else {
      try {
      const config = {
        method: "post",
        url: "http://localhost:5000/api/v1/cart/add",
        data: {
          products:quantities,
          user: userId,
          orderId: order_id
        },
      };      
      const { data } = await axios(config);
      console.log({cartData: data})
      if(data){
        navigate('/payment/'+userId)
      }       
      } catch (error) {
        alert('something bad happened')
      }
    }

  //   const options = {
  //     key: "rzp_test_FckgGnh83Nt4DF", // Enter the Key ID generated from the Dashboard
  //     amount: data.message.amount,
  //     currency: "INR",
  //     name: "Incipient Corp.",
  //     description: "Test Transaction",
  //     order_id: data.message.id,
  //     handler: async function (response) {
  //         const config = {
  //             method:"post",
  //             url:"http://localhost:5000/api/v1/payment/checkout",
  //             data:{
  //                 orderCreationId: data.message.id,
  //                 razorpayPaymentId: response.razorpay_payment_id,
  //                 razorpayOrderId: response.razorpay_order_id,
  //                 razorpaySignature: response.razorpay_signature
  //             }
  //         };

  //         const result = await axios(config);

  //         if(result){
  //             // alert("payment successfull");
  //         }else{
  //             alert("unsuccessfull payment");
  //         }
  //     },
  // };

  // const Razorpay = new window.Razorpay(options);
  // Razorpay.open();
  };

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <Table striped borderless hover>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
                      alt=""
                      style={{
                        width: "50px",
                        height: "40px",
                        objectFit: "contain",
                      }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleSub(product.id)}
                    >
                      -
                    </Button>{" "}
                    {quantities[product.id]}{" "}
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => handleAdd(product.id)}
                    >
                      +
                    </Button>
                  </td>
                  <td>{(product.price * quantities[product.id]).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <p className="m-2" style={{ fontWeight: "bold" }}>
              Total amount: <span>{total.toFixed(2)}</span>
            </p>
            <Button className="m-2 " variant="primary" onClick={handleOrder}>
              checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
