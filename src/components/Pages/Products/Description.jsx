import PropTypes from "prop-types";
const Description = ({ data }) => {
  return (
    <div className="border rounded-b-md bg-white shadow-md p-3">
      <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
    </div>
  );
};

Description.propTypes = {
  data: PropTypes.object,
};

export default Description;
