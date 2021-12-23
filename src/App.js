import { Routes, Route } from "react-router-dom";
import {
  AUTH,
  Auth,
  PRODUCT,
  Product,
  PRODUCTS_HOME_ROUTE,
  PRODUCTS_ROUTE,
} from "./routes";
import { Home, Products, ProductsCategory } from "./views";

const App = () => {
  return (
    <Routes>
      <Route path={AUTH} element={<Auth />} />
      <Route path={PRODUCT} element={<Product />} />
      <Route path={PRODUCTS_ROUTE} element={<Products />} />
      <Route path={PRODUCTS_HOME_ROUTE} element={<ProductsCategory />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
