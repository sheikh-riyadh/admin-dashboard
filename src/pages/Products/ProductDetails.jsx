import { useLocation, useNavigate } from "react-router-dom";
import ProductBasicInfo from "../../components/Pages/Products/ProductBasicInfo";
import Description from "../../components/Pages/Products/Description";
import StockPriceAndQuantity from "../../components/Pages/Products/StockPriceAndQuantity";
import DeliveryInfo from "../../components/Pages/Products/DeliveryInfo";
import QuestionInfo from "../../components/Pages/Products/QuestionInfo";
import ReviewInfo from "../../components/Pages/Products/ReviewInfo";
import { smoothScroll } from "../../utils/scrollToTop";
import Button from "../../components/Common/Button";

const ProductDetails = () => {
  const location = useLocation();
  const data = location.state.payload;
  smoothScroll();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 p-5">
      <div>
        <div className="p-3 bg-stech text-white font-bold flex items-center justify-between">
          <span>Basic information</span>
          <Button onClick={() => navigate(-1)} className="w-32">
            Back
          </Button>
        </div>
        <ProductBasicInfo data={data} />
      </div>
      <div>
        <div className="p-3 bg-stech text-white font-bold">
          <span>Description information</span>
        </div>
        <Description data={data} />
      </div>
      <div>
        <div className="p-3 bg-stech text-white font-bold">
          <span>Stock Price and Quantity information</span>
        </div>
        <StockPriceAndQuantity data={data} />
      </div>
      <div>
        <div className="p-3 bg-stech text-white font-bold">
          <span>Delivery information</span>
        </div>
        <DeliveryInfo data={data} />
      </div>
      <div>
        <div className="p-3 bg-stech text-white font-bold">
          <span>Questions information</span>
        </div>
        <QuestionInfo productId={data?._id} />
      </div>
      <div>
        <div className="p-3 bg-stech text-white font-bold">
          <span>Review information</span>
        </div>
        <ReviewInfo productId={data?._id} />
      </div>
    </div>
  );
};

export default ProductDetails;
