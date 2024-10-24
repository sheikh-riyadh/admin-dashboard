import PropTypes from "prop-types";
import cn from "../../utils/cn";
import { numberWithCommas } from "../../utils/numberWithComma";
import { Link } from "react-router-dom";
const ProductCard = ({ className, imageSize }) => {
  return (
    <Link to={'/product/12345'}>
      <div
        className={cn(
          `rounded-xl p-3 lg:p-5 bg-white border-b-2 relative`,
          className
        )}
      >
        <div className="flex items-center justify-center">
          <img
            className={cn(`h-32 w-32 lg:h-52 lg:w-full`, imageSize)}
            src="https://www.startech.com.bd/image/cache/catalog/laptop/msi/stealth-16-studio-a13vg-407bd/stealth-16-studio-a13vg-407bd-pure-white-01-500x500.webp"
            alt="product_image"
          />
        </div>
        <div>
          <p className="text-sm hover:underline hover:text-primary">{`MSI Stealth 16 Studio A13VG-407BD Core i9 13th Gen...`}</p>
          <div className="flex flex-wrap items-center gap-1 lg:gap-5">
            <span className="text-primary font-semibold">
              {`${numberWithCommas(299000)}৳`}
            </span>
            <span className="line-through font-semibold text-sm">{`${numberWithCommas(
              300000
            )}৳`}</span>
          </div>
        </div>
        <div className="absolute top-4 left-0">
          <span className="text-xs bg-primary text-white px-3 py-1 rounded-tr-xl rounded-br-xl">
            Save: {`${numberWithCommas(10000)}৳`}
          </span>
        </div>
      </div>
    </Link>
  );
};
ProductCard.propTypes = {
  className: PropTypes.string,
  imageSize: PropTypes.string,
};
export default ProductCard;
