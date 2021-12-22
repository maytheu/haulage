import { Images } from "../components/layout/card";

const Product = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" mx-auto flex flex-col bg-white py-3 px-2 border-2 rounded-lg shadow-md md:flex-row">
        <Images />
        <div className="">text</div>
      </div>
      <div>product desc</div>
    </div>
  );
};
export default Product;
