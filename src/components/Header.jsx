import { Link } from "react-router-dom";
import CartItemButton from "./CartButton";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white py-5 px-10 shadow-xl">
            <div className="flex justify-between items-center">
                <div className="logo">
                    <h3 className="text-xl font-bold text-blue-600">E-STORE</h3>
                </div>
                <nav className="space-x-3">
                    <Link
                        to={"/"}
                        className="text-gray-700 text-lg hover:text-purple-600 transition-colors duration-300">
                        Home
                    </Link>
                    <Link
                        to="/products"
                        className="text-gray-700 text-lg hover:text-purple-600 transition-colors duration-300">
                        Products
                    </Link>
                </nav>
                <div className="buttons flex items-center gap-5">
                    <CartItemButton />
                    <button className="cart-btn bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 hover:from-red-600 hover:via-pink-600 hover:to-blue-600 text-white font-bold py-3 px-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
