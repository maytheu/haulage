import { useState } from "react";

const CardImages = () => {
  const [slider, setSlider] = useState(null);
  const img =
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80";
  const images = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
  ];
  const show = (index) => setSlider(images[index]);
  return (
    <div className="flex">
      <div className="hidden md:flex md:flex-col md:mt-2">
        {images.map((item, i) => (
          <img
            src={item}
            key={i}
            alt="slider"
            className="w-20 h-28 mb-2 cursor-pointer rounded-md "
            onClick={() => show(i)}
          />
        ))}
      </div>
      <div className=" w-96 h-84 md:ml-4">
        <img
          src={!slider ? img : slider}
          alt="pro"
          className="w-full rounded-lg  h-full"
        />
      </div>
    </div>
  );
};

export default CardImages;
