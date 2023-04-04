import React from "react";
import ProductList from "./Products";
import { products } from "./productData";

function Prodcut() {

  return (
    <div style={{ padding: "1rem" }}>
      <ProductList products={products} />
    </div>
  );
}

export default Prodcut;
