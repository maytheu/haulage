import { useState } from "react";
import {
  MdOutlineMenu,
  MdOutlineAccountCircle,
  MdOutlineShoppingCart,
  MdLogout,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "./utilities";
import { LOGIN_ROUTE, PRODUCTS_HOME_ROUTE, CART } from "../routes";

const NavHeader = () => {
  const [mobile, setMobile] = useState(false);
  const token = true;
  const navigate = useNavigate();

  const account = (e) => {
    e.preventDefault();
    if (token) return navigate("/profile");
    navigate(LOGIN_ROUTE);
  };

  const cart = (e) => {
    e.preventDefault();
    if (token) return navigate(`/${CART}`);
    navigate(LOGIN_ROUTE);
  };

  return (
    <nav className="relative bg-white mb-20 z-50">
      <div className="fixed top-0 inset-x-0 py-2 transition transform origin-top-right  mx-auto bg-white border-b-2 border-blue-300">
        <div className="flex justify-between items-center py-4 max-w-7xl md:space-x-10 lg:justify-evenly">
          <div className="cursor-pointer pl-3 md:hidden">
            <span className="sr-only">menu option</span>
            <MdOutlineMenu size={30} onClick={() => setMobile(!mobile)} />
          </div>
          <div className="flex">
            <span className="sr-only">Commerce</span>
            <Link to="/">
              <Typography variant={"subheader1"}>Kitchenette</Typography>
            </Link>
          </div>
          <div
            className={`${
              !mobile && "hidden"
            } absolute top-full bg-white left-0 w-full px-5 md:static md:flex md:justify-center md:w-1/2 lg:space-x-3`}
          >
            <Link to="/">
              <Typography
                variant="small"
                className="cursor-pointer px-5 py-3 text-center rounded-lg hover:bg-blue-300 md:py-2"
              >
                Home
              </Typography>
            </Link>
            <Link to={`/${PRODUCTS_HOME_ROUTE}`}>
              <Typography
                variant={"small"}
                className="cursor-pointer px-5 py-3 text-center rounded-lg hover:bg-blue-300 md:py-2"
              >
                Shop
              </Typography>
            </Link>
            <Typography
              variant={"small"}
              className="cursor-pointer px-5 py-3 text-center rounded-lg hover:bg-blue-300 md:py-2"
            >
              Featured
            </Typography>
            <Typography
              variant={"small"}
              className="cursor-pointer px-5 py-3 text-center rounded-lg hover:bg-gray-300 md:py-2"
            >
              Pages
            </Typography>
            <Typography
              variant={"small"}
              className="cursor-pointer px-5 py-3 text-center rounded-lg hover:bg-blue-300 md:py-2"
            >
              Blog
            </Typography>
          </div>
          <div className="cursor-pointer flex pl-3 space-x-5 md:space-x-5">
            <span className="sr-only">user menu</span>
            <MdOutlineAccountCircle size={20} onClick={account} />
            <MdOutlineShoppingCart size={20} onClick={cart} />
            {token && <MdLogout size={20} onClick={account} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
