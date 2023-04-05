import React from 'react';
import { products } from "./productData";

import { Container,Row ,Col} from 'react-bootstrap';

const ProductCard = ({ product }) => {
    return (
        <Row className='m-1 p-4 shadow' style={{ borderRadius: '10px' }}>
            <Col md={2} >
                <img src={product.image} alt="" style={{ height: "50px", objectFit: "contain", borderRadius: '10px' }}></img>
            </Col>
            <Col md={8}  >
                <Row>
                    <Col>
                        <span>{product.name}</span>
                    </Col>
                    <Col>
                        <span>{product.description} </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>
                            {product.quantity}
                        </span>
                    </Col>
                    <Col>
                        <span>
                            {product.price}
                        </span>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

function ConfirmProductList({ productIds }) {

    const conformProductsList = productIds && products.filter(item => Object.keys(productIds[0])?.find(id => +id === item.id))
    console.log({ conformProductsList })

    return (
       
        <Container>
            {conformProductsList?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}        
        </Container>
    );
}

export default ConfirmProductList