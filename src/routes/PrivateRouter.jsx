import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useGetUser } from "../hooks/useGetUser";

const PrivateRouter = ({ children }) => {
  const { user } = useGetUser();

  const location = useLocation();

  if (
    (user?.role === "admin" || user?.role === "super_admin") &&
    user?.status == "active"
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
