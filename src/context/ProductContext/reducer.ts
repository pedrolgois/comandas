import { Product } from "@/models/tab";
import * as types from "./types";

export type ProductStateType = {
  products: Product[];
};

export type ProductActionType = {
  type: string;
  payload: ProductStateType;
};

// Reducers
export function ProductReducer(
  state: ProductStateType,
  action: ProductActionType
) {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return { ...state, products: action.payload.products };
    case types.CREATE_PRODUCT:
    case types.DELETE_PRODUCT:
    case types.UPDATE_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}
