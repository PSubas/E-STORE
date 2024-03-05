import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-between items-center py-5 px-10 shadow-xl">
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
                <Link
                    to="/services"
                    className="text-gray-700 text-lg hover:text-purple-600 transition-colors duration-300">
                    Services
                </Link>
                <Link
                    to="/blog"
                    className="text-gray-700 text-lg hover:text-purple-600 transition-colors duration-300">
                    Blog
                </Link>
                <Link
                    to="/contact"
                    className="text-gray-700 text-lg hover:text-purple-600 transition-colors duration-300">
                    Contact
                </Link>
            </nav>
            <div className="buttons flex items-center gap-5">
                <button className="relative">
                    <div className="count absolute -top-2 -right-3 bg-red-700 rounded-full text-white text-sm p-1 px-2">
                        2
                    </div>
                    <FaCartShopping className="text-purple-600 text-3xl transition-transform duration-300 transform hover:scale-110" />
                </button>
                <button className="cart-btn bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 hover:from-red-600 hover:via-pink-600 hover:to-blue-600 text-white font-bold py-3 px-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Login
                </button>
            </div>
        </header>
    );
};

export default Header;
