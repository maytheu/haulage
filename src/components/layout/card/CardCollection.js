import { Typography } from "../../utilities";

const CardCollection = () => {
  return (
    <section className="w-full h-full flex flex-col bg-gray-50 mb-14 pb-10 ">
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className=" h-96 w-full px-4 pb-4 md:w-1/2 md:h-128 md:px-2 lg:px-6 lg:w-1/3">
            <img
              src={
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
              }
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className=" hidden h-96 w-full px-4 pb-4 md:flex md:w-1/2 md:px-2 md:h-80 md:my-auto lg:px-6 lg:w-1/3">
            <img
              src={
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
              }
              alt="logo"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 items-center">
        <Typography capitalize variant="subheader2" className={" py-4"}>
          New release
        </Typography>
        <Typography uppercase variant="subheader1">
          dress collection
        </Typography>
        <p className="py-4 cursor-pointer">button</p>
      </div>
    </section>
  );
};

export default CardCollection;
