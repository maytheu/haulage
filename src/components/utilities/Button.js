import cn from "classnames";
import PropTypes from "prop-types";
import { ClockLoader } from "react-spinners";

const tailwindStyleVariantMapping = {
  text: "",
  contained: "rounded-lg shadow",
  outlined: "rounded-lg border",
  rounded: "rounded-full py-2 px-3",
};

const sizesVariantMapping = {
  text: "",
  sm: "px-3.5 py-1",
  md: "px-7 py-2",
  lg: "px-14 py-4",
};

const fontSizeVariantMapping = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

const colorTextVariantMapping = {
  primary: "text-blue-500",
  secondary: "text-blue-800",
  error: "text-red-600",
  black: "text-black text-opacity-60",
};

const colorBgVariantMapping = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-blue-800 ",
  error: "bg-red-600",
};

const colorBorderVariantMapping = {
  primary: "border-blue-500",
  secondary: "border-blue-800",
  error: "border-red-600",
};

const shadowVariant = {
  sm: "hover:shadow-sm hover:shadow-blue-500/30",
  md: "hover:shadow-md hover:shadow-blue-500/30",
  lg: "hover:shadow-lg hover:shadow-blue-500/30",
};

const Button = ({
  variant,
  sizes,
  colors,
  className,
  children,
  type,
  onClick,
  disabled,
  isLoading,
  shadow,
  fullWidth,
  ...props
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (!disabled && typeof onClick !== "undefined") onClick();
  };

  return (
    <button
      onClick={type ? null : handleClick}
      type={type}
      className={`${className} ${cn({
        "bg-opacity-30": disabled,
        "w-full": fullWidth,
        [tailwindStyleVariantMapping[variant]]: variant,
        [sizesVariantMapping[sizes]]: sizes,
        [fontSizeVariantMapping[sizes]]: sizes,
        [colorTextVariantMapping[colors]]: colors && variant !== "contained",
        [colorBgVariantMapping[colors]]: variant === "contained",
        [colorBorderVariantMapping[colors]]: variant === "outlined",
        [shadowVariant[shadow]]: shadow,
      })}`}
      {...props}
    >
      {isLoading ? (
        <ClockLoader
          color="#FFAF10"
          height={30}
          width={50}
          className="justify-center flex"
        />
      ) : (
        children
      )}
    </button>
  );
};

Button.defaultProps = {
  variant: "text",
  sizes: "md",
  colors: "primary",
  shadow: "lg",
};

Button.propTypes = {
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
  sizes: PropTypes.oneOf(["sm", "md", "lg"]),
  shadow: PropTypes.oneOf(["sm", "md", "lg", "none"]),
  colors: PropTypes.oneOf(["primary", "secondary", "error", "black"]),
};

export default Button;
