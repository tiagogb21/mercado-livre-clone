import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type shoppingCartType = {
  id: number;
  name: string;
  quantity: number;
}

export type shoppingCart = shoppingCartType[];

type shoppingCartArray = {
  shoppingCart: Array<shoppingCartType>;
}

const initialState: shoppingCartArray = {
  shoppingCart: [],
};

export const ShoppingCartSlice = createSlice({
  name: 'ShoppingCartSlice',
  initialState,
  reducers: {
    addToShoppingCart: (state, action: PayloadAction<Array<shoppingCartType>>) => {
      state.shoppingCart = [...state.shoppingCart, ...action.payload];
    },
    increaseCart: (state, action: PayloadAction<{ name:string }>) => {
      const reduceShoppingCart = state.shoppingCart.reduce((acc: any, curr) => {
        if (curr.name === action.payload.name) {
          curr.quantity += 1;
        }
        acc.push(curr);
        return acc;
      }, []);
      state.shoppingCart = reduceShoppingCart;
    },
    decreaseCart: (state, action: PayloadAction<{ name:string }>) => {
      const reduceShoppingCart = state.shoppingCart.reduce((acc: any, curr) => {
        if (curr.name === action.payload.name && curr.quantity > 0) {
          curr.quantity -= 1;
        }
        acc.push(curr);
        return acc;
      }, []);
      state.shoppingCart = reduceShoppingCart;
    },
    removeFromShoppingCart: (state, action: PayloadAction<{ name:string }>) => {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.name !== action.payload.name
      );
    },
    removeAllItemsFromShoppingCart: (state, _action) => {
      state.shoppingCart = [];
    },
  }
})

export const { addToShoppingCart } = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
