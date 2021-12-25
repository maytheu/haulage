import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { Typography } from "../../utilities";

const CardInfo = () => {
  const rating = { card: 4 };
  return (
    <div className="pl-4 flex flex-col">
      <Typography variant="subheader1" className="pb-2" capitalize>
        Product name
      </Typography>
      <div className="flex pb-2">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <MdStar
              color={ratingValue > rating.card ? "grey" : "blue"}
              key={i}
            />
          );
        })}
        <Typography className="pl-4">({rating.card} / 5)</Typography>
      </div>
      <div className="flex pb-2">
        <Typography>&#x20A6; 12000</Typography>
        <Typography color="danger" className="pl-5 line-through text-red-500">
          &#x20A6; 15000
        </Typography>
      </div>
      <div className="flex flex-col pb-2">
        <Typography variant="bodyHeader">Category</Typography>
        <Typography>Lorem ipsum</Typography>
      </div>
      <div className="flex flex-col pb-2">
        <Typography variant="bodyHeader">Tags</Typography>
        <Typography>Lorem ipsum</Typography>
      </div>
      <div className="flex pb-2">
        <Typography variant="bodyHeader">Share:</Typography>
        <FaTwitter className="ml-4" />
        <FaFacebookF className="ml-4" />
        <FaInstagram className="ml-4" />
      </div>
    </div>
  );
};

export default CardInfo;
