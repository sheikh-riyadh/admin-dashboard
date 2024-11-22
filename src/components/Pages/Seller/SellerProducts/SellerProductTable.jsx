import { useNavigate } from "react-router-dom";
import { FaBinoculars } from "react-icons/fa";
import toast from "react-hot-toast";
import { FaFutbol } from "react-icons/fa6";
import { useProductBySellerIdQuery } from "../../../../store/service/product/productApi";
import PropTypes from "prop-types";
import { numberWithCommas } from "../../../../utils/numberWithComma";
import UpdateStatus from "../../Products/UpdateStatus";
import Table from "../../../Common/Table";

const SellerProductTable = ({ sellerId }) => {
  const navigate = useNavigate();
  const { data, isLoading } = useProductBySellerIdQuery(sellerId);

  const redirectUserDetailsHandler = (items) => {
    if (items) {
      navigate("/product-details", {
        state: {
          payload: { ...items },
        },
      });
    } else {
      toast.error("Data missing!. Please try again!");
    }
  };

  return (
    <div className="border rounded-md shadow-md">
      {!isLoading ? (
        <Table
          className="font-normal"
          tableData={data}
          columns={[
            {
              name: "Images",
              render: ({ item }) => {
                return (
                  <div className="flex items-center gap-2">
                    {item?.productImages?.slice(0, 2)?.map((image, index) => (
                      <img
                        className="w-12 h-12 border rounded-sm"
                        key={index}
                        src={image}
                        alt="product_image"
                      />
                    ))}
                  </div>
                );
              },
            },
            {
              name: "Title",
              dataIndex: "title",
              key: "title",
            },
            {
              name: "Price",
              render: ({ item }) => {
                return <div>{numberWithCommas(item?.price)}</div>;
              },
            },
            {
              name: "Stock",
              dataIndex: "stock",
              key: "stock",
            },
            {
              name: "Brand",
              dataIndex: "brand",
              key: "brand",
            },
            {
              name: "Status",
              render: ({ item }) => {
                return <UpdateStatus item={item} />;
              },
            },
            {
              name: "Actions",
              render: ({ item }) => {
                return (
                  <div className="flex items-center gap-2">
                    <span
                      onClick={() => redirectUserDetailsHandler(item)}
                      className="text-stech cursor-pointer border border-stech text-center p-2 rounded-full"
                      title="View"
                    >
                      <FaBinoculars />
                    </span>
                  </div>
                );
              },
            },
          ]}
        />
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-screen bg-white">
          <FaFutbol className="animate-spin text-6xl" />
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

SellerProductTable.propTypes = {
  sellerId: PropTypes.string,
};

export default SellerProductTable;
