export async function getProduct(){
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    return result.products;
}