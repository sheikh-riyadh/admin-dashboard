import PropTypes from "prop-types";
const AnalyticeCard = ({ icon, title, subtitle, percentage }) => {
  return (
    <div className="p-7 rounded-md bg-widget shadow-md">
      <div className="text-white">{icon}</div>

      <div className="mt-4 flex items-end justify-between text-white">
        <div>
          <h4 className="text-title-md font-bold">{title}</h4>
          <span className="text-sm font-medium">{subtitle}</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-white">
          {`${percentage}%`}
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
