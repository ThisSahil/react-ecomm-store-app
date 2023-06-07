import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.scss";
import { CartState } from "../../context/Context";
import Filters from "../Filters/Filters";
import { FaSearch } from "react-icons/fa";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Products = () => {
  const { products, setProducts } = CartState();
  // console.log(products);

  const {
    productstate: { byRating, sort, categoryFilters, price, searchText },
    productDispatch,
  } = CartState();

  console.log(categoryFilters);

  const filterProducts = () => {
    let updatedproducts = products;

    if (sort) {
      updatedproducts = updatedproducts.sort((a, b) =>
        sort === "lowtohigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (price > 0) {
      updatedproducts = updatedproducts.filter((prod) => prod.price >= price);
    }

    if (categoryFilters.size > 0) {
      updatedproducts = updatedproducts.filter((prod) =>
        categoryFilters.has(prod.categoryName)
      );

      console.log(updatedproducts);
    }

    if (byRating) {
      updatedproducts = updatedproducts.filter(
        (prod) => prod.rating > byRating
      );
    }

    if (searchText) {
      let search = searchText.toLowerCase();
      updatedproducts = updatedproducts.filter((prod) =>
        prod.name.toLowerCase().includes(search)
      );
      console.log(updatedproducts);
    }

    return updatedproducts;
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner-style">
          <ClimbingBoxLoader
            color={"#6b21a8"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="all-products">
          <Filters />
          <div className="products-container">
            <div className="search-container">
              <div className="search-icon">
                <FaSearch />
              </div>
              <input
                value={searchText}
                placeholder="Search..."
                className="search-field"
                onChange={(e) =>
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  })
                }
              />
            </div>

            <div className="sec-heading">All Products</div>
            <div className="products">
              {filterProducts().map((prod) => (
                <>
                  <Product prod={prod} key={prod.id} />
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
