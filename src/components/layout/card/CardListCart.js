import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { Typography } from "../../utilities";

const CardListCart = () => {
  const cart = [
    {
      product: "Product name",
      category: "Plates",
      tags: "Newest",
      rate: 4,
      quantity: 3,
      price: 12000,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      product: "Product name",
      category: "Plates",
      tags: "Newest",
      rate: 4,
      quantity: 3,
      price: 12000,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      product: "Product name",
      category: "Plates",
      tags: "Newest",
      rate: 4,
      quantity: 3,
      price: 12000,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row lg:flex-1">
      <div className="flex flex-col p-3 lg:p-5 lg:flex-1">
        {cart.map((item) => (
          <div className="flex flex-col p-3  lg:px-5 lg:flex-row">
            <div className="flex flex-col md:flex-row lg:flex-1">
              <div className="w-full h-60 md:mr-3 md:w-36 md:h-36">
                <img
                  src={
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  }
                  alt="prodct"
                  className="h-full w-full rounded-md"
                />
              </div>
              <div className="md:flex-1 ">
                <Typography className="pt-2 md:pt-0">
                  Product: product name
                </Typography>
                <Typography className="py-1 md:py-2">
                  Category: product name
                </Typography>
                <Typography className="py-1 md:py-2">
                  Tags: product name
                </Typography>
                <Typography className="py-1 md:py-2">
                  Rating: product name
                </Typography>
              </div>
              <div className="flex justify-between md:flex-col md:ml-3 md:justify-center">
                <div className="flex items-center space-x-4">
                  <MdAdd className="p-1 cursor-pointer" size={30} />
                  <span className="sr-only">Add quantity</span>
                  <span className=" sr-only">2 </span>
                  <Typography>2</Typography>
                  <span className="sr-only">Reduce quantity</span>
                  <AiOutlineMinus className="p-1 cursor-pointer" size={30} />
                </div>
                <div>
                  <p className="sr-only ">&#x20A6; Price</p>
                  <Typography className="text-center">
                    &#x20A6; Price
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>order summary</div>
    </div>
  );
};

export default CardListCart;
