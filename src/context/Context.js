import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { productReducer } from "./Reducer";
// import { dataReducer, initialState } from "./Reducer";

const DataContext = createContext();

export const getProducts = async () => {
  const res = await axios.get("/api/products");
  const products = await res.data.products;
  return products;
};

export const getCategories = async () => {
  const res = await axios.get("/api/categories");
  const categories = await res.data.categories;
  return categories;
};

const Context = ({ children }) => {
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const resCategories = await axios.get("/api/categories");
  //       dispatch({
  //         type: "INITIALIZE_CATEGORIES",
  //         payload: { categories: resCategories.data.categories },
  //       });

  //       const resProducts = await axios.get("/api/products");
  //       dispatch({
  //         type: "INITIALIZE_PRODUCTS",
  //         payload: { products: resProducts.data.products },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  // const [state, dispatch] = useReducer(dataReducer, initialState);
  //   console.log(state.categories);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const [productstate, productDispatch] = useReducer(productReducer, {
    sort: "",
    byRating: 0,
    categoryFilters: new Set(),
    price: 0,
    searchText: "",
  });

  useEffect(() => {
    (async () => {
      try {
        setProducts(await getProducts());
      } catch (e) {
        console.log(e.message);
      }
    })();
    (async () => {
      try {
        setCategories(await getCategories());
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        cartCount,
        setCartCount,
        productstate,
        productDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(DataContext);
};
