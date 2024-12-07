import PropTypes from "prop-types";
import { useProductReviewByUserIdQuery } from "../../../../store/service/review/reviewApi";
import Table from "../../../Common/Table";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaFutbol, FaStar } from "react-icons/fa";
import moment from "moment";
import ReviewView from "./ReviewView";
import { useState } from "react";
import { useGetAdmin } from "../../../../hooks/useGetAdmin";
import Pagination from "../../../Common/Pagination";
const UserReviewTable = ({ userId }) => {

  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const { admin } = useGetAdmin();

  const query = new URLSearchParams({
    page: currentPage,
    limit,
    email: admin?.email,
    userId,
  }).toString();


  const { data, isLoading } = useProductReviewByUserIdQuery(query);
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
                      {item?.productInfo?.map((product) => (
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
              name: "Rating",
              render: ({ item }) => {
                return (
                  <div className="flex gap-1 items-center">
                    {[...Array(item?.rating?.rating).keys()].map((rating) => (
                      <div key={rating}>
                        <FaStar className="text-accent" />
                      </div>
                    ))}
                  </div>
                );
              },
            },
            {
              name: "Review Message",
              index: "reviewMessage",
              dataIndex: "reviewMessage",
            },
            {
              name: "Time",
              render: ({ item }) => {
                return <div>{moment(item?.createdAt).format("LL")}</div>;
              },
            },
            {
              name: "Actions",
              render: ({ item }) => {
                return (
                  <div className="flex gap-3">
                    <ReviewView item={item} />
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
            key={"specific_user_order_pagination"}
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

UserReviewTable.propTypes = {
  userId: PropTypes.string,
};
export default UserReviewTable;
