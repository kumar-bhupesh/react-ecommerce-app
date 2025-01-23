import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterOptions: {
    categories: [],
    brands: [],
    discounts: [],
    ratings: [],
    price: [],
  },
  maxSelectablePrice: null,
  filters: {
    brands: true,
    categories: true,
  },
  selectedSortOption: {
    label: "Recommended",
    value: "recommended",
  },
  activeSortOption: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterOptions: (state, action) => {
      const { filterType, filterValues } = action.payload;
      state.filterOptions[filterType] = filterValues;
    },
    setMaxSelectablePrice: (state, action) => {
      state.maxSelectablePrice = action.payload;
    },
    resetFilters: (state) => {
      state.filterOptions = {
        categories: [],
        brands: [],
        discounts: [],
        ratings: [],
        price: [0, state.maxSelectablePrice],
      };
      state.selectedSortOption = {
        label: "Recommended",
        value: "recommended",
      };
      state.activeSortOption = null;
    },
    resetSpecificFilter: (state, action) => {
      const { filterType } = action.payload;

      if (filterType === "price") {
        state.filterOptions[filterType] = [0, state.maxSelectablePrice];
      } else {
        state.filterOptions[filterType] = [];
      }
    },
    excludeFilters: (state, action) => {
      const { filterTypes } = action.payload;

      filterTypes.forEach((filterType) => {
        if (state.filters[filterType] !== undefined) {
          state.filters[filterType] = false; // Hide the filter
        }
      });

      Object.keys(state.filters).forEach((filterType) => {
        if (!filterTypes.includes(filterType)) {
          state.filters[filterType] = true; // Show the filter
        }
      });
    },
    setSelectedSortOption: (state, action) => {
      state.selectedSortOption = action.payload;
    },
    setActiveSortOption: (state, action) => {
      state.activeSortOption = action.payload;
    },
  },
});

export const {
  setFilterOptions,
  setMaxSelectablePrice,
  resetFilters,
  resetSpecificFilter,
  excludeFilters,
  setSelectedSortOption,
  setActiveSortOption,
} = filterSlice.actions;

export default filterSlice.reducer;
