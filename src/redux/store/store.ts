import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from "../reducers/categoriesReducer";
import shoppingCartReducer from "../reducers/shoppingCartReducer";
import productsReducer from "../reducers/productsReducer";
import favoritesReducer from "../reducers/favoritesProducts";
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    shoppingCart: shoppingCartReducer,
    products: productsReducer,
    favorites: favoritesReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
