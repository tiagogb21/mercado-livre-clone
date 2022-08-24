export const URL_CATEGORIES =
  "https://api.mercadolibre.com/sites/MLB/categories";

export const URL_PRODUCTS_QUERY = (query) =>
  `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

export const URL_CATEGORY_ID = (categoryId) =>
  `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

export const URL_CATEGORY_ID_QUERY = (categoryId, query) =>
  `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

export const URL_PRODUCT_DETAILS =
  "https://api.mercadolibre.com/items/$PRODUCT_ID";
