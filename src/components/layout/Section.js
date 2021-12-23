import PropTypes from "prop-types";
import { Typography } from "../utilities";

const Section = ({ title, children, ...props }) => {
  return (
    <section className="mt-3 px-3 max-w-7xl md:mx-auto">
      <Typography variant="subheader1" capitalize className="text-center mb-3">
        {title}
      </Typography>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;
