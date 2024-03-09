import PropTypes from "prop-types";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { increaseQuantity } from "../redux/Slice/cartSlice";

const CartItemCard = ({ product }) => {
    const dispatch = useDispatch();
    const onIncreaseQuantity = () => {
        dispatch(increaseQuantity());
    };
    return (
        <div className="bg-white  flex flex-col w-[23rem] shadow-lg rounded-lg border border-gray-200  transition duration-300 ease-in-out transform ">
            <div className="flex justify-center aspect-w-3 aspect-h-4">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="size-64 object-contain p-2 rounded-xl"
                />
            </div>
            <div className=" flex flex-col items-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                </h2>
                <p className="text-gray-700 text-lg">${product.price}</p>
                <p className="text-gray-700 text-lg">
                    Quantity: {product.quantity}
                </p>
            </div>
            <div className="buttons flex gap-1 justify-center m-2">
                <button
                    onClick={() => onIncreaseQuantity(product.id)}
                    className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 hover:from-red-600 hover:via-pink-600 hover:to-blue-600 text-white font-semibold p-3  rounded-full  transition duration-300 ease-in-out transform hover:scale-105 ">
                    <FaPlus />
                </button>
                <button className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 hover:from-red-600 hover:via-pink-600 hover:to-blue-600 text-white font-semibold p-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ">
                    <FaMinus />
                </button>
                <button className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 hover:from-red-600 hover:via-pink-600 hover:to-blue-600 text-white font-semibold p-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105  ">
                    <ImCross />
                </button>
            </div>
        </div>
    );
};

CartItemCard.propTypes = {
    product: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
};

export default CartItemCard;
