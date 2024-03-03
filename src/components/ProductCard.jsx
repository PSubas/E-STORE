import { useState, useEffect } from "react";
import axios from "axios";
import { IoHeartCircle } from "react-icons/io5";

const ProductCard = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 m-6">
            {loading ? (
                <div>Loading...</div>
            ) : (
                products.map((item) => (
                    <div
                        className="product shadow-lg bg-white rounded-lg overflow-hidden hover:shadow-xl relative group"
                        key={item.id}>
                        <div className="top relative">
                            <img
                                src={item.thumbnail}
                                alt="Product Image"
                                className="w-full h-48 object-contain rounded-lg"
                            />
                            <span className="bg-transparent absolute top-5 right-2">
                                <IoHeartCircle
                                    size={36}
                                    className="text-pink-500"
                                />
                            </span>
                        </div>
                        <div className="bottom p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h2>
                            <p className="text-sm text-gray-600 mb-4">
                                {item.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold text-gray-800">
                                    ${item.price}
                                </span>
                                <button className="cart-btn bg-primary text-white py-2 px-4 rounded opacity-0  transition duration-300 group-hover:opacity-100 ">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductCard;
