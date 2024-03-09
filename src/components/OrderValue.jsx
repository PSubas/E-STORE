import { useSelector } from "react-redux";

const OrderValue = () => {
    const { cartItems } = useSelector((state) => state.cart);

    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.quantity * item.price;
        });
        return { totalPrice, totalQuantity };
    };

    const quantity = getTotal(cartItems).totalQuantity;
    const price = getTotal(cartItems).totalPrice;

    return (
        <div className="pt-5 pb-10 px-3 bg-white shadow-lg">
            <h2 className="font-bold text-center text-2xl mb-5">Order Value</h2>

            <h3 className="text-xl text-center  ">
                Total Quantity: <span className="font-bold"> {quantity}</span>
            </h3>
            <h3 className="text-xl text-center mt-5  ">
                Total Price:{" "}
                <span className="font-bold">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(price)}
                </span>
            </h3>

            <div className=" mt-7">
                <button className="block my-4 mx-auto bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 hover:from-red-600 hover:via-pink-600 hover:to-blue-600 text-white font-bold py-3 px-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default OrderValue;
