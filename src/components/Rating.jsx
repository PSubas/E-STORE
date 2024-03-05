/* eslint-disable react/prop-types */
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

const StarRating = ({ rating }) => {
    const renderStars = () => {
        const filledStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        let stars = [];

        for (let i = 0; i < filledStars; i++) {
            stars.push(<MdStar key={i} className="text-yellow-500" />);
        }

        if (hasHalfStar) {
            stars.push(
                <MdStarHalf key={filledStars} className="text-yellow-500" />
            );
        }

        const remainingStars = 5 - stars.length;

        for (let i = 0; i < remainingStars; i++) {
            stars.push(<MdStarBorder key={i + filledStars + 1} />);
        }

        return stars;
    };

    return (
        <div className="flex text-xl my-4">
            {renderStars().map((star, index) => (
                <div key={index}>{star}</div>
            ))}
        </div>
    );
};

export default StarRating;
