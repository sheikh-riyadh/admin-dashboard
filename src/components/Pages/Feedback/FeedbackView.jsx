import { useState } from "react";
import PropTypes from "prop-types";
import { FaStreetView } from "react-icons/fa";
import Modal from "../../Modal/Modal";
import UserImage from "../Users/UserPersonalInfo/UserImage";
import UserDetailsRight from "../Users/UserPersonalInfo/UserDetailsRight";
const FeedbackView = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const newData = {
    fullName: item?.user?.fName + "" + item?.user?.lName,
    phone: item?.user?.phone,
    photo: item?.user?.photo,
    role: item?.user?.role,
    status: item?.user?.status,
    email:item?.user?.email
  };

  return (
    <>
      <span
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="cursor-pointer border text-chart_2 border-chart_2 text-center p-2 rounded-full  duration-300"
        title="Delete"
      >
        <FaStreetView />
      </span>
      <div>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={setIsModalOpen}
            className="h-[500px] w-4/5"
            title={"Feedback"}
          >
            <div className="flex flex-col gap-5">
              <div className="grid xl:grid-cols-12 gap-5">
                <div className="xl:col-span-3">
                  <UserImage data={item?.user?.photo} />
                </div>
                <div className="xl:col-span-9">
                  <UserDetailsRight data={newData} />
                </div>
              </div>
              <div className="shadow-md rounded-md bg-widget p-5 flex flex-col gap-5">
                <span className="font-bold">Feedback info </span>
                <div className=" bg-[#1c2822] p-5 rounded-md text-lg flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <p className="font-bold">Feedback type: </p>
                    <span className="border px-4 rounded-full bg-accent text-black font-bold">
                      {item?.feedbackType}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold">Message: </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item?.feedbackMessage,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

FeedbackView.propTypes = {
  item: PropTypes.object,
};

export default FeedbackView;
