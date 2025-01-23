import React from "react";
import "./productCard.css";

import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";
import RatingStars from "../ratingStars/RatingStars";

const ProductCard = ({ product, className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isInCart = cartItems?.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
    toast.success("Product added to cart successfully!");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className={`${className} mb-4`}>
      <div className="product-card">
        <FaRegHeart
          className="product-card__wishlist-icon"
          aria-label="Add to wishlist"
          title="Add to wishlist"
        />
        <img
          src={product.imagePath}
          onClick={() => handleProductClick()}
          className="product-card__img"
          alt="product image"
        />
        <div className="product-card__content">
          <p
            className="product-card__title"
            onClick={() => handleProductClick()}
          >
            {product.name}
          </p>
          <div className="product-card__rating">
            <RatingStars rating={product.ratings.average} />
            <span className="product-card__rating-count">
              ({product.ratings.count})
            </span>
          </div>
          <div className="product-card__price-details">
            <span className="product-card__discounted-price">
              ₹{product.discountedPrice}
            </span>
            <span className="product-card__original-price">
              ₹{product.originalPrice}
            </span>
            <span className="product-card__discount-percentage">
              {product.discountPercentage}% Off
            </span>
          </div>
          <button
            className={"btn btn-primary w-100 fw-medium"}
            onClick={isInCart ? goToCart : handleAddToCart}
          >
            {isInCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
