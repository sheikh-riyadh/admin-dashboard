import { useLocation } from "react-router-dom";
import ProductBasicInfo from "../../components/Pages/Products/ProductBasicInfo";
import Description from "../../components/Pages/Products/Description";
import StockPriceAndQuantity from "../../components/Pages/Products/StockPriceAndQuantity";
import DeliveryInfo from "../../components/Pages/Products/DeliveryInfo";
import QuestionInfo from "../../components/Pages/Products/QuestionInfo";
import ReviewInfo from "../../components/Pages/Products/ReviewInfo";
import SellerInfo from "../../components/Pages/Products/SellerInfo";

const ProductDetails = () => {
  const location = useLocation();
  const data = location.state.payload;

  return (
    <div className="flex flex-col gap-5 p-5">
      <div>
        <SellerInfo data={data} />
      </div>
      <div>
        <div className="p-3 bg-stech text-white font-bold">
          <span>Basic information</span>
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
        <QuestionInfo data={data} />
      </div>
      <div>
        <div className="p-3 bg-stech text-white font-bold">
          <span>Review information</span>
        </div>
        <ReviewInfo data={data} />
      </div>
    </div>
  );
};

export default ProductDetails;
