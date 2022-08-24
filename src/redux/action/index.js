export const addCategories = (categories) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_CATEGORIES",
      payload: categories,
    });
  };
};

export const addProducts = (products) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_PRODUCTS",
      payload: products,
    });
  };
};

export const addProductsToFavorite = (product) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_PRODUCTS_TO_FAVORITE",
      payload: product,
    });
  };
};

export const removeProductsFromFavorite = (product) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_PRODUCTS_FROM_FAVORITE",
      payload: product,
    });
  };
};

export const addProductsToCart = (products) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_ITEMS_TO_CART",
      payload: products,
    });
  };
};

export const increaseShoppingCartItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: "INCREASE_CART",
      payload: item,
    });
  };
};

export const decreaseShoppingCartItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: "DECREASE_CART",
      payload: item,
    });
  };
};

export const removeFromShoppingCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_ITEMS_FROM_CART",
      payload: item,
    });
  };
};

export const cleanShoppingCart = (items) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_ALL_ITEMS_FROM_CART",
      payload: items,
    });
  };
};
