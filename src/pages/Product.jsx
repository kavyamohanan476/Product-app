import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from '../services/api'
import ProductCard from "../components/ProductCard"
import './Product.css';

function Product({cart, setCart}){
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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

    function addCart(product){
        const exists = cart.some((item) => item.id === product.id);
        if(exists){
            alert("Item already in cart")
            return cart
        }
    setCart([...cart, product] );
    }
    
    return(
        <div className="user-container">
            <h1>PRODUCT APP</h1>
            <button onClick={() => navigate('/Cart')} className="cart-btn">CART</button>
            <div className="product-grid">
            {product.map((item) => (
                <ProductCard key={item.id} product={item} onClick={addCart}/>
                
            ))}        
            </div>
        </div>
    )
}

export default Product