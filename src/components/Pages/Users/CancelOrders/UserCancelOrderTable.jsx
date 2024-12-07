import PropTypes from "prop-types";
import Table from "../../../Common/Table";
import { useCancelOrderByUserIdQuery } from "../../../../store/service/order/orderApi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { numberWithCommas } from "../../../../utils/numberWithComma";
import View from "../../Orders/View";
import { FaFutbol } from "react-icons/fa";

const UserCancelOrderTable = ({ userId }) => {
  const query = new URLSearchParams({
    userId,
    status: "cancelled",
  });

  const { data, isLoading } = useCancelOrderByUserIdQuery(query.toString());

  return (
    <div className="overflow-hidden">
      {!isLoading ? (
        <Table
          className="font-normal"
          tableData={data}
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
                        }, 0) + parseInt( item?.deliveryCharge ? item?.deliveryCharge : 0)
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
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-screen bg-widget">
          <FaFutbol className="animate-spin text-6xl text-white" />
          <span className="text-accent">Loading...</span>
        </div>
      )}
    </div>
  );
};

UserCancelOrderTable.propTypes = {
  userId: PropTypes.string,
};
export default UserCancelOrderTable;
