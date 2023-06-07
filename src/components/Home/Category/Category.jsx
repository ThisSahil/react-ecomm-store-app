import React from "react";

import "./Category.scss";
import { CartState } from "../../../context/Context";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const { categories, products } = CartState();
  // console.log(categories);
  // console.log(products);

  const {
    productstate: { categoryFilters },
    productDispatch,
  } = CartState();

  const handleClick = (categoryName) => {
    productDispatch({
      type: "TOGGLE_CATEGORIES",
      payload: categoryName,
    });

    navigate("/products");
  };

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.map((elem) => (
          <div className="category">
            <img
              onClick={() => handleClick(elem.categoryName)}
              src={elem.img}
              alt=""
            />
            <h3 style={{ textTransform: "uppercase" }}>{elem.categoryName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
