import {
  URL_CATEGORIES,
  URL_CATEGORY_ID,
  URL_CATEGORY_ID_QUERY,
  URL_PRODUCTS_QUERY,
  URL_PRODUCT_DETAILS,
} from "./constants";

export const getCategories = async () =>
  await fetch(URL_CATEGORIES)
    .then((res) => res.json())
    .then((data) => data);

export const getProductsByQuery = async (query) =>
  await fetch(URL_PRODUCTS_QUERY(query))
    .then((res) => res.json())
    .then((data) => data);

export const getProductsByCategoryId = async (categoryId) =>
  await fetch(URL_CATEGORY_ID(categoryId))
    .then((res) => res.json())
    .then((data) => data);

export const getProductsByCategoryIdAndQuery = async (categoryId, query) =>
  await fetch(URL_CATEGORY_ID_QUERY(categoryId, query))
    .then((res) => res.json())
    .then((data) => data);

export const getProductsDetails = async () =>
  await fetch(URL_PRODUCT_DETAILS)
    .then((res) => res.json())
    .then((data) => data);

export const getProductByName = async (product) =>
  await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`)
    .then((res) => res.json())
    .then((data) => data);
