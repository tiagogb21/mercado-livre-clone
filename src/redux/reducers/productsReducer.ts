import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductsType = {
  id: number;
  name: string;
}

export type Products = ProductsType[];

type ProductsArray = {
  products: Array<ProductsType>;
}

const initialState: ProductsArray = {
  products: [],
};

export const ProductsSlice = createSlice({
  name: 'CategoriesSlice',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Array<ProductsType>>) => {
      state.products = action.payload;
    }
  }
})

export const { addProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
