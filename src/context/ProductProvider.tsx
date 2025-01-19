"use client";
import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import productsInitialState from "./ProductContext/initialState";
import { ProductActionType, ProductReducer } from "./ProductContext/reducer";
import * as types from "./ProductContext/types";

type ProductContextType = {
  productsState: typeof productsInitialState;
  productsDispatch: React.Dispatch<ProductActionType>;
};

export const ProductsContext = createContext<ProductContextType>({
  productsState: productsInitialState,
  productsDispatch: () => null,
});

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [productsState, productsDispatch] = useReducer(
    ProductReducer,
    productsInitialState
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        productsDispatch({
          type: types.GET_PRODUCTS,
          payload: { products: response.data },
        });
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}
