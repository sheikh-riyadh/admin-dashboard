import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { FaStreetView } from "react-icons/fa";
import Table from "../../../Common/Table";
import { useGetAllSellerQuery } from "../../../../store/service/seller/sellerApi";
import UpdateSellerStatus from "./UpdateSellerStatus";
import PropTypes from "prop-types";
import { useGetAdmin } from "../../../../hooks/useGetAdmin";
import Pagination from "../../../Common/Pagination";

const SellerTable = ({ status, search }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const { admin } = useGetAdmin();
  const query = new URLSearchParams({
    status,
    search,
    limit,
    page: currentPage,
    email: admin?.email,
  }).toString();

  const navigate = useNavigate();
  const { data, isLoading } = useGetAllSellerQuery(query);
  const pages = Math.ceil(Math.abs(data?.total ?? 0) / parseInt(limit));

  const redirectUserDetailsHandler = (items) => {
    if (items) {
      navigate("/seller-details", {
        state: {
          payload: { ...items },
        },
      });
    } else {
      toast.error("Data missing!. Please try again!");
    }
  };

  return (
    <div>
      <div className="rounded-md shadow-md">
        {!isLoading ? (
          <div>
            <Table
              className="font-normal"
              tableData={data?.data}
              columns={[
                {
                  name: "Name",
                  dataIndex: "fullName",
                  key: "fullName",
                },
                {
                  name: "Phone",
                  dataIndex: "phoneNumber",
                  key: "phoneNumber",
                },
                {
                  name: "Email",
                  dataIndex: "email",
                  key: "email",
                },
                {
                  name: "Role",
                  dataIndex: "role",
                  key: "role",
                },
                {
                  name: "Status",
                  render: ({ item }) => {
                    return <UpdateSellerStatus item={item} />;
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
                          <FaStreetView />
                        </span>
                        {/* <span
                        onClick={() => {
                          setSellerId(item?._id),
                            setIsModalOpen((prev) => !prev);
                        }}
                        className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full hover:bg-red-300 hover:text-white duration-300"
                        title="Delete"
                      >
                        <FaTrash />
                      </span> */}
                      </div>
                    );
                  },
                },
              ]}
            />

            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pages={pages}
              setLimit={setLimit}
              key={"seller_pagination"}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-5 items-center justify-center h-80 bg-widget">
            <ImSpinner9 className="text-6xl animate-spin text-white" />
            <span className="font-medium text-accent">Loading...</span>
          </div>
        )}
      </div>
      {/* <div>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={setIsModalOpen}
            isOutsideClick={false}
            className="w-[330px]"
          >
            <DeleteSeller sellerId={sellerId} setIsModalOpen={setIsModalOpen} />
          </Modal>
        )}
      </div> */}
    </div>
  );
};

SellerTable.propTypes = {
  status: PropTypes.string,
  search: PropTypes.string,
};

export default SellerTable;
