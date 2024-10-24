import { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "../../utils/cn";

const Input = forwardRef(
  ({ className, label = "", type = "text", ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="flex items-center gap-1 py-2 font-medium">
            {label} {rest?.required && <span className={"text-danger"}>*</span>}
          </label>
        )}
        <input
          className={cn(
            `focus:outline-none bg-gray-100 w-full p-2 rounded-md`,
            className
          )}
          {...rest}
          type={type}
          ref={ref}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
