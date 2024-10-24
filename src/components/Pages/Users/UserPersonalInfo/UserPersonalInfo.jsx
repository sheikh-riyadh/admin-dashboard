import CancelOrders from "../CancelOrders/CancelOrders";
import UserCart from "../UserCart/UserCart";
import UserOrders from "../UserOrders/UserOrders";
import UserReviews from "../UserReviews/UserReviews";
import UserWishlist from "../UserWishlist/UserWishlist";
import UserDetailsRight from "./UserDetailsRight";
import UserImage from "./UserImage";

const UserPersonalInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-5">
        <UserImage />
        <UserDetailsRight />
      </div>
      <div className="flex flex-col gap-5">
        <UserOrders />
        <CancelOrders />
        <UserCart />
        <UserWishlist />
        <UserReviews />
      </div>
    </div>
  );
};

export default UserPersonalInfo;
