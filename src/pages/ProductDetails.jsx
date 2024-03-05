import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const [singleProduct, setSingleProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getSingleProductDetail = async () => {
            try {
                const response = await axios.get(
                    `https://dummyjson.com/products/${id}`
                );
                setSingleProduct(response.data);
            } catch (error) {
                console.log("Error Fetching Product Details:", error);
            }
        };

        getSingleProductDetail();
    }, [id]);
    console.log(singleProduct);
    return (
        <div className="grid grid-cols-3 gap-4">
            <div>
                <img src={singleProduct.thumbnail} alt={singleProduct.title} />
            </div>
            <div>
                <h2>{singleProduct.title}</h2>
                <p>${singleProduct.price}</p>
                <span>Category: {singleProduct.category}</span>
                <span>{singleProduct.description}</span>
            </div>
            <div className="conatiner">
                <h2>Reviews</h2>
            </div>
        </div>
    );
};

export default ProductDetails;
