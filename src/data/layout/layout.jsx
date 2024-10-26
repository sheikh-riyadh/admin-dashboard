import {
  FaBoxOpen,
  FaClipboardList,
  FaEnvelope,
  FaExclamationTriangle,
  FaProductHunt,
  FaThumbsUp,
  FaUserLock,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { FaShop, FaShopLock } from "react-icons/fa6";
import { MdWindow } from "react-icons/md";
import { PiSlideshowFill } from "react-icons/pi";

export const layout = {
  left_side: [
    {
      name: "Analytics",
      icon: <MdWindow />,
      link: "/",
    },
    {
      name: "Users",
      icon: <FaUsers />,
      link: "/users",
    },
    {
      name: "Block Users",
      icon: <FaUserLock />,
      link: "/block-users",
    },
    {
      name: "Sellers",
      icon: <FaShop />,
      link: "/sellers",
    },
    {
      name: "Block Seller",
      icon: <FaShopLock />,
      link: "/block-seller",
    },
    {
      name: "All Products",
      icon: <FaProductHunt />,
      link: "/all-products",
    },
    {
      name: "Orders",
      icon: <FaBoxOpen />,
      link: "/orders",
    },
    {
      name: "Banner Information",
      icon: <PiSlideshowFill />,
      link: "/banner-info",
    },
    {
      name: "Category",
      icon: <FaClipboardList />,
      link: "/category",
    },
    {
      name: "Staff",
      icon: <FaUserTie />,
      link: "/staff",
    },
    {
      name: "Feedback",
      icon: <FaThumbsUp />,
      link: "/feedback",
    },
    {
      name: "Reported",
      icon: <FaExclamationTriangle />,
      link: "/reported",
    },
    {
      name: "Send Message",
      icon: <FaEnvelope />,
      link: "/send-message",
    },
  ],
};
