import { useNavigate, Link } from "react-router-dom";
import { Button, Typography } from "../../utilities";

const CardPromo = () => {
  const navigate = useNavigate();
  const categories = [
    {
      title: "23% off on all product",
      category: "shoes",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    },
    {
      title: "23% off on all product",
      category: "clothes",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    },
  ];
  const product = [
    {
      title: "23% off on all product",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    },
    {
      title: "23% off on all product",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    },
    {
      title: "23% off on all product",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    },
  ];

  const products = (category) => navigate(`products/${category}`);
  return (
    <div className="max-w-7xl flex flex-col p-3 bg-white md:grid md:grid-cols-3 md:gap-5">
      {categories.map((item, i) => (
        <div className="bg-gray-100 flex flex-col px-3 md:py-3" key={i}>
          <Typography variant="subheader1" capitalize>
            {item.title}
          </Typography>
          <Button
            sizes="sm"
            colors="secondary"
            variant="contained"
            className="w-32"
            onClick={() => products(item.category)}
          >
            View Collection
          </Button>
          <div className="flex justify-end h-28">
            <img src={item.img} alt="product" className="w-20 h-full mr-10" />
          </div>
        </div>
      ))}
      <div className="flex flex-col bg-white">
        {product.map((item, i) => (
          <Link to={`/product/${i}`}>
            <div key={i} className="flex flex-row pt-2 items-center">
              <img src={item.img} alt="product" className="w-18 h-14 pr-3" />
              <Typography>{item.title}</Typography>
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardPromo;
