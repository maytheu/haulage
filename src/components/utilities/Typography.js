import cn from "classnames";
import PropTypes from "prop-types";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheader1: "h6",
  subheader2: "h6",
  bodyHeader: "p",
  body2: "p",
  small: "p",
};

const fontSizeVariantMapping = {
  h1: "",
  h2: "",
  h3: "",
  h4: "",
  h5: "text-2xl",
  h6: "text-xl font-semibold",
  subheader1: "text-2xl font-bold",
  subheader2: "text-xl font-medium",
  bodyHeader: "text-sm font-semibold tracking-widest",
  body2: "text-sm",
  small: "text-xs",
};

const colorVariantMapping = {
  defaultHeader: "text-gray-800",
  defaultBody: "text-gray-600",
  white: "text-white",
  black: "text-black",
  danger: "text-red-400",
};

const Typography = ({
  variant,
  className,
  color,
  children,
  capitalize,
  uppercase,
  lowercase,
  ...props
}) => {
  const Component = variant ? variantsMapping[variant] : "p";
  return (
    <Component
      className={`${cn({
        [fontSizeVariantMapping[variant]]: variant,
        [colorVariantMapping[color]]: color,
        capitalize: capitalize,
        uppercase: uppercase,
        lowercase: lowercase,
      })} ${className} `}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  variant: "body2",
  color: "defaultBody",
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    "h5",
    "h6",
    "subheader1",
    "subheader2",
    "bodyHeader",
    "body2",
    "small",
  ]),
  color: PropTypes.oneOf(["defaultHeader", "defaultBody", "white", "danger"]),
  children: PropTypes.node,
};

export default Typography;
