import PropTypes from "prop-types";
import Input from "../../Common/Input";

const ProductBasicInfo = ({ data }) => {
  return (
    <div className="flex flex-col gap-1 p-5 bg-white border shadow-md rounded-b-md">
      <span className="py-2 block font-medium text-sm">Product Image:</span>
      <div>
        <div className="grid grid-cols-4 gap-5">
          {data?.productImages?.map((image) => (
            <div key={image} className="border rounded-md p-1 bg-white">
              <img className="w-full rounded-md" src={image} alt="product" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Input
          label={"Video URL"}
          className={"bg-white border rounded-full px-5"}
          value={data?.videoURL ? data?.videoURL : "N/A"}
          disabled
        />
      </div>
      <div>
        <Input
          label={"Title"}
          className={"bg-white border rounded-full px-5"}
          value={data?.title}
          disabled
        />
      </div>

      <div>
        <Input
          label={"Category"}
          className={"bg-white border rounded-full px-5"}
          value={data?.category}
          disabled
        />
      </div>
      <div>
        <Input
          label={"Brand"}
          className={"bg-white border rounded-full px-5"}
          value={data?.brand}
          disabled
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="py-2 block font-medium text-sm">Key Features</span>
        <div className="flex items-center gap-2 flex-wrap">
          {data?.keyFeatures?.map((feature) => (
            <div
              key={feature}
              className="px-2 flex items-center gap-2 border rounded-full bg-stech text-white"
            >
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProductBasicInfo.propTypes = {
  data: PropTypes.object,
};
export default ProductBasicInfo;
