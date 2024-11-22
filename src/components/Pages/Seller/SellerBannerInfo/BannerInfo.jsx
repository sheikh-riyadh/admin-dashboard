import PropTypes from "prop-types";
import { useSellerBannerQuery } from "../../../../store/service/banner/bannerApi";
import { FaFutbol } from "react-icons/fa";
import ReactPlayer from "react-player";
const BannerInfo = ({ sellerId }) => {
  const { data, isLoading } = useSellerBannerQuery(sellerId);
  const videoBanner = data?.find((banner) => banner?.type === "video");
  const imageBanner = data?.find((banner) => banner?.type === "image");
  return (
    <div className="bg-white flex flex-col shadow-md border rounded-md overflow-hidden p-5">
      <div className="p-5">
        <h2 className="capitalize font-medium text-2xl text-end ">
          Banner Information
        </h2>
      </div>
      {!isLoading ? (
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex justify-center items-center w-full mt-5 h-[400px] object-cover">
              <ReactPlayer
                width={"100%"}
                height={"100%"}
                url={videoBanner?.videoURL}
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-4 gap-5">
              {imageBanner?.bannerImages?.map((image) => (
                <div key={image} className="w-full h-48">
                  <img className="w-full h-full rounded-md" src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-44 bg-white">
          <FaFutbol className="animate-spin text-6xl" />
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

BannerInfo.propTypes = {
  sellerId: PropTypes.string,
};

export default BannerInfo;
