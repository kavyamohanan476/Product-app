import React from "react";
import CartProduct from "../components/CartProduct";


function Cart({cart, setCart}){

    function removeCart(id){
        setCart((cart) => cart.filter((product) => product.id !== id));
    }
    return(
        <div>
            <h1>Cart Items</h1>
            {cart.length === 0 ? (
                <p>Cart is Empty</p>
            ):(
             cart.map((item) => (
                <CartProduct key={item.id} product={item} onClick={removeCart}/>
                
            )))}
            
           
        </div>
    )
}

export default Cart