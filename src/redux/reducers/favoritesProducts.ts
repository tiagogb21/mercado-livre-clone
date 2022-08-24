import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoritesType = {
  id: number;
  name: string;
}

export type Favorites = FavoritesType[];

type FavoritesArray = {
  favorites: Array<FavoritesType>;
}

const initialState: FavoritesArray = {
  favorites: [],
};

export const FavoritesSlice = createSlice({
  name: 'FavoritesSlice',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<Array<FavoritesType>>) => {
      state.favorites = action.payload;
    }
  }
})

export const { addFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
