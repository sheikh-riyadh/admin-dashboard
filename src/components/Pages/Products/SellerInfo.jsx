import PropTypes from "prop-types";
import SellerLeftSide from "../Seller/SellerPersonalInfo/SellerLeftSide";
import SellerImage from "../Seller/SellerPersonalInfo/SellerImage";
import { useGetSellerByIdQuery } from "../../../store/service/seller/sellerApi";
import BusinessInfo from "../Seller/BusinessInfo/BusinessInfo";
import { useGetAdmin } from "../../../hooks/useGetAdmin";
const SellerInfo = ({ data }) => {
  const { admin } = useGetAdmin();
  const query = new URLSearchParams({
    sellerId: data?.sellerId,
    email: admin?.email,
  }).toString();
  const { data: sellerData } = useGetSellerByIdQuery(query);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <SellerLeftSide data={sellerData} />
        </div>
        <div className="col-span-3 h-full">
          <SellerImage data={sellerData?.photo} />
        </div>
      </div>
      <BusinessInfo data={sellerData} />
    </div>
  );
};

SellerInfo.propTypes = {
  data: PropTypes.object,
};

export default SellerInfo;
