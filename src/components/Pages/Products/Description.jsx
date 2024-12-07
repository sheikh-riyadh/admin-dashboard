import PropTypes from "prop-types";
const Description = ({ data }) => {
  return (
    <div className="shadow-md p-3 bg-widget text-white rounded-b-md">
      <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
    </div>
  );
};

Description.propTypes = {
  data: PropTypes.object,
};

export default Description;
