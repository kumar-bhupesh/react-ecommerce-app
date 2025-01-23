import React from "react";
import "./cartPage.css";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";
import { BsCartX } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import QuantityBox from "../../components/quantityBox/QuantityBox";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate totals
  const total = cartItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );

  const totalOriginalPrice = cartItems.reduce(
    (acc, item) => acc + item.originalPrice * item.quantity,
    0
  );

  const totalDiscount = cartItems.reduce(
    (acc, item) =>
      acc + (item.originalPrice - item.discountedPrice) * item.quantity,
    0
  );

  // Handlers
  const handleQuantityChange = (id, delta) => {
    dispatch(updateQuantity({ id, quantity: delta }));
    toast.success("Product quantity updated!");
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Product removed from cart!");
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Layout>
      <div className="cart-page">
        <div className="container-xl">
          <div className="row justify-content-center">
            {/* Cart Items */}
            <div className="col-md-8">
              {cartItems.length === 0 ? (
                // Empty Cart Message
                <div className="cart-page__empty-cart-message ">
                  <BsCartX className="cart-page__empty-cart-icon" />
                  <h3 className="cart-page__empty-cart-title">
                    Your cart is empty
                  </h3>
                  <p className="cart-page__empty-cart-description">
                    Looks like you haven't added anything to your cart yet.
                  </p>
                  <Link
                    to={"/products"}
                    className="btn btn-primary fw-bold mt-3"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                // Cart Items List
                cartItems.map((item) => (
                  <div key={item.id} className="row cart-page__cart-item">
                    {/* Product Image */}
                    <div className="col-4 col-md-3 cart-page__product-img-container">
                      <img
                        src={item.imagePath}
                        alt={item.name}
                        className="cart-page__product-img"
                        onClick={() => handleProductClick(item.id)}
                      />
                    </div>
                    {/* Product Details */}
                    <div className="col-8 col-md-9">
                      <h5 className="cart-page__product-name">{item.name}</h5>
                      <p className="cart-page__product-category">
                        {item.category}
                      </p>
                      <div className="cart-page__price">
                        <span className="cart-page__price-discounted">
                          ₹{item.discountedPrice}
                        </span>
                        <span className="cart-page__price-original">
                          ₹{item.originalPrice}
                        </span>
                        <span className="cart-page__discount-percentage">
                          {item.discountPercentage}% Off
                        </span>
                      </div>

                      {/* quantity controls */}
                      <div className="cart-page__quantity-controls-container">
                        <QuantityBox
                          item={item}
                          onQuantityChange={handleQuantityChange}
                        />
                        <a
                          className="cart-page__delete-quantity"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Order Summary */}
            {cartItems.length > 0 && (
              <div className="col-md-4">
                <div className="order-summary">
                  <h4 className="order-summary__title">Order Summary</h4>
                  <div className="order-summary__price-breakdown">
                    <p className="order-summary__price-detail-row">
                      <span>Original Price</span>
                      <span>₹{totalOriginalPrice}</span>
                    </p>
                    <p className="order-summary__price-detail-row">
                      <span>Discount</span>
                      <span style={{ color: "green" }}>− ₹{totalDiscount}</span>
                    </p>
                    <p className="order-summary__price-detail-row">
                      <span>Shipping</span>
                      <span style={{ color: "green" }}> Free</span>
                    </p>
                    <hr />
                    <h5 className="order-summary__total">
                      <span>Total</span> <span>₹{total}</span>
                    </h5>
                    <button className="btn btn-primary mt-3 w-100 fw-medium">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
