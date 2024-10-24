import PropTypes from "prop-types";
const AnalyticeCard = ({ icon, title, subtitle, percentage }) => {
  return (
    <div className="border p-7 rounded-md bg-white shadow-md">
      <div>{icon}</div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black">{title}</h4>
          <span className="text-sm font-medium">{subtitle}</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          {`${percentage}%`}
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

AnalyticeCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  percentage: PropTypes.number,
};

export default AnalyticeCard;
