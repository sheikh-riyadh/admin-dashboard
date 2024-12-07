import { useSelector } from "react-redux";

export const useGetAdmin = () => {
  return useSelector((state) => state.session.adminUserReducer.value);
};
