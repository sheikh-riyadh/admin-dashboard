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
import AllProducts from "../pages/Products/AllProducts";
import Feedback from "../pages/Feedback/Feedback";
import Reported from "../pages/Reported/Reported";
import Message from "../pages/Message/Message";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import ReportedView from "../components/Pages/Reported/ReportedView";
import ProductDetails from "../pages/Products/ProductDetails";

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
        path: "all-products",
        element: <AllProducts />,
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
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "product-details",
        element: <ProductDetails />,
      },
      {
        path: "reported",
        element: <Reported />,
      },
      {
        path: "reported-details",
        element: <ReportedView />,
      },
      {
        path: "send-message",
        element: <Message />,
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
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
