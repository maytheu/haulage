import { Link } from "react-router-dom";

import { Typography, Button } from "../components/utilities";
import { Header, Footer } from "../components";
import { ListCart } from "../components/layout/card";
const Cart = () => {
  return (
    <>
      <Header />
      <div className="py-2" />
      <div className="hidden md:flex md:justify-between md:items-center md:px-3">
        <Link to="/">
          <Button variant="outlined">Continue Shopping </Button>
        </Link>
        <div className="flex space-x-5">
          <Typography>Cart Item (2)</Typography>
          <Typography>Wishlist (1)</Typography>
        </div>
        <Link to="/">
          <Button variant="contained" className="capitalize">
            Checkout now
          </Button>
        </Link>
      </div>

      <ListCart />
      <Footer />
    </>
  );
};

export default Cart;
