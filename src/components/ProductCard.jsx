import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "./Rating";
import { Link } from "react-router-dom";

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

    const skeleton = (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 m-2 sm:m-4 md:m-6">
            {[1, 2, 3].map((index) => (
                <div
                    className="animate-pulse shadow-md bg-gray-200 rounded-lg overflow-hidden"
                    key={index}>
                    <div
                        className="relative"
                        style={{ width: "100%", height: "18rem" }}></div>
                    <div className="p-2 flex flex-col">
                        <div>
                            <div className="h-6 bg-gray-300 rounded mb-1"></div>
                            <div className="h-4 bg-gray-300 rounded"></div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="h-6 w-16 bg-gray-300 rounded"></div>
                            <div className="h-10 w-24 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <>
            {loading ? (
                skeleton
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 m-2 sm:m-4 md:m-6">
                    {products.map((item) => (
                        <Link to={`/products/${item.id}`} key={item.id}>
                            {" "}
                            <div
                                className="  shadow-md bg-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                                key={item.id}>
                                <div
                                    className="relative"
                                    style={{ width: "100%", height: "18rem" }}>
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="p-2 w-full h-full object-contain rounded-lg  aspect-3/4"
                                    />
                                </div>
                                <div className="p-2 flex flex-col">
                                    <div>
                                        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                                            {item.title}
                                        </h2>
                                        <Rating value={item.rating} />
                                    </div>
                                    <div className="flex justify-between items-center mb-16">
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            ${item.price}
                                        </p>
                                        <button className="cart-btn bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 hover:from-red-600 hover:via-pink-600 hover:to-blue-600 text-white font-bold py-3 px-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default ProductCard;
