import { MdStar } from "react-icons/md";
import { AddReview } from ".";
import { ProductScroll, Typography } from "../../components/utilities";

const Reviews = () => {
  const auth = true;
  const reviews = [
    {
      name: "Title Desc",
      message:
        "Lates product in our stock, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stars: 3,
    },
    {
      name: "Laue",
      message:
        "Lates product in our stock, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stars: 4,
    },
    {
      name: "Meto Lee",
      message:
        "Lates product in our stock, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stars: 3,
    },
    {
      name: "Title",
      message:
        "Lates product in our stock, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stars: 3,
    },
  ];

  return (
    <div>
      {reviews.map(({ name, message, stars }, index) => (
        <div className="flex flex-col mb-3" key={index}>
          <Typography variant="bodyHeader">{name}</Typography>
          <Typography>{message}</Typography>
          <div className="flex">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <MdStar color={ratingValue > stars ? "gray" : "blue"} key={i} />
              );
            })}
          </div>
        </div>
      ))}
      {auth && <AddReview />}
      <ProductScroll />
    </div>
  );
};

export default Reviews;
