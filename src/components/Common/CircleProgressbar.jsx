import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import cn from "../../utils/cn";

const CircleProgressbar = ({ data, color = "#047857", className, title }) => {
  const [percentage, setPercentage] = useState(0);
  const [number, setNumber] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 1 : prev));

      if (circleRef.current) {
        circleRef.current.style.backgroundImage = `conic-gradient(${color} ${
          percentage * 3.6
        }deg, #e0e0e0 0deg)`;
      }
    }, 10);

    return () => clearInterval(interval);
  }, [percentage, color]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => (prev < data ? prev + 1 : prev));
    }, 100);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="flex bg-widget items-center flex-col">
      <div
        ref={circleRef}
        className={cn(
          `circle-progressbar relative h-[140px] w-[140px] bg-stech rounded-full flex items-center justify-center`,
          className
        )}
      >
        <div className="flex flex-col items-center justify-center text-white">
          <span className="progress-value relative font-bold text-4xl">{number}</span>
          <span className="progress-value relative font-medium text-sm">{title}</span>
        </div>
      </div>
    </div>
  );
};

CircleProgressbar.propTypes = {
  data: PropTypes.number.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default CircleProgressbar;