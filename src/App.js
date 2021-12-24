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
import { Info, Reviews, Videos, Desc } from "./views/product";

const App = () => {
  return (
    <Routes>
      <Route path={AUTH} element={<Auth />} />
      <Route path={PRODUCT} element={<Product />} />
      {/* <Route th={PRODUCT} element={<Desc />} />
        <Route path="information" element={<Info />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="videos" element={<Videos />} />
      </Route> */}
      <Route path={PRODUCTS_ROUTE} element={<Products />} />
      <Route path={PRODUCTS_HOME_ROUTE} element={<ProductsCategory />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
