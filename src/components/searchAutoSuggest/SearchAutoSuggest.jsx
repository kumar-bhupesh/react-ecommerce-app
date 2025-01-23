import React, { useEffect, useRef, useState } from "react";
import "./searchAutoSuggest.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {
  excludeFilters,
  resetFilters,
} from "../../features/filter/filterSlice";
import {
  setSearchQuery,
  setSearchResults,
} from "../../features/search/searchSlice";
import { productsData } from "../../data/productsData";

const SearchAutoSuggest = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const searchQuery = useSelector((state) => state.search.searchQuery);

  useEffect(() => {
    if (location.pathname !== "/products") {
      dispatch(setSearchQuery(""));
      dispatch(resetFilters());
      dispatch(excludeFilters({ filterTypes: [] }));
    }
  }, [location.pathname]);

  const handleClickOutside = (event) => {
    if (
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target)
    ) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const generateSearchSuggestions = (query) => {
    let brandSuggestions = [];
    let categorySuggestions = [];
    let brandCategorySuggestions = [];
    let productNameSuggestions = [];

    productsData.forEach((product) => {
      const brand = product.brand.toLowerCase();
      const category = product.category.toLowerCase();
      const name = product.name.toLowerCase();
      const brandCategory = `${brand} ${category}`;

      if (brand.includes(query)) brandSuggestions.push(brand);
      if (category.includes(query)) categorySuggestions.push(category);
      if (brandCategory.includes(query))
        brandCategorySuggestions.push(brandCategory);
      if (name.includes(query)) productNameSuggestions.push(name);
    });

    const allSuggestions = [
      ...brandSuggestions,
      ...categorySuggestions,
      ...brandCategorySuggestions,
      ...productNameSuggestions,
    ];

    const uniqueSuggestions = [...new Set(allSuggestions)].slice(0, 8);

    setSearchSuggestions(uniqueSuggestions);
  };

  const handleFilterExclusion = (query) => {
    const isBrand = productsData.some(
      (product) => product.brand.toLowerCase() === query.toLowerCase()
    );
    const isCategory = productsData.some(
      (product) => product.category.toLowerCase() === query.toLowerCase()
    );

    const splitSuggestion = query.toLowerCase().split(" ");

    let filtersToExclude = [];

    if (isBrand) {
      filtersToExclude.push("brands");
    }

    if (isCategory) {
      filtersToExclude.push("categories");
    }

    if (splitSuggestion.length > 1 && filtersToExclude.length === 0) {
      const isBrandAndCategory = productsData.some(
        (product) =>
          splitSuggestion.includes(product.brand.toLowerCase()) &&
          splitSuggestion.includes(product.category.toLowerCase())
      );

      if (isBrandAndCategory) {
        filtersToExclude.push("brands", "categories");
      }
    }

    dispatch(excludeFilters({ filterTypes: filtersToExclude }));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
    const query = e.target.value.trim().toLowerCase();

    if (query.length > 1) {
      setShowSuggestions(true);
      generateSearchSuggestions(query);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (selectedSuggestion) => {
    setShowSuggestions(false);
    dispatch(setSearchQuery(selectedSuggestion));

    const results = productsData.filter(
      (product) =>
        product.category.toLowerCase().includes(selectedSuggestion) ||
        product.brand.toLowerCase().includes(selectedSuggestion) ||
        product.name.toLowerCase().includes(selectedSuggestion) ||
        `${product.brand.toLowerCase()} ${product.category.toLowerCase()}`.includes(
          selectedSuggestion
        )
    );
    dispatch(setSearchResults(results));
    handleFilterExclusion(selectedSuggestion);
    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim().length > 1) {
      setShowSuggestions(false);

      const results = productsData.filter(
        (product) =>
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          `${product.brand.toLowerCase()} ${product.category.toLowerCase()}`.includes(
            searchQuery.toLowerCase()
          )
      );
      dispatch(setSearchResults(results));
      handleFilterExclusion(searchQuery);

      // Blur the input
      if (inputRef.current) {
        inputRef.current.blur();
      }

      if (location.pathname !== "/products") {
        navigate("/products");
      }
    }
  };

  const handleFocus = () => {
    if (searchQuery.trim().length > 1) {
      generateSearchSuggestions(searchQuery);
      setShowSuggestions(true);
    }
  };

  return (
    <div className="search-auto-suggest" ref={suggestionsRef}>
      <input
        type="text"
        className="form-control search-auto-suggest__input"
        placeholder="Search for products, brands and more"
        aria-label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        ref={inputRef}
      />
      <BsSearch className="search-auto-suggest__search-icon" />

      {/* Suggestions box */}
      {showSuggestions && searchSuggestions && (
        <ul className="search-auto-suggest__results">
          {searchSuggestions.map((item, index) => (
            <li
              key={index}
              className="search-auto-suggest__item"
              onClick={() => handleSuggestionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchAutoSuggest;
