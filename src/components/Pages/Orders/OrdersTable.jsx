import Table from "../../Common/Table";
import { useGetOrdersQuery } from "../../../store/service/order/orderApi";
import { FaFutbol } from "react-icons/fa6";
import { numberWithCommas } from "../../../utils/numberWithComma";
import { PhotoProvider, PhotoView } from "react-photo-view";
import View from "./View";
import PropTypes from "prop-types";
import { useGetAdmin } from "../../../hooks/useGetAdmin";
import { useState } from "react";
import Pagination from "../../Common/Pagination";

const OrdersTable = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLImit] = useState(10);

  const { admin } = useGetAdmin();
  const query = new URLSearchParams({
    email: admin?.email,
    search,
    limit,
    page: currentPage,
  }).toString();

  const { data, isLoading } = useGetOrdersQuery(query);
  const pages = Math.ceil(Math.abs(data?.total ?? 0) / parseInt(limit));

  return (
    <div className="overflow-hidden">
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
                    <div className="flex gap-2">
                      <PhotoProvider>
                        {item?.productsInfo?.map((product) => (
                          <figure key={product?._id}>
                            <PhotoView src={product?.image}>
                              <div className="border w-10 h-10 rounded p-1 cursor-pointer">
                                <img
                                  className="h-full w-full"
                                  src={product?.image}
                                  alt="product_gallery_image"
                                />
                              </div>
                            </PhotoView>
                          </figure>
                        ))}
                      </PhotoProvider>
                    </div>
                  );
                },
              },
              {
                name: "Order ID",
                render: ({ item }) => {
                  return (
                    <div>
                      <span>#{item?.orderId}</span>
                    </div>
                  );
                },
              },
              {
                name: "Payment Method",
                render: ({ item }) => {
                  return (
                    <div>
                      <span>{item?.paymentMethod}</span>
                    </div>
                  );
                },
              },
              {
                name: "Order Status",
                render: ({ item }) => {
                  return (
                    <div>
                      <span className="capitalize">{item?.status}</span>
                    </div>
                  );
                },
              },
              {
                name: "Total",
                render: ({ item }) => {
                  return (
                    <div>
                      <span className="font-medium">
                        {numberWithCommas(
                          item?.productsInfo?.reduce((total, item) => {
                            return (total += item?.buyQnt * item?.price);
                          }, 0) +
                            parseInt(
                              item?.deliveryCharge ? item?.deliveryCharge : 0
                            )
                        )}
                        TK
                      </span>
                    </div>
                  );
                },
              },
              {
                name: "Actions",
                render: ({ item }) => {
                  return (
                    <div className="flex gap-3">
                      <View item={item} />
                    </div>
                  );
                },
              },
            ]}
          />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setLimit={setLImit}
            key={"user_order_pagination"}
            pages={pages}
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

OrdersTable.propTypes = {
  search: PropTypes.string,
};

export default OrdersTable;
