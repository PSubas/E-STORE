import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(
                    "https://dummyjson.com/products?limit=99"
                );
                setProducts(response.data.products);
                setLoading(false);
            } catch (error) {
                console.log("Error Fetching Products:", error);
            }
        };
        getProducts();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 sm:p-6 md:p-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    );
};

export default AllProducts;
