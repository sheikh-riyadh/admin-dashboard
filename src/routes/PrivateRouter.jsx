import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useGetAdmin } from "../hooks/useGetAdmin";

const PrivateRouter = ({ children }) => {
  const { admin } = useGetAdmin();

  const location = useLocation();

  if (
    (admin?.role === "admin" || admin?.role === "super_admin") &&
    admin?.status == "active"
  ) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouter;
