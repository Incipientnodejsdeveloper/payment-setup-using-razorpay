import React from "react";
import { products } from "./productData";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductImageSlider from "./ProductImageSlider";
import ProductDetailsSection from "./ProductDetailsSection";

function SingleProduct() {
    let [product, setProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        setProduct(products.find((item) => item.id === +id));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return  (
        <div className="container m-5">
          <div className="row">
            <div className="col-md-6">
              <ProductImageSlider images={products.map(item => item.image)} />
            </div>
            <div className="col-md-6">
              <ProductDetailsSection product={product} />
            </div>
          </div>
        </div>
      );
}

export default SingleProduct;
