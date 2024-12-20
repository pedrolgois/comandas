"use client";
import { createContext, useReducer } from "react";

// Initial state
import productsInitialState from "./ProductContext/initialState";

// Types
import { ProductActionType, ProductReducer } from "./ProductContext/reducer";

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

  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}
