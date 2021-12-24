import { Typography, ProductScroll } from "../../components/utilities";
import { Outlet } from "react-router-dom";
const Information = () => {
  const desc = {
    title: "Title Desc",
    message:
      "Lates product in our stock, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };
  return (
    <div>
      <Typography variant="subheader1" className="py-2">
        {desc.title}
      </Typography>
      <Typography variant="small">{desc.message}</Typography>
      <ProductScroll />
      <Outlet />
    </div>
  );
};

export default Information;
