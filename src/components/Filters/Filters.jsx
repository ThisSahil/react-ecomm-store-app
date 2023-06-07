import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Filters.scss";
import { CartState } from "../../context/Context";

const Filters = () => {
  const {
    productstate: { byRating, sort, categoryFilters, price },
    productDispatch,
  } = CartState();

  // console.log(byRating, sort);

  const handleCategoryToggle = (category) => {
    productDispatch({
      type: "TOGGLE_CATEGORIES",
      payload: category,
    });
  };

  return (
    <div className="filters">
      <span className="filter-title">Filter Products</span>

      <Form.Label className="filter-subtitle">Price</Form.Label>
      <span>
        <div className="range-slider">
          <div className="range-labels">
            <span className="range-start">1000</span>
            <span className="range-mid">2000</span>
            <span className="range-end">3000</span>
          </div>
          <input
            onChange={(e) =>
              productDispatch({
                type: "SET_PRICE_SLIDER",
                payload: e.target.value,
              })
            }
            type="range"
            min="1000"
            max="3000"
            step="100"
            className="slider"
          />
        </div>
      </span>

      <Form.Label className="filter-subtitle">Sort by</Form.Label>

      <div className="radioButton">
        <label className="radioButtonLabel">
          <input
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowtohigh",
              })
            }
            checked={sort === "lowtohigh" ? true : false}
            type="radio"
            value="lowtohigh"
            name="sort_price"
            className="radioButtonInput"
          />
          <div className="radioButtonCustom">
            <div className="radioButtonIndicator"></div>
          </div>
          <span className="radioButtonLabelContent">Price - Low to High</span>
        </label>

        <label className="radioButtonLabel">
          <input
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "hightolow",
              })
            }
            checked={sort === "hightolow" ? true : false}
            type="radio"
            value="hightolow"
            name="sort_price"
            className="radioButtonInput"
          />
          <div className="radioButtonCustom">
            <div className="radioButtonIndicator"></div>
          </div>
          <span className="radioButtonLabelContent">Price - High to Low</span>
        </label>
      </div>

      <Form.Label className="filter-subtitle">Category</Form.Label>

      <label className="checkbox">
        <input
          checked={categoryFilters.has("Headphones")}
          onChange={() => handleCategoryToggle("Headphones")}
          type="checkbox"
        />
        <span className="checkmark"></span>
        Headphones
      </label>

      <label className="checkbox">
        <input
          checked={categoryFilters.has("Bluetooth Speakers")}
          onChange={() => handleCategoryToggle("Bluetooth Speakers")}
          type="checkbox"
        />
        <span className="checkmark"></span>
        Bluetooth Speakers
      </label>

      <label className="checkbox">
        <input
          checked={categoryFilters.has("Smartwatches")}
          onChange={() => handleCategoryToggle("SmartWatches")}
          type="checkbox"
        />
        <span className="checkmark"></span>
        Smartwatches
      </label>

      <label className="checkbox">
        <input
          checked={categoryFilters.has("Wireless Earbuds")}
          onChange={() => handleCategoryToggle("Wireless Earbuds")}
          type="checkbox"
        />
        <span className="checkmark"></span>
        Wireless Earbuds
      </label>

      <span>
        <Form.Label className="filter-subtitle">Ratings</Form.Label>
        <div className="radioButton">
          <label className="radioButtonLabel">
            <input
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_RATING",
                  payload: 4,
                })
              }
              checked={byRating === 4 ? true : false}
              type="radio"
              value="option1"
              name="rating"
              className="radioButtonInput"
            />
            <div className="radioButtonCustom">
              <div className="radioButtonIndicator"></div>
            </div>
            <span className="radioButtonLabelContent">4 stars & above</span>
          </label>

          <label className="radioButtonLabel">
            <input
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_RATING",
                  payload: 3,
                })
              }
              checked={byRating === 3 ? true : false}
              type="radio"
              value="option2"
              name="rating"
              className="radioButtonInput"
            />
            <div className="radioButtonCustom">
              <div className="radioButtonIndicator"></div>
            </div>
            <span className="radioButtonLabelContent">3 stars & above</span>
          </label>

          <label className="radioButtonLabel">
            <input
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_RATING",
                  payload: 2,
                })
              }
              checked={byRating === 2 ? true : false}
              type="radio"
              value="option3"
              name="rating"
              className="radioButtonInput"
            />
            <div className="radioButtonCustom">
              <div className="radioButtonIndicator"></div>
            </div>
            <span className="radioButtonLabelContent">2 stars & above</span>
          </label>

          <label className="radioButtonLabel">
            <input
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_RATING",
                  payload: 1,
                })
              }
              checked={byRating === 1 ? true : false}
              type="radio"
              value="option4"
              name="rating"
              className="radioButtonInput"
            />
            <div className="radioButtonCustom">
              <div className="radioButtonIndicator"></div>
            </div>
            <span className="radioButtonLabelContent">1 stars & above</span>
          </label>
        </div>
      </span>

      <button
        onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
        className="clear-filters-button"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
