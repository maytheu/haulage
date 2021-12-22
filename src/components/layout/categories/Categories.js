import { Lists } from ".";
import { SideBar } from "../..";

const Categories = ({ children }) => {
  const sort = [
    { title: "Product Brand", data: ["Infinix", "Tecno", "Itel", "Nokia"] },
    { title: "Product Brand", data: ["Infinix", "Tecno", "Itel", "Nokia"] },
  ];

  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="hidden md:flex md:w-48 md:justify-center lg:w-56">
        <SideBar>
          <Lists filter={sort} />
        </SideBar>
      </div>
      <div className="flex-1">{children} </div>
    </div>
  );
};

export default Categories;
