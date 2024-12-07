import { FaBell, FaPowerOff, FaQuestionCircle } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeAdmin } from "../../store/features/user/adminSlice";

const RightSide = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-12 h-full bg-widget pt-6 text-white">
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
        <div onClick={() => dispatch(removeAdmin())}>
          <FaPowerOff className="text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
