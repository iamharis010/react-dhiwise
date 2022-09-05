import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  UnderLineBluegray100: "border-b-[1px] border-bluegray_100",
  FillWhiteA700: "bg-white_A700",
  OutlineBluegray100: "border border-bluegray_100 border-solid",
};

const sizes = {
  sm: "xl:pb-[11px] 2xl:pb-[12px] 3xl:pb-[15px] pb-[17px] lg:pb-[9px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] pt-[22px] xl:px-[11px] 2xl:px-[12px] 3xl:px-[15px] px-[17px] lg:px-[9px]",
  md: "lg:pb-[19px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] pb-[33px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName}  ${variants[variant] || ""} ${
            sizes[size] || ""
          }`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf([
    "UnderLineBluegray100",
    "FillWhiteA700",
    "OutlineBluegray100",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  variant: "OutlineBluegray100",
  size: "",
};

export { Input };
