import { Typography } from "../../utilities";

const CardAccesories = () => {
  return (
    <section className="w-full h-full flex flex-col bg-wite mb-14 pb-10 ">
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className=" w-full flex-col flex px-4 pb-4 md:w-1/2 md:px-2 lg:px-6 lg:w-1/3">
            <div className="flex flex-col justify-center items-center">
              <Typography variant="bodyHeader" className="pb-5">
                Accesories
              </Typography>
              <p className="pb-5">button</p>
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
              }
              alt="logo"
              className="w-full h-96 md:h-128"
            />
          </div>
          <div className=" w-full flex-col flex px-4 pb-4 md:w-1/2 md:flex-col-reverse md:px-2 lg:px-6 lg:w-1/3">
            <div className="flex flex-col justify-center items-center">
              <Typography variant="bodyHeader" className="py-5">
                Accesories
              </Typography>
              <p className="pb-5">button</p>
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
              }
              alt="logo"
              className="w-full h-96 md:h-128"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardAccesories;
