import React from "react";
import ProductCard from "../components/ProductCard";

function Cart({cart}){
    return(
        <div>
            <h1>Cart Items</h1>
            {cart.map((item) => (
                <ProductCard key={item.id} product={item}/>
            ))}
        </div>
    )
}

export default Cart