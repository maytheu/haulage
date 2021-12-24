import { Button } from "../../utilities";

const CardProduct = ({ image, price, item }) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-sm mx-1.5 ">
      <div className="pb-5 flex flex-col md:pb-0 md:flex-row lg:flex-col">
        <div className="w-full h-full md:w-2/3 lg:h-72 lg:w-full">
          <img
            src={image}
            alt={item}
            className="w-full h-full rounded-full border-2 border-blue-300"
          />
          <div className="flex justify-center -mt-8">
            <Button variant="contained">View Shop</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
