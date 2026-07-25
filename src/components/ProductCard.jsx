import React from "react";
import './Productcard.css'

function ProductCard({product, onClick}){
    return(
        <div className="container">
            <img src={product.images[0]}  alt="product-image"/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h4>Price: {product.price}</h4>
            <h4>Discount: {product.discountPercentage}</h4>
            <button onClick={ () => onClick(product)}>+ Cart</button>
        </div>
    )
}

export default ProductCard