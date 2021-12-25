import { useEffect } from "react";
import { useParams, Link, useLocation, Routes, Route } from "react-router-dom";
import { Footer, Header } from "../components";
import { Images, ProductInfo } from "../components/layout/card";
import { Scroll, Typography } from "../components/utilities";
import { Desc, Info, Reviews, Videos } from "../views/product";

const Product = () => {
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    console.log(params.productId);
  }, [params]);

  const link = [
    { title: "Description", link: `/product/${params.productId}/description` },
    { title: "Information", link: `/product/${params.productId}/information` },
    { title: "Reviews", link: `/product/${params.productId}/reviews` },
    { title: "Videos", link: `/product/${params.productId}/videos` },
  ];

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto py-5">
        <div className="top-full flex flex-col bg-white py-1.5 px-2 border-2 rounded-lg shadow-md md:flex-row md:w-auto">
          <Images />
          <ProductInfo />
        </div>
        <div className="bg-gray-50 w-full p-5">
          <div className="flex space-x-5">
            {link.map(({ title, link }, i) => (
              <Link
                key={i}
                to={link}
                className={`rounded-tl-md rounded-bl-md px-3  py-1 cursor-pointer hover:bg-blue-300 ${
                  location.pathname === link &&
                  "bg-blue-500 bg-opacity-30 border-2 border-blue-900"
                }`}
              >
                <Typography variant="subheader2">{title}</Typography>
              </Link>
            ))}
          </div>
          <Routes>
            <Route index element={<Desc />} />
            <Route path="description" element={<Desc />} />
            <Route path="information" element={<Info />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="videos" element={<Videos />} />
          </Routes>
        </div>
        {location.pathname === `/product/${params.productId}` && <Scroll />}{" "}
        <Footer />
      </div>
    </>
  );
};
export default Product;
