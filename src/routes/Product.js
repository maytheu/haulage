import { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { useParams, Link, useLocation, Routes, Route } from "react-router-dom";
import { Footer, Header } from "../components";
import { Images, ProductInfo } from "../components/layout/card";
import { Scroll, Typography } from "../components/utilities";
import { Desc, Info, Reviews, Videos } from "../views/product";

const Product = () => {
  const params = useParams();
  const location = useLocation();
  const [mobile, setMobile] = useState(false);
  const [mobileTitle, setMobileTitle] = useState(0);
  useEffect(() => {
    console.log(params.productId);
  }, [params]);

  const link = [
    { title: "Description", link: `/product/${params.productId}/description` },
    { title: "Information", link: `/product/${params.productId}/information` },
    { title: "Reviews", link: `/product/${params.productId}/reviews` },
    { title: "Videos", link: `/product/${params.productId}/videos` },
  ];

  const onMobile = (i) => {
    setMobile(false);
    setMobileTitle(i);
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto py-5">
        <div className="top-full flex flex-col bg-white py-1.5 px-2 border-2 rounded-lg shadow-md md:flex-row md:w-auto">
          <Images />
          <ProductInfo />
        </div>
        <div className="bg-gray-50 w-full p-5">
          <div className="md:hidden cursor-pointer pb-3">
            <MdOutlineMenu size={20} onClick={() => setMobile(!mobile)} />
          </div>
          <div
            className={`${!mobile && "hidden"}
             absolute bg-white px-3 py-2 md:px-0 
             md:bg-gray-50 md:static md:flex md:space-x-5`}
          >
            {link.map(({ title, link }, i) => (
              <Link
                key={i}
                to={link}
                className={`md:rounded-tl-md md:rounded-bl-md md:px-3  md:py-1 cursor-pointer hover:bg-blue-300 ${
                  location.pathname === link &&
                  "bg-blue-500 bg-opacity-30 md:border-2 border-blue-900"
                }`}
                onClick={() => onMobile(i)}
              >
                <Typography variant="subheader2">{title}</Typography>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Typography variant="subheader2">
              {link[mobileTitle].title}
            </Typography>
          </div>
          <Routes>
            <Route index element={<Desc />} />
            <Route path="description" element={<Desc />} />
            <Route path="information" element={<Info />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="videos" element={<Videos />} />
          </Routes>
        </div>
        {location.pathname === `/product/${params.productId}` && <Scroll />}
        <Footer />
      </div>
    </>
  );
};
export default Product;
