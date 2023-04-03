import React from "react";
import { Card } from "react-bootstrap";
import Payment from "./Payment";

const ProductCard = ({ product }) => {
    return (
      <Card style={{ width: "18rem", marginBottom: "20px" }}>
        <Card.Img variant="top" src={product.image} style={{ height: "200px", objectFit: "cover" }} />
        <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div> 
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Card.Text>Price: {product.price}</Card.Text>
              <Card.Text>Category: {product.category}</Card.Text>
              <Card.Text>Brand: {product.brand}</Card.Text>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Card.Text>Quantity: {product.quantity}</Card.Text>
              <Card.Text>Rating: {product.rating}</Card.Text>
              <Card.Text>Reviews: {product.numReviews}</Card.Text>
            </div>
          </div>
            {/* <a href={product.link} className="btn btn-primary stretched-link">Buy now</a> */}
            <Payment product={product}/>
        </Card.Body>
      </Card>
    );
  };
  

const ProductList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;