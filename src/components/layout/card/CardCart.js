import { MdFavoriteBorder, MdOutlineVisibility } from "react-icons/md";

import { Typography } from "../../utilities";

const CardCart = ({ price, image, item }) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-sm mx-1.5 rounded-lg">
      <div className="pb-5 flex flex-col md:pb-0 md:flex-row lg:flex-col">
        <div className="w-full h-full md:w-2/3 lg:h-72 lg:w-full">
          <img src={image} alt={item} className="w-full h-full" />
        </div>
        <div className="flex flex-col pl-3 my-1  md:w-1/3 lg:w-full">
          <Typography capitalize color="black" variant="bodyHeader">
            <span className="sr-only">{item}</span>
            {item}
          </Typography>
          <Typography>
            &#x20A6; {price}
            <span className="sr-only">&#x20A6; {price}</span>
          </Typography>
          <div className="flex flex-row pt-4 justify-between md:justify-center  md:flex-1 md:flex-col lg:flex-row lg:pt-4 lg:justify-between ">
            <Typography
              uppercase
              variant="bodyHeader"
              className="md:text-center "
            >
              <span className="sr-only">add to cart</span>
              add to cart
            </Typography>
            <div className="flex space-x-5 md:justify-center">
              <MdOutlineVisibility />
              <MdFavoriteBorder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
