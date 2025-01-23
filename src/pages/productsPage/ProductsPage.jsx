import React, { useState, useEffect } from "react";
import "./productsPage.css";
import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/productCard/ProductCard";
import FilterMenu from "../../components/filterMenu/FilterMenu";
import { productsData } from "../../data/productsData";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSortOption,
  setSelectedSortOption,
} from "../../features/filter/filterSlice";
import { SlArrowDown } from "react-icons/sl";
import { FiFilter } from "react-icons/fi";
import { BiSort } from "react-icons/bi";
import { FaSadTear } from "react-icons/fa";

const ProductsPage = () => {
  const [isMobileSortMenuOpen, setIsMobileSortMenuOpen] = useState(null);
  const [isMobileFilterMenuOpen, setIsMobileFilterMenuOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const sortOptions = [
    { label: "Price: Low to High", value: "priceLowToHigh" },
    { label: "Price: High to Low", value: "priceHighToLow" },
  ];

  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const searchResults = useSelector((state) => state.search.searchResults);
  const filterOptions = useSelector((state) => state.filter.filterOptions);
  const selectedSortOption = useSelector(
    (state) => state.filter.selectedSortOption
  );
  const activeSortOption = useSelector(
    (state) => state.filter.activeSortOption
  );

  const sortProducts = (products, sortOption) => {
    if (sortOption === "recommended") {
      return products;
    }

    switch (sortOption) {
      case "priceLowToHigh":
        return [...products].sort(
          (a, b) => a.discountedPrice - b.discountedPrice
        );
      case "priceHighToLow":
        return [...products].sort(
          (a, b) => b.discountedPrice - a.discountedPrice
        );
      default:
        return products;
    }
  };

  const handleDesktopSortChange = (option) => {
    dispatch(setSelectedSortOption(option));
    dispatch(setActiveSortOption(option));
  };

  const handleMobileSortChange = (option) => {
    dispatch(setSelectedSortOption(option));
    dispatch(setActiveSortOption(option));
    setIsMobileSortMenuOpen(false);
  };

  const applyFilters = () => {
    let updatedProducts =
      searchQuery.length > 0 ? [...searchResults] : [...productsData];

    const { categories, brands, discounts, ratings, price } = filterOptions;

    if (categories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        categories.includes(product.category)
      );
    }

    if (brands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        brands.includes(product.brand)
      );
    }

    if (discounts.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        discounts.some((discount) => product.discountPercentage >= discount)
      );
    }

    if (ratings.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        ratings.some((rating) => product.ratings.average >= rating)
      );
    }

    if (price.length === 2) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.discountedPrice >= price[0] &&
          product.discountedPrice <= price[1]
      );
    }

    const sortedProducts = sortProducts(
      updatedProducts,
      selectedSortOption.value
    );
    setFilteredProducts(sortedProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [searchResults, filterOptions, selectedSortOption]);

  return (
    <Layout>
      <div className="container-fluid py-3">
        <div className="row">
          {/* Desktop Filter Sidebar */}
          <div className="col-3 col-xxl-2 d-none d-lg-block border-end border-top p-0">
            <FilterMenu />
          </div>

          {/* Products grid */}
          <div className="col-12 col-lg-9 col-xxl-10">
            <div className="d-none d-lg-flex justify-content-end">
              {/* Desktop Sort */}
              <div className="sort-dropdown">
                <div className="sort-dropdown__header">
                  <span>Sort by:</span>
                  <span className="sort-dropdown__selected-option">
                    {selectedSortOption.label}
                  </span>
                  <SlArrowDown className="sort-dropdown__icon" />
                </div>
                <ul className="sort-dropdown__menu">
                  <li key="recommended">
                    <button
                      className={`sort-dropdown__item ${
                        activeSortOption?.value === "recommended"
                          ? "sort-dropdown__item--active"
                          : ""
                      }`}
                      onClick={() =>
                        handleDesktopSortChange({
                          label: "Recommended",
                          value: "recommended",
                        })
                      }
                    >
                      Recommended
                    </button>
                  </li>
                  {sortOptions.map((option) => (
                    <li key={option.value}>
                      <button
                        className={`sort-dropdown__item ${
                          activeSortOption?.value === option.value
                            ? "sort-dropdown__item--active"
                            : ""
                        }`}
                        onClick={() => handleDesktopSortChange(option)}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              // No Products Message
              <div className="no-products">
                <FaSadTear className="no-products__icon" />
                <h4>Sorry, no products found!</h4>
                <p>
                  Please check the spelling, try a different search, or adjust
                  your filters.
                </p>
              </div>
            ) : (
              //  Products card
              <div className="row justify-content-center mt-2 ps-md-2 ">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className="col-10 col-sm-6 col-md-4 col-xxl-3"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Mobile Filter-Sort Bar */}
          <div className="mob-filter-sort-bar d-lg-none">
            <div
              className="mob-filter-sort-bar__sort-btn"
              onClick={() => setIsMobileSortMenuOpen(true)}
            >
              <BiSort size={20} /> Sort
            </div>
            <span>|</span>
            <div
              className="mob-filter-sort-bar__filter-btn"
              onClick={() => setIsMobileFilterMenuOpen(true)}
            >
              <FiFilter size={20} /> Filter
            </div>
          </div>

          {/* Mobile Sort Menu */}
          <div
            className={`offcanvas offcanvas-bottom mob-sort-menu d-lg-none ${
              isMobileSortMenuOpen ? "show" : ""
            }`}
            tabIndex="-1"
            onClick={() => setIsMobileSortMenuOpen(false)}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Sort By</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setIsMobileSortMenuOpen(false)}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul>
                {sortOptions.map((option) => (
                  <li
                    key={option.value}
                    className={` ${
                      activeSortOption?.value === option.value ? "active" : ""
                    }`}
                    onClick={() => handleMobileSortChange(option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Filter Menu */}
          <div
            id="mob-filter-menu"
            className={`offcanvas offcanvas-start ${
              isMobileFilterMenuOpen ? "show" : ""
            }`}
            tabIndex="-1"
          >
            <div className="offcanvas-header pb-0">
              <button
                type="button"
                className="btn-close"
                onClick={() => setIsMobileFilterMenuOpen(false)}
              ></button>
            </div>
            <div className="offcanvas-body">
              <FilterMenu />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
