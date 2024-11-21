import { ImSpinner9 } from "react-icons/im";
import { useGetCategoriesQuery } from "../../../store/service/category/categoryApi";
import Table from "../../Common/Table";
import DeleteCategory from "./DeleteCategory";
import UpdateCategory from "./UpdateCategory";

const CategoriesTable = () => {
  const { data, isLoading } = useGetCategoriesQuery();

  return (
    <div>
      <div className="border rounded-md shadow-md">
        {!isLoading ? (
          <Table
            className="font-normal"
            tableData={data}
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
                    <div className="flex items-center gap-2">
                      <img src={item?.image} alt="category" />
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
        ) : (
          <div className="flex flex-col gap-5 items-center justify-center h-80 bg-white">
            <ImSpinner9 className="text-6xl animate-spin" />
            <span className="font-medium">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default CategoriesTable;
