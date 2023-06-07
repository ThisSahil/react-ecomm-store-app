export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };

    case "FILTER_BY_SEARCH":
      return { ...state, searchText: action.payload };

    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };

    case "FILTER_BY_CATEGORY":
      return { ...state, setCategory: action.payload };

    case "SET_PRICE_SLIDER":
      return { ...state, price: action.payload };

    case "CLEAR_FILTERS":
      return {
        byRating: 0,
        sort: "",
        categoryFilters: new Set(),
        searchText: "",
        // price: 500,
      };

    case "TOGGLE_CATEGORIES": {
      const category = action.payload;
      const { categoryFilters } = state;

      const updatedFilter = new Set(categoryFilters);

      if (updatedFilter.has(category)) {
        updatedFilter.delete(category);
      } else {
        updatedFilter.add(category);
      }

      return {
        ...state,
        categoryFilters: updatedFilter,
      };
    }

    default:
      return state;
  }
};
