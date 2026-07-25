import React, {useState, useEffect} from "react";
import { getProduct } from '../services/api'
import ProductCard from "../components/ProductCard"
import './Product.css';

function Product(){
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
        try{
        const data = await getProduct();
        console.log(data)
        setProduct(data)
        }catch(error){
            console.log("Failed to fetch products", error);
        }finally{
            setLoading(false);
        }
        };
        fetchProduct();
    }, []);

    function addCart(selectedProduct){
        setCart([...cart, selectedProduct] );
        console.log(cart);
    }
    
    return(
        <div className="user-container">
            <h1>PRODUCT APP</h1>
            <button onClick={cart}className="cart-btn">CART</button>
            <div className="product-grid">
            {product.map((item) => (
                <ProductCard key={item.id} product={item} onClick={addCart}/>
                
            ))}        
            </div>
        </div>
    )
}

export default Product