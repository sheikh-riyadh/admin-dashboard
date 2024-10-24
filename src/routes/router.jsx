import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Analytics from "../pages/Analytics/Analytics";
import BannerInformation from "../pages/Banner/BannerInformation";
import Orders from "../pages/Orders/Orders";
import Staff from "../pages/Staff/Staff";
import Category from "../pages/Category/Category";
import Users from "../pages/Users/Users";
import UserView from "../components/Pages/Users/UserView/UserView";
import SellerView from "../components/Pages/Seller/SellerView/SellerView";
import Sellers from "../pages/Sellers/Sellers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Analytics />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "banner-info",
        element: <BannerInformation />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "sellers",
        element: <Sellers />,
      },
      {
        path: "seller-details",
        element: <SellerView />,
      },
      {
        path: "staff",
        element: <Staff />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "user-details",
        element: <UserView />,
      },
      {
        path: "user-details",
        element: <UserView />,
      },
    ],
  },
]);

export default router;
