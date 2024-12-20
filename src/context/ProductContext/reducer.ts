import { Product } from '@/models/command';
import * as types from './types';

export type ProductStateType = {
  products: Product[];
};

export type ProductActionType = {
	type: string;
	payload: ProductStateType;
};

// Reducers
export function ProductReducer (
	state: ProductStateType,
	action: ProductActionType,
) {
	if(action.type === types.CREATE_PRODUCT){
		return action.payload;
	}
	else if(action.type === types.DELETE_PRODUCT){
		return action.payload;
	}
	else if(action.type === types.UPDATE_PRODUCT){
		return action.payload;
	}
	return { ...state };
};
