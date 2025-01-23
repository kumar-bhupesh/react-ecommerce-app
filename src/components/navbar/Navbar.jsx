import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCart, IoPersonSharp } from "react-icons/io5";
import { navbarItems } from "../../data/navbarData";
import SearchAutoSuggest from "../searchAutoSuggest/SearchAutoSuggest";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-xl">
        <div className="d-flex gap-2 ">
          <button
            className="navbar-toggler ps-0 "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to={"/"} className="navbar-brand" href="#">
            ReactEcom
          </Link>
        </div>

        <div
          className="offcanvas offcanvas-start "
          id="offcanvasMenu"
          tabIndex="-1"
          aria-labelledby="offcanvasMenuLabel"
        >
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title fw-bold" id="offcanvasMenuLabel">
              ReactEcom
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navbarItems.map((item) => (
                <li className="nav-item" key={item.name}>
                  <a
                    className="nav-link"
                    aria-current="page"
                    data-bs-dismiss="offcanvas"
                    onClick={() => navigate(item.path)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*SearchAutoComplete */}
        <div className="order-2 order-md-1 me-md-4 my-2 my-md-0 search-container ">
          <SearchAutoSuggest />
        </div>

        {/* icons */}
        <div className="icon-container d-flex gap-3 gap-md-4 align-items-center order-1 order-md-2">
          <Link to={"/cart"} className="icon-link">
            <IoCart size={24} />
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </Link>
          <a href="#" className="icon-link">
            <IoPersonSharp size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
