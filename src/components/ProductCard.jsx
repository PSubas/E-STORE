/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/Slice/cartSlice";
import StarRating from "./Rating";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItemToCart(product));
    };

    return (
        <div
            key={product.id}
            className="bg-[#FBFBFB] shadow-lg rounded-lg border border-gray-200 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
            <Link to={`/products/${product.id}`}>
                <div className="relative overflow-hidden">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-48 aspect-3/4 object-contain p-1"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        {product.title}
                    </h2>
                    <StarRating rating={product.rating} />
                    <p className="text-gray-600 text-sm">
                        {" "}
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(product.price)}
                    </p>
                </div>
            </Link>
            <button
                className="block my-4 mx-auto bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 hover:from-red-600 hover:via-pink-600 hover:to-blue-600 text-white font-bold py-3 px-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
