import PropTypes from "prop-types";

const CommonComponent = ({ name, value }) => {
  return (
    <div className="p-5 text-white border-b border-[#171f12]" title={value}>
      <h4 className="font-medium text-sm mb-1">{name}</h4>
      <h2 className="font-bold text-lg">
        {value
          ? `${value.length > 20 ? `${value.slice(0, 20)}...` : value}`
          : "No Info"}
      </h2>
    </div>
  );
};

CommonComponent.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default CommonComponent;
