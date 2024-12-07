import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBinoculars } from "react-icons/fa";
import toast from "react-hot-toast";
import UpdateStatus from "./UpdateStatus";
import { useSellerProductQuery } from "../../../store/service/product/productApi";
import Table from "../../Common/Table";
import { numberWithCommas } from "../../../utils/numberWithComma";
import { FaFutbol } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useGetAdmin } from "../../../hooks/useGetAdmin";
import Pagination from "../../Common/Pagination";

const ProductTable = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const { admin } = useGetAdmin();

  const query = new URLSearchParams({
    email: admin?.email,
    page: currentPage,
    limit,
    search,
  }).toString()

  const navigate = useNavigate();
  const { data, isLoading } = useSellerProductQuery(query);
  const pages = Math.ceil(Math.abs(data?.total ?? 0) / parseInt(limit));

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
    <div className="rounded-md shadow-md">
      {!isLoading ? (
        <div>
          <Table
            className="font-normal"
            tableData={data?.data}
            columns={[
              {
                name: "Images",
                render: ({ item }) => {
                  return (
                    <div className="flex flex-wrap items-center gap-5">
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
                        className="text-chart_2 cursor-pointer border border-chart_2 text-center p-2 rounded-full"
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
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setLimit={setLimit}
            pages={pages}
            key={"seller_product_pagination"}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-screen bg-widget">
          <FaFutbol className="animate-spin text-6xl text-white" />
          <span className="text-accent">Loading...</span>
        </div>
      )}
    </div>
  );
};

ProductTable.propTypes = {
  search: PropTypes.string,
};

export default ProductTable;
