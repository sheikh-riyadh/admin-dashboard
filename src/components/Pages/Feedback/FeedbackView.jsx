import { useState } from "react";
import PropTypes from "prop-types";
import { FaStreetView } from "react-icons/fa";
import Modal from "../../Modal/Modal";
import UserImage from "../Users/UserPersonalInfo/UserImage";
import UserDetailsRight from "../Users/UserPersonalInfo/UserDetailsRight";
const FeedbackView = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <span
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="cursor-pointer border text-stech border-stech text-center p-2 rounded-full  duration-300"
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
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                  <UserImage />
                </div>
                <div className="col-span-9">
                  <UserDetailsRight />
                </div>
              </div>
              <div className="shadow-md rounded-md border bg-white p-5 flex flex-col gap-5">
                <span className="font-bold">Feedback info</span>
                <div className="border p-5 rounded-md text-lg flex flex-col gap-5">
                  <p className="font-bold">
                    Title:{" "}
                    <span className="font-medium ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Perspiciatis, deleniti!
                    </span>{" "}
                  </p>
                  <p className="font-bold">
                    Message:{" "}
                    <span className="font-normal">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vero dolores commodi quaerat dignissimos perspiciatis
                      optio nemo tempora eius inventore doloribus iure
                      perferendis harum reprehenderit hic ratione deleniti quia
                      id quo temporibus, sit et fuga velit! Doloribus similique,
                      est ad omnis praesentium quia mollitia molestiae voluptate
                      fugit tempore officiis consequatur modi!
                    </span>{" "}
                  </p>
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
