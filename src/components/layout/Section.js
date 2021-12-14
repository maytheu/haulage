import PropTypes from "prop-types";
import { Typography } from "../utilities";

const Section = ({ title, children, ...props }) => {
  return (
    <section className="pt-16 mb-10 px-3 md:max-w-7xl md:mx-auto ">
      <Typography variant='bodyHeader' className="text-center mb-10">{title}</Typography>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;
