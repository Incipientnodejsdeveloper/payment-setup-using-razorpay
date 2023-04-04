import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { products } from "./app/cartSlice";

function ProductDetailsSection({ product }) {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.cart.value);
  const checkProduct = productId.some((item) => item === product.id);

  return (
    <div className="col-md-4">
      <input type="checkbox" defaultChecked />
      <span className="my-class text-primary">Official Store</span>
      <h2 className="m-0">{product.name}</h2>
      <p className="mb-4" style={{ color: "green" }}>
        &#9733; {product.rating} | {product.numReviews} likes
      </p>
      <p>{product.description}</p>
      <h3 style={{ color: "green" }}>&#x20b9;{product.price}</h3>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {checkProduct ? (
          <div className="d-flex justify-content-between">
            <Link to={"/cart"} className="me-2">
              <Button variant="primary">Checkout</Button>
            </Link>
            <Link to={"/product"}>
              <Button variant="warning">More!</Button>
            </Link>

          </div>
        ) : (
          <Button
            variant="success"
            onClick={() => dispatch(products(product.id))}
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsSection;
