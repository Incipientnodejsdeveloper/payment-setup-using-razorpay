import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem", marginBottom: "20px" }}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </div>
        <Link to={"/product/"+product.id} className="btn btn-primary stretched-link" >
          Know More!
        </Link>
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
