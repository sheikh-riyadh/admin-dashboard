import PropTypes from "prop-types";
import cn from "../../utils/cn";
import { CgSpinner } from "react-icons/cg";

const SubmitButton = ({
  children,
  isLoading,
  loadingText="processing...",
  className,
  ...rest
}) => {
  return (
    <button
      disabled={isLoading}
      className={cn(
        `w-full p-2.5 text-white rounded-sm font-medium text-sm uppercase hover:opacity-85 duration-300 bg-chart_2`,
        className
      )}
      {...rest}
    >
      {isLoading ? (
        <div
          className={`flex gap-1 items-center justify-center h-full ${
            isLoading && "cursor-wait"
          }`}
        >
          <CgSpinner className="animate-spin text-xl" />
          <span>{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
};

export default SubmitButton;
