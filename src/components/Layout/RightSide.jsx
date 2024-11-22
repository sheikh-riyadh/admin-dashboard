import { FaBell, FaPowerOff, FaQuestionCircle } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../store/features/user/userSlice";

const RightSide = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-12 h-full bg-white pt-6 border">
      <div className="flex flex-col gap-5 items-center justify-center">
        <Link title="working..">
          <FaBell className="text-lg" />
        </Link>
        <Link title="working..">
          <FaQuestionCircle className="text-lg" />
        </Link>
        <Link title="working..">
          <MdQuestionAnswer className="text-lg" />
        </Link>
        <div onClick={() => dispatch(removeUser())}>
          <FaPowerOff className="text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
