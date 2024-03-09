import { useSelector } from "react-redux";
import CartItemCard from "../components/CartItemCard";
import OrderValue from "../components/OrderValue";

const CartPage = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const isEven = cartItems.length % 2 === 0;

    return (
        <div className="mx-auto px-5">
            {cartItems.length < 1 ? (
                <div className="text-center mt-10">
                    <h2>No Products</h2>
                </div>
            ) : (
                <div className=" grid grid-cols-4 gap-6 ">
                    <div className="col-span-3 ">
                        <div
                            className={`flex  flex-wrap gap-5 items-center ${
                                isEven ? "justify-evenly" : "justify-center"
                            }`}>
                            {cartItems.map((item, index) => (
                                <div key={index}>
                                    <CartItemCard product={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1  sticky me-12 py-28 ">
                        <div className="rounded-lg p-6 shadow-lg border border-black ">
                            <OrderValue />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
