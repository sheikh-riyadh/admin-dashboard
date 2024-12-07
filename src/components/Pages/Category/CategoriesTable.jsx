import { ImSpinner9 } from "react-icons/im";
import { useGetCategoriesQuery } from "../../../store/service/category/categoryApi";
import Table from "../../Common/Table";
import DeleteCategory from "./DeleteCategory";
import UpdateCategory from "./UpdateCategory";
import { useGetAdmin } from "../../../hooks/useGetAdmin";
import { useState } from "react";
import Pagination from "../../Common/Pagination";
import PropTypes from "prop-types";

const CategoriesTable = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const { admin } = useGetAdmin();
  
  const query = new URLSearchParams({
    email: admin?.email,
    search,
    limit,
    page: currentPage,
  }).toString();

  const { data, isLoading } = useGetCategoriesQuery(query);
  const pages = Math.ceil(Math.abs(data?.total ?? 0) / parseInt(limit));

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
                  name: "Category",
                  dataIndex: "category",
                  key: "category",
                },
                {
                  name: "Image",
                  render: ({ item }) => {
                    return (
                      <div className="flex items-center gap-2 h-12 w-12">
                        <img
                          className="w-full h-full"
                          src={item?.image}
                          alt="category"
                        />
                      </div>
                    );
                  },
                },

                {
                  name: "Actions",
                  render: ({ item }) => {
                    return (
                      <div className="flex items-center gap-2">
                        <UpdateCategory item={item} />
                        <DeleteCategory deleteId={item?._id} />
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
              key={"categories_pagination"}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-5 items-center justify-center h-screen bg-widget">
            <ImSpinner9 className="text-6xl animate-spin text-white" />
            <span className="font-medium text-accent">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

CategoriesTable.propTypes = {
  search: PropTypes.string,
};
export default CategoriesTable;
