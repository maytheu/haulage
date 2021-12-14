const CardCollection = () => {
  return (
    <section className="w-full h-full flex bg-gray-50 mb-14 md:h-screen ">
      <div className="flex flex-col w-full h-96">
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className=" h-96 w-full px-4 pb-4 md:w-1/2 md:px-2 lg:px-1 lg:w-1/3">
            <img
              src={
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
              }
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="h-96 w-full px-4 pb-4 md:w-1/2 md:px-2 md:h-64 md:my-auto lg:px-1 lg:w-1/3">
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
      <div></div>
    </section>
  );
};

export default CardCollection;
