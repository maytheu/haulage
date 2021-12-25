import { Footer, Header } from "../components";
import { Section } from "../components/layout";
import { Cart, Highlight, Promo } from "../components/layout/card";
import { Category } from "../components/layout/categories";
import { Scroll } from "../components/utilities";

const FeaturedProduct = () => {
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
      price: 5000 /*  */,
    },
  ];

  return (
    <>
      <Header />
      <Category>
        <Section title="product">
          <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-4 lg:gap-8">
            {latest.map((item, i) => (
              <Cart
                image={item.image}
                price={item.price}
                item={item.item}
                key={i}
              />
            ))}
          </div>
        </Section>
      </Category>
      <Highlight />
      <Promo />
      <Footer />
      <Scroll />
    </>
  );
};

export default FeaturedProduct;
