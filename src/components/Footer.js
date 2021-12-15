import {
  MdCreditCard,
  MdOutlineAutorenew,
  MdOutlineDirectionsRailway,
} from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaCcPaypal,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa";
import { Typography } from "./utilities";
const Footer = () => {
  const benefits = [
    {
      text: "Free shipping all orders over #75,000",
      Icon: MdOutlineDirectionsRailway,
    },
    { text: "100% secure payment", Icon: MdCreditCard },
    { text: "30 days money back", Icon: MdOutlineAutorenew },
  ];

  const custormer = [
    "Help * Suppport",
    "FAQs",
    "Shipping and Returns",
    "Order Tracking",
  ];

  const about = ["about us", "store location", "career", "contact us"];

  const date = 1900 + new Date().getYear();

  return (
    <footer className="bottom-0 inset-x-0">
      <div className="bg-white flex-col items-center px-5 md:bg-gray-100 flex md:flex-row md:justify-evenly md:px-0">
        {benefits.map(({ text, Icon }) => (
          <div className="flex items-center py-5 bg-gray-100 w-full justify-center mb-3 ">
            <Icon size={18} className="mr-3 text-gray-600" />
            <Typography variant="small" color="defaultBody">
              {text}
            </Typography>
          </div>
        ))}
        <div></div>
      </div>
      <div className="bg-black text-white border-gray-500 border-2 py-10 px-8 lg:px-32">
        <div className="flex flex-col md:flex-row-reverse lg:justify-evenly">
          <div className="lg:w-1/3 md:pl-5 md:my-auto lg:my-0">
            <Typography color="white" variant="bodyHeader" uppercase>
              Newsletter
            </Typography>
            <Typography
              color="defaultBody"
              variant="small"
              className="font-extrabold my-4"
            >
              Sign up to get gif, special discount and newest arrivals.
            </Typography>
            <div className="flex justify-between border-b border-gray-500 pb-3 mt-2 mb-8">
              <Typography color="defaultBody" variant="small">
                {" "}
                Your email...
              </Typography>
              <Typography color="white" variant="body2" uppercase>
                Subcribe
              </Typography>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className=" lg:pr-16 lg:w-1/2">
              <Typography color="white" variant="subheader1">
                Anon.
              </Typography>
              <Typography
                color="defaultBody"
                variant="small"
                className="font-extrabold my-3.5"
              >
                Anon store is a fashion shop, we bring a unique style and happy
                for custormer.
              </Typography>
              <div className="my-4">
                <Typography
                  color="defaultBody"
                  variant="small"
                  className="font-extrabold"
                >
                  help@anon.com
                </Typography>
                <Typography
                  color="defaultBody"
                  variant="small"
                  className="font-extrabold"
                >
                  +2347063032847
                </Typography>
              </div>
              <div className="flex">
                <FaFacebookF className="m-3" />
                <FaInstagram className="m-3" />
                <FaPinterest className="m-3" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between lg:w-1/2 lg:justify-around">
              <div className="my-8 lg:mt-0">
                <Typography color="white" variant="bodyHeader" uppercase>
                  Custormer Service
                </Typography>
                {custormer.map((info) => (
                  <Typography
                    color="defaultBody"
                    variant="small"
                    className="font-extrabold my-4"
                    key={info}
                  >
                    {info}
                  </Typography>
                ))}
              </div>
              <div className="md:mt-8 lg:mt-0">
                <Typography color="white" variant="bodyHeader" uppercase>
                  About us
                </Typography>
                {about.map((info) => (
                  <Typography
                    color="defaultBody"
                    variant="small"
                    capitalize
                    className="font-extrabold my-4"
                    key={info}
                  >
                    {info}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 md:flex-row-reverse md:justify-between md:pt-4">
          <div className="flex">
            <FaCcVisa className="m-2" />
            <FaCcPaypal className="m-2" />
            <FaCcMastercard className="m-2" />
            <FaCcVisa className="m-2" />
          </div>
          <Typography variant="small">
            &copy; Copyright 2021 {date === 2021 ? "" : `- ${date}`}, Anon
          </Typography>
        </div>
      </div>
      <hr className="border-b -mt-24 border-gray-500"/>
    </footer>
  );
};

export default Footer;
