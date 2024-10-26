import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import cn from "../../utils/cn";
const Table = ({ columns, tableData, className }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (tableData) {
      setData(
        tableData?.map((item, index) => {
          return { ...item, key: index };
        })
      );
    }
  }, [tableData]);

  return (
    <div className="overflow-x-auto">
      <table
        className={cn(`min-w-full bg-white rounded-lg shadow-md`, className)}
      >
        <thead className="bg-gray-200">
          <tr>
            {columns?.map((column, index) => (
              <th key={index} className="p-4 text-left hover:bg-gray-300">
                <div className="flex items-center justify-between">
                  <span className="whitespace-nowrap">{column.name}</span>{" "}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className={cn(`text-gray-600 text-sm font-light bg-white`, className)}
        >
          {data?.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {columns?.map((column, index) => (
                <td key={index} className="p-4 border-t">
                  {column?.render ? (
                    <column.render item={item} />
                  ) : (
                    <span
                      className="whitespace-nowrap"
                      title={
                        item[column?.dataIndex]?.length > 30
                          ? item[column?.dataIndex]
                          : undefined
                      }
                    >
                      {item[column?.dataIndex]?.length > 30
                        ? item[column?.dataIndex]?.slice(0, 30) + "..."
                        : item[column?.dataIndex]
                        ? item[column?.dataIndex]
                        : "N/A"}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  tableData: PropTypes.array,
  columns: PropTypes.array,
  className: PropTypes.string,
};

export default Table;
