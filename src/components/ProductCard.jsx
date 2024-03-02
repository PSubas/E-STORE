import { useState, useEffect } from "react";
import axios from "axios";

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(
                    "https://dummyjson.com/products?limit=99"
                );
                setProducts(response.data.products);
            } catch (error) {
                console.log("Error Fetching Products:", error);
            }
        };
        getProducts();
    }, []);
    console.log(products);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                className="w-full"
                src="{products.thumbnail}"
                alt="Product Image"></img>
        </div>
    );
};

export default ProductCard;
