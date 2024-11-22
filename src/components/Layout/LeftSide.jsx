import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { layout } from "../../data/layout/layout";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const LeftSide = () => {
  const { pathname } = useLocation();
  const [isExtend, setIsExtend] = useState(true);

  const handleArrow = () => {
    setIsExtend((prev) => !prev);
  };

  return (
    <div className="relative z-0">
      <div
        className={`${
          isExtend ? "w-60" : "w-14"
        } h-screen overflow-y-auto border border-t-0 bar-hidden duration-300`}
      >
        <div className="border-b sticky top-0 bg-white">
          <div className="w-44 h-[60px] flex flex-col items-center justify-center">
            <img
              className="object-fill px-3"
              src="/logo.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 h-full">
          {layout.left_side.map(({ name, icon, link }) => (
            <Link
              className={`flex items-center gap-3 ${
                !isExtend && "gap-6 py-3"
              } px-4 py-2 duration-200 text-sm text-slate ${
                pathname == link ? "bg-stech text-white" : ""
              }`}
              to={`${link}`}
              title={name}
              key={name}
            >
              <span className="text-xl">{icon}</span>
              {isExtend && <span>{name}</span>}
            </Link>
          ))}
        </div>
      </div>
      <div
        onClick={handleArrow}
        className="absolute top-[73px] -right-[10px] w-6 h-6 bg-white rounded-full border flex items-center justify-center z-40 cursor-pointer"
      >
        {isExtend ? (
          <FaAngleLeft className="text-lg" />
        ) : (
          <FaAngleRight className="text-lg" />
        )}
      </div>
    </div>
  );
};

export default LeftSide;
