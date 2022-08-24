import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CategoriesType = {
  id: number;
  name: string;
}

export type Categories = CategoriesType[];

type CategoriesArray = {
  categories: Array<CategoriesType>;
}

const initialState: CategoriesArray = {
  categories: [],
};

export const CategoriesSlice = createSlice({
  name: 'CategoriesSlice',
  initialState,
  reducers: {
    addCategories: (state, action: PayloadAction<Array<CategoriesType>>) => {
      state.categories = action.payload;
    }
  }
})

export const { addCategories } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
