import PropTypes from "prop-types";
import { useProductReviewByUserIdQuery } from "../../../../store/service/review/reviewApi";
import Table from "../../../Common/Table";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaFutbol, FaStar } from "react-icons/fa";
import moment from "moment";
import ReviewView from "./ReviewView";
const UserReviewTable = ({ userId }) => {
  const { data, isLoading } = useProductReviewByUserIdQuery(userId);

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
                        <FaStar className="text-stech" />
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
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-screen bg-white">
          <FaFutbol className="animate-spin text-6xl" />
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

UserReviewTable.propTypes = {
  userId: PropTypes.string,
};
export default UserReviewTable;
