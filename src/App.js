import { Footer, Header } from "./components";
import CardCart from "./components/layout/card/CardCart";
import CardJournal from "./components/layout/card/CardJournal";
import Section from "./components/layout/Section";

function App() {
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
      // date: j,
    },
  ];
  const journal = [
    {
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
      title: "Real Black Coffee",
      date: 1639490573,
      highlight:
        "This is a simple example of a Landing Page you can build using Notus React. It features multiple CSS components based on the Tailwind CSS design system.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
      title: "Real Black Coffee",
      date: 1639490573,
      highlight:
        "This is a simple example of a Landing Page you can build using Notus React. It features multiple CSS components based on the Tailwind CSS design system.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
      title: "Real Black Coffee",
      date: 1639490573,
      highlight:
        "This is a simple example of a Landing Page you can build using Notus React. It features multiple CSS components based on the Tailwind CSS design system.",
    },
  ];

  return (
    <>
      <Header />
      <Section title="new arrival">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          {latest.map((item, i) => (
            <CardCart
              image={item.image}
              price={item.price}
              item={item.item}
              key={i}
            />
          ))}
        </div>
      </Section>
      <Section title="from journal">
        <div className="max-w-7xl flex flex-col lg:flex-row justify-center">
          {journal.map((item) => (
            <CardJournal
              image={item.image}
              date={item.date}
              title={item.title}
              highlight={item.highlight}
            />
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default App;
