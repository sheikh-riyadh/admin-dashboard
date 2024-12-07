import PropTypes from "prop-types";
import { useSellerBannerQuery } from "../../../../store/service/banner/bannerApi";
import { FaFutbol } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useGetAdmin } from "../../../../hooks/useGetAdmin";
const BannerInfo = ({ sellerId }) => {
  const { admin } = useGetAdmin();
  const query = new URLSearchParams({
    sellerId,
    email: admin?.email,
  }).toString();

  const { data, isLoading } = useSellerBannerQuery(query);
  const videoBanner = data?.find((banner) => banner?.type === "video");
  const imageBanner = data?.find((banner) => banner?.type === "image");
  return (
    <div className="bg-widget flex flex-col shadow-md rounded-md overflow-hidden p-5">
      <div className="p-5">
        <h2 className="capitalize font-medium text-2xl text-end text-white ">
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
            <div className="grid xl:grid-cols-4 gap-5">
              {imageBanner?.bannerImages?.map((image) => (
                <div key={image} className="w-full h-48 border rounded-md">
                  <img
                    className="w-full h-full rounded-md"
                    src={image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-44 bg-widget">
          <FaFutbol className="animate-spin text-6xl text-white" />
          <span className="text-accent">Loading...</span>
        </div>
      )}
    </div>
  );
};

BannerInfo.propTypes = {
  sellerId: PropTypes.string,
};

export default BannerInfo;
