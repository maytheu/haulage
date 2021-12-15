import { Typography } from "../../utilities";

const CardFeatured = () => {
  return (
    <section className="w-full h-full flex flex-col bg-gray-50 mb-14 pb-10 ">
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex flex-col px-4 md:px-0 md:flex-row-reverse md:justify-center">
          <div className=" h-96 w-full pb-4 md:w-1/2 md:-ml-12 md:h-128 lg:w-1/3">
            <img
              src={
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
              }
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Typography capitalize variant="subheader1">
              Men's coat
            </Typography>
            <Typography uppercase>discover now</Typography>
            <hr className="w-5 mt-1 bg-black h-1" />
          </div>
        </div>

        <div className="flex flex-col px-4 md:px-0 md:flex-row-reverse md:justify-center">
          <div className=" h-96 w-full pb-4 md:w-1/2 md:-ml-12 md:h-128 lg:w-1/3">
            <img
              src={
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
              }
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Typography capitalize variant="subheader1">
              Men's coat
            </Typography>
            <Typography uppercase>discover now</Typography>
            <hr className="w-5 mt-1 bg-black h-1" />
          </div>
        </div>

        <div className="flex flex-col px-4 md:px-0 md:flex-row-reverse md:justify-center">
          <div className=" h-96 w-full pb-4 md:w-1/2 md:-ml-12 md:h-128 lg:w-1/3">
            <img
              src={
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
              }
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Typography capitalize variant="subheader1">
              Men's coat
            </Typography>
            <Typography uppercase>discover now</Typography>
            <hr className="w-5 mt-1 bg-black h-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardFeatured;
