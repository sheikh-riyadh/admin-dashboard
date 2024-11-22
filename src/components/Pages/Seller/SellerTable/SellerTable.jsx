import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { FaStreetView, FaTrash } from "react-icons/fa";
import Table from "../../../Common/Table";
import { useGetAllSellerQuery } from "../../../../store/service/seller/sellerApi";
import Modal from "../../../Modal/Modal";
import UpdateSellerStatus from "./UpdateSellerStatus";
import DeleteSeller from "./DeleteSeller";
import PropTypes from "prop-types";

const SellerTable = ({ status }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sellerId, setSellerId] = useState("");

  const navigate = useNavigate();
  const { data, isLoading } = useGetAllSellerQuery(status);

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
      <div className="border rounded-md shadow-md">
        {!isLoading ? (
          <Table
            className="font-normal"
            tableData={data}
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
                        className="text-stech cursor-pointer border border-stech text-center p-2 rounded-full"
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
        ) : (
          <div className="flex flex-col gap-5 items-center justify-center h-80 bg-white">
            <ImSpinner9 className="text-6xl animate-spin" />
            <span className="font-medium">Loading...</span>
          </div>
        )}
      </div>
      <div>
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
      </div>
    </div>
  );
};

SellerTable.propTypes = {
  status: PropTypes.string,
};

export default SellerTable;
