import React from "react";
import "./productDetailsPage.css";
import Layout from "../../components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import user from "../../assets/images/user.png";
import { toast } from "react-toastify";
import RatingStars from "../../components/ratingStars/RatingStars";
import { productsData } from "../../data/productsData";
import ProductsSection from "../../components/productsSection/ProductsSection";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = productsData.find((p) => p.id === parseInt(id));
  const relatedProducts = productsData.filter(
    (item) => item.category === product.category && item.id !== product.id
  );
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
    toast.success("Product added to cart successfully!");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Layout>
      <div className="product-details-page">
        <div className="product-details">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-6">
                {/* Product Image */}
                <div className="product-details__img-container">
                  <img
                    src={product.imagePath}
                    alt={product.name}
                    className="product-details__img"
                  />
                </div>
                {/* action buttons */}
                <div className="product-details__action-buttons">
                  <button
                    className="btn btn-primary w-50 fw-medium btn-lg"
                    onClick={isInCart ? goToCart : handleAddToCart}
                  >
                    {isInCart ? "Go to Cart" : "Add to Cart"}
                  </button>
                  <button className="btn btn-danger w-50 fw-medium btn-lg">
                    Buy Now
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                {/* Product Main Info */}
                <div className="product-details__main-info">
                  <h4 className="product-details__title">{product.name}</h4>
                  <p className="product-details__category">
                    {product.category}
                  </p>
                  <div className="product-details__rating">
                    <RatingStars rating={product.ratings.average} />
                    <span className="product-details__rating-count">
                      ({product.ratings.count} ratings)
                    </span>
                  </div>
                  <div className="product-details__price">
                    <span className="product-details__price-discounted">
                      ₹{product.discountedPrice}
                    </span>
                    <span className="product-details__price-original">
                      ₹{product.originalPrice}
                    </span>
                    <span className="product-details__discount-percentage">
                      {product.discountPercentage}% Off
                    </span>
                  </div>
                </div>

                {/* Offers */}
                <div className="product-details__offers">
                  <h4 className="product-details__offers-title">
                    Exclusive Offers
                  </h4>
                  <ul>
                    <li className="mb-2">
                      <strong>Bank Offer:</strong> Get 10% Instant Discount on
                      select bank credit and debit cards.
                    </li>
                    <li className="mb-2">
                      <strong>Exchange Offer:</strong> Get up to ₹500 off when
                      you exchange your old product.
                    </li>
                    <li>
                      <strong>EMI Options:</strong> Easy EMI plans available,
                      starting from ₹499/month.
                    </li>
                  </ul>
                </div>

                {/* Product Overview */}
                <div className="product-details__Overview">
                  <h4 className="product-details__Overview-title">
                    Product Details
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tincidunt lacus at velit tincidunt, sed placerat
                    ligula dictum. Suspendisse potenti. Quisque volutpat, lacus
                    non tincidunt vehicula, magna odio hendrerit metus, a
                    vehicula lacus ligula nec tortor.
                  </p>
                  <ul>
                    <li>Brand: {product.brand}</li>
                    <li>Category: {product.category}</li>
                    <li>Lorem ipsum: Lorem ipsum</li>
                    <li>Lorem ipsum: Lorem ipsum</li>
                    <li>Warranty: 1 year</li>
                  </ul>
                </div>

                {/* Product Reviews*/}
                <div className="product-details__reviews">
                  <h4 className="product-details__reviews-title">
                    Customer Reviews
                  </h4>
                  {product.reviews.length > 0 ? (
                    <div className="product-details__reviews-items">
                      {product.reviews.map((review, index) => (
                        <div
                          key={index}
                          className="product-details__review-item"
                        >
                          <div className="product-details__review-user-info">
                            <img
                              className="product-details__review-user-avatar"
                              src={user}
                              alt=""
                            />
                            <h5 className="product-details__review-username">
                              {review.userName}
                            </h5>
                          </div>
                          <div className="product-details__review-rating">
                            <RatingStars rating={review.rating} />
                            <span>|</span>
                            <span className="product-details__review-date">
                              {formatDate(review.date)}
                            </span>
                          </div>
                          <p className="product-details__review-comment">
                            {review.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No reviews yet. Be the first to review!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Realated Products section */}
        <ProductsSection
          title="Related Products"
          bgColor="#fff"
          products={relatedProducts}
        />
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;
