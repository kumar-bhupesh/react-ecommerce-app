import React, { useEffect, useState } from "react";
import "./filterMenu.css";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { filterMenuData } from "../../data/filterMenuData";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  setFilterOptions,
  setMaxSelectablePrice,
} from "../../features/filter/filterSlice";
import { productsData } from "../../data/productsData";

const FilterMenu = () => {
  const [isClearButtonVisible, setIsClearButtonVisible] = useState(false);
  const dispatch = useDispatch();
  const maxSelectablePrice = useSelector(
    (state) => state.filter.maxSelectablePrice
  );
  const filters = useSelector((state) => state.filter.filters);
  const filterOptions = useSelector((state) => state.filter.filterOptions);

  const handleCheckboxChange = (e, filterType) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    const updatedItems = isChecked
      ? [...filterOptions[filterType], value]
      : filterOptions[filterType].filter((item) => item !== value);

    dispatch(setFilterOptions({ filterType, filterValues: updatedItems }));
  };

  const handlePriceChange = (newRange) => {
    dispatch(setFilterOptions({ filterType: "price", filterValues: newRange }));
  };

  const checkIfClearButtonShouldBeVisible = () => {
    return Object.keys(filterOptions).some((filterType) => {
      if (filterType === "price") {
        return (
          filterOptions[filterType][0] !== 0 ||
          filterOptions[filterType][1] !== maxSelectablePrice
        );
      }
      return filterOptions[filterType].length > 0;
    });
  };

  useEffect(() => {
    setIsClearButtonVisible(checkIfClearButtonShouldBeVisible());
  }, [filterOptions]);

  useEffect(() => {
    let maxProductPrice =
      productsData.length > 0
        ? Math.max(...productsData.map((product) => product.discountedPrice))
        : 10000;
    dispatch(setMaxSelectablePrice(maxProductPrice));
    dispatch(
      setFilterOptions({
        filterType: "price",
        filterValues: [0, maxProductPrice],
      })
    );
  }, []);

  return (
    <div className="filter-menu">
      <div className="filter-menu__header">
        <div className="filter-menu__title">Filters</div>
        {isClearButtonVisible && (
          <button
            className="filter-menu__clear-all-btn"
            onClick={() => dispatch(resetFilters())}
          >
            Clear All
          </button>
        )}
      </div>

      {/* Categories */}
      {filters.categories && (
        <div className="filter-menu__group">
          <h5 className="filter-menu__subtitle">Categories</h5>
          {filterMenuData.categories.map((category, index) => (
            <div key={index} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={category}
                checked={filterOptions.categories.includes(category)}
                id={`category-${index}`}
                onChange={(e) => handleCheckboxChange(e, "categories")}
              />
              <label className="form-check-label" htmlFor={`category-${index}`}>
                {category}
              </label>
            </div>
          ))}
        </div>
      )}

      {/* Brands */}
      {filters.brands && (
        <div className="filter-menu__group">
          <h5 className="filter-menu__subtitle">Brands</h5>
          {filterMenuData.brands.map((brand, index) => (
            <div key={index} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={brand}
                checked={filterOptions.brands.includes(brand)}
                id={`brand-${index}`}
                onChange={(e) => handleCheckboxChange(e, "brands")}
              />
              <label className="form-check-label" htmlFor={`brand-${index}`}>
                {brand}
              </label>
            </div>
          ))}
        </div>
      )}

      {/* Price*/}
      <div className="filter-menu__group">
        <h5 className="filter-menu__subtitle">Price</h5>
        <div className="filter-menu__price-slider">
          <Slider
            range
            min={0}
            max={maxSelectablePrice}
            step={100}
            value={filterOptions.price}
            onChange={handlePriceChange}
            styles={{
              track: { backgroundColor: "#007BFF" },
              handle: { borderColor: "#007BFF" },
              rail: { backgroundColor: "#ddd" },
            }}
          />
          <div className="filter-menu__price-range">
            ₹{filterOptions.price[0]} - ₹{filterOptions.price[1]}
          </div>
        </div>
      </div>

      {/* Discounts */}
      <div className="filter-menu__group">
        <h5 className="filter-menu__subtitle">Discounts</h5>
        {filterMenuData.discounts.map((discount, index) => (
          <div key={index} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={discount.value}
              checked={filterOptions.discounts.includes(String(discount.value))}
              id={`discount-${index}`}
              onChange={(e) => handleCheckboxChange(e, "discounts")}
            />
            <label className="form-check-label" htmlFor={`discount-${index}`}>
              {discount.label}
            </label>
          </div>
        ))}
      </div>

      {/* Customer Ratings */}
      <div className="filter-menu__group">
        <h5 className="filter-menu__subtitle">Customer Ratings</h5>
        {filterMenuData.customerRatings.map((rating, index) => (
          <div key={index} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={rating.value}
              checked={filterOptions.ratings.includes(String(rating.value))}
              id={`rating-${index}`}
              onChange={(e) => handleCheckboxChange(e, "ratings")}
            />
            <label className="form-check-label" htmlFor={`rating-${index}`}>
              {rating.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;
