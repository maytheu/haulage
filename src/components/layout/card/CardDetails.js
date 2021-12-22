import { Typography } from "../../utilities";

const CardDetails = () => {
  const sellingPoint = ["Lates in town", "Latest in vogue", "Talk oof town"];
  return (
    <div className="bg-gray-100 flex flex-col justify-center py-5 md:py-10 md:flex-row">
      <div className="w-56 h-60">
        <img
          src={
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
          }
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="pl-5">
        <Typography variant="subheader1">title</Typography>
        {sellingPoint.map((item) => (
          <div key={item} className="flex">
            <span className=" text-red-500 text-5xl text-justify mr-3 -mt-6">
              .
            </span>
            <Typography>{item}</Typography>
          </div>
        ))}
        <Typography>button</Typography>
      </div>
    </div>
  );
};

export default CardDetails;
