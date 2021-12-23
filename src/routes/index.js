export { default as Auth } from "./Auth";
export { default as Product } from "./Product";
export const AUTH = "auth/*";
export const LOGIN_ROUTE = "/auth/login";
export const REGISTER_ROUTE = "/auth/register";
export const RESET_PASSWORD = "/auth/reset_password";
export const PRODUCT = "product/:productId/*";
export const PRODUCTS_ROUTE = "products/:category";
export const PRODUCTS_HOME_ROUTE = "products";
