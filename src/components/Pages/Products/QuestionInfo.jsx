import PropTypes from "prop-types";
import moment from "moment";
import { FaCommentAlt, FaFutbol } from "react-icons/fa";
import { RiMessage2Fill, RiQuestionnaireFill } from "react-icons/ri";
import { useProductQuestionsQuery } from "../../../store/service/question/productQuestionApi";

const QuestionCard = ({ productId }) => {
  const { data: questionData, isLoading } = useProductQuestionsQuery(productId);
  return (
    <div className="bg-white border rounded-md shadow-md overflow-hidden p-5">
      {!isLoading ? (
        <div>
          {!questionData?.length ? (
            <div className="flex flex-col justify-center items-center">
              <div className="relative mt-2">
                <FaCommentAlt className="text-5xl text-gray-400" />
                <span className="absolute top-0 z-10 text-white text-4xl left-4">
                  ?
                </span>
              </div>
              <span className="text-center">
                There are no questions yet. <br /> Ask the seller now and their
                answer will show here.
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {questionData?.map((question) => (
                <div
                  key={question?._id}
                  className="flex flex-col gap-5 bg-white p-5 border rounded-md"
                >
                  <div className="flex gap-3">
                    <div>
                      <RiQuestionnaireFill className="text-2xl" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold">
                        {question?.question?.userQuestion}
                      </span>
                      <span className="text-sm font-medium">
                        {`${question?.question?.userInfo?.userName} | ${moment(
                          question?.createdAt
                        ).fromNow()}`}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <RiMessage2Fill className="text-2xl text-slate" />
                    </div>
                    {Object?.keys(question?.answer || {}).length ? (
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium">
                          {question?.answer?.answer}
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm">No answer yet</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-screen bg-white">
          <FaFutbol className="animate-spin text-6xl" />
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

QuestionCard.propTypes = {
  productId: PropTypes.string,
};

export default QuestionCard;
