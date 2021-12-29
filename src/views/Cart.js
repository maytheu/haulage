import { Link } from "react-router-dom";

import { Typography } from "../components/utilities";
import { Header, Footer } from "../components";
import { ListCart } from "../components/layout/card";
const Cart = () => {
  return (
    <>
      <Header />
      <div className="hidden md:flex md:justify-between">
        <Link to="/">
          <Typography>Continue Shopping</Typography>
        </Link>
        <div className="flex space-x-5">
          <Typography>Cart Item (2)</Typography>
          <Typography>Wishlist (1)</Typography>
        </div>
        <Link to="/">
          <Typography>Continue Shopping</Typography>
        </Link>
      </div>

      <ListCart />
      <Footer />
    </>
  );
};

export default Cart;
