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
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRouter>
            <Analytics />
          </PrivateRouter>
        ),
      },
      {
        path: "analytics",
        element: (
          <PrivateRouter>
            <Analytics />
          </PrivateRouter>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRouter>
            <AllProducts />
          </PrivateRouter>
        ),
      },
      {
        path: "banner-info",
        element: (
          <PrivateRouter>
            <BannerInformation />
          </PrivateRouter>
        ),
      },
      {
        path: "category",
        element: (
          <PrivateRouter>
            <Category />
          </PrivateRouter>
        ),
      },
      {
        path: "feedback",
        element: (
          <PrivateRouter>
            <Feedback />
          </PrivateRouter>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivateRouter>
            <Orders />
          </PrivateRouter>
        ),
      },
      {
        path: "product-details",
        element: (
          <PrivateRouter>
            <ProductDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "reported",
        element: (
          <PrivateRouter>
            <Reported />
          </PrivateRouter>
        ),
      },
      {
        path: "reported-details",
        element: (
          <PrivateRouter>
            <ReportedView />
          </PrivateRouter>
        ),
      },
      {
        path: "send-message",
        element: (
          <PrivateRouter>
            <Message />
          </PrivateRouter>
        ),
      },

      {
        path: "sellers",
        element: (
          <PrivateRouter>
            <Sellers />
          </PrivateRouter>
        ),
      },
      {
        path: "seller-details",
        element: (
          <PrivateRouter>
            <SellerView />
          </PrivateRouter>
        ),
      },
      {
        path: "staff",
        element: (
          <PrivateRouter>
            <Staff />
          </PrivateRouter>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRouter>
            <Users />
          </PrivateRouter>
        ),
      },
      {
        path: "user-details",
        element: (
          <PrivateRouter>
            <UserView />
          </PrivateRouter>
        ),
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
