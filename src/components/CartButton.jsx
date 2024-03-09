import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartItemButton = () => {
    const { cartItems } = useSelector((state) => state.cart);

    const getQuantity = () => {
        let quantity = 0;
        cartItems.forEach((item) => (quantity += item.quantity));
        return quantity;
    };

    const cartCount = getQuantity();

    return (
        <Link className="relative " to="/cart">
            <button className="flex items-center justify-center relative">
                <FaCartShopping className="text-purple-600 text-3xl transition-transform duration-300 transform hover:scale-110" />
                {cartCount > 0 && (
                    <div className="count absolute -top-2 -right-2 bg-red-600 rounded-full text-sm text-white w-5 h-5 flex items-center justify-center">
                        {cartCount}
                    </div>
                )}
            </button>
        </Link>
    );
};

export default CartItemButton;
