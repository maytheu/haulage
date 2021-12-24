import { Header, Footer } from "../components";
import { Scroll } from "../components/utilities";
import { Section } from "../components/layout";
import { CardProduct } from "../components/layout/card";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  const latest = [
    {
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
      item: "Real Black Coffee",
      price: 5000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
      item: "Real red Coffee",
      price: 5000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
      item: "Real yellow Coffee",
      price: 5000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
      item: "Real Black Coffee",
      price: 5000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
      item: "Real Black Coffee",
      price: 5000,
    },
  ];
  return (
    <>
      <Header />
      <div className="pt-1" />
      <Section title="All Products">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-4 lg:gap-4">
          {latest.map((item, i) => (
            <Link to={`${i}`} key={i}>
              <CardProduct
                image={item.image}
                price={item.price}
                item={item.item}
              />
            </Link>
          ))}
        </div>
      </Section>
      <Scroll />
      <Footer />
    </>
  );
};

export default HomeProducts;
