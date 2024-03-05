import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineAttachMoney } from "react-icons/md";
import StarRating from "../components/Rating";

const ProductDetails = () => {
    const [singleProduct, setSingleProduct] = useState(null);
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
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto p-10 flex gap-10">
                <div className="product-image-wrapper w-1/2">
                    {singleProduct && (
                        <img
                            src={singleProduct.thumbnail}
                            alt={singleProduct.title}
                            className="rounded-xl shadow-md aspect-3/4 object-contain"
                        />
                    )}
                </div>
                <div className="product-details-wrapper w-1/2">
                    {singleProduct && (
                        <div className="details">
                            <h3 className="product-title text-3xl font-bold mb-4">
                                {singleProduct.title}
                            </h3>
                            <div className="flex items-center mb-2">
                                <StarRating rating={singleProduct.rating} />
                                <span className="ml-2 text-lg ">
                                    {singleProduct.rating}/5
                                </span>
                            </div>
                            <div className="product-meta flex items-center mb-1">
                                <MdOutlineAttachMoney className=" text-2xl " />
                                <span className="product-price text-lg font-bold">
                                    {singleProduct.price -
                                        (singleProduct.price *
                                            singleProduct.discountPercentage) /
                                            100}
                                </span>
                            </div>
                            <div className="discount-info mb-2 text-lg flex gap-2 items-center">
                                <span className="line-through  ">
                                    ${singleProduct.price}
                                </span>
                                <span className="discount-percentage">
                                    {singleProduct.discountPercentage}%
                                </span>
                            </div>

                            <div className="product-info flex flex-col gap-2 mb-4">
                                <div className="product-info-row flex flex-row gap-4">
                                    <h5 className="info-label text-lg font-bold">
                                        Brand:
                                    </h5>
                                    <span className="info-value text-base">
                                        {singleProduct.brand}
                                    </span>
                                </div>
                                <div className="product-info-row flex flex-row gap-4">
                                    <h5 className="info-label text-lg font-bold">
                                        Category:
                                    </h5>
                                    <span className="info-value text-base">
                                        {singleProduct.category}
                                    </span>
                                </div>
                                <div className="product-info-row flex flex-row gap-4">
                                    <h5 className="info-label text-lg font-bold">
                                        Stock:
                                    </h5>
                                    <span className="info-value text-base">
                                        {singleProduct.stock == 0
                                            ? "Out Of Stock"
                                            : "In Stock"}
                                    </span>
                                </div>
                            </div>
                            <div className="product-about">
                                <h3 className="about-title text-xl font-bold mb-2">
                                    About the product:
                                </h3>
                                <p className="about-description text-base mt-2">
                                    {singleProduct.description}
                                </p>
                            </div>
                            <div className="product-btn">
                                <button className="add-to-cart-btn mt-2 p-4 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 hover:from-red-600 hover:via-pink-600 hover:to-blue-600 text-white font-bold py-3 px-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
