/* eslint-disable react/prop-types */
import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ value }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        if (index < value) {
            return <FaStar key={index} className="text-yellow-400 text-xl" />;
        } else {
            return <FaRegStar key={index} className="text-gray-300 text-xl" />;
        }
    });

    return <div className="flex">{stars}</div>;
};

export default Rating;
