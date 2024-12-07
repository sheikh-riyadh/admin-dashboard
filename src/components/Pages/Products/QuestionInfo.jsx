import PropTypes from "prop-types";
import moment from "moment";
import { FaCommentAlt, FaFutbol } from "react-icons/fa";
import { RiMessage2Fill, RiQuestionnaireFill } from "react-icons/ri";
import { useProductQuestionsQuery } from "../../../store/service/question/productQuestionApi";
import { useGetAdmin } from "../../../hooks/useGetAdmin";
import { useState } from "react";
import Input from "../../Common/Input";
import Button from "../../Common/Button";
import { useSearchDelay } from "../../../hooks/useSearchDelay";
import Pagination from "../../Common/Pagination";

const QuestionCard = ({ productId }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLImit] = useState(10);

  const { handleChange, searchValue } = useSearchDelay();
  const { admin } = useGetAdmin();

  const query = new URLSearchParams({
    productId,
    email: admin?.email,
    page: currentPage,
    limit,
    search: searchValue,
  }).toString();

  const { data: questionData, isLoading } = useProductQuestionsQuery(query);
  const pages = Math.ceil(Math.abs(questionData?.total ?? 0) / parseInt(limit));

  return (
    <div className="bg-widget rounded-b-md shadow-md overflow-hidden p-5">
      {!isLoading ? (
        <div>
          <div className="flex flex-wrap items-center gap-3 justify-end mb-5">
            <Input
              onChange={handleChange}
              placeholder="Search..."
              className="bg-[#1c2822] w-full text-white"
            />
            <Button className="w-36">Find Question</Button>
          </div>
          {!questionData?.data?.length ? (
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="relative mt-2">
                <FaCommentAlt className="text-5xl text-gray-400" />
                <span className="absolute top-0 z-10 text-white text-4xl left-4">
                  ?
                </span>
              </div>
              <span className="text-center text-white">
                There are no questions yet
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-5 text-white">
              {questionData?.data?.map((question) => (
                <div
                  key={question?._id}
                  className="flex flex-col gap-5 bg-[#1c2822] p-5 rounded-md"
                >
                  <div className="flex gap-3">
                    <div>
                      <RiQuestionnaireFill className="text-2xl text-chart_1" />
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
                      <RiMessage2Fill className="text-2xl text-chart_2" />
                    </div>
                    {Object?.keys(question?.answer || {}).length ? (
                      <div className="flex flex-col gap-1 text-white">
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
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setLimit={setLImit}
                pages={pages}
                key={"seller_product_question_pagination"}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center h-screen bg-widget">
          <FaFutbol className="animate-spin text-6xl text-white" />
          <span className="text-accent">Loading...</span>
        </div>
      )}
    </div>
  );
};

QuestionCard.propTypes = {
  productId: PropTypes.string,
};

export default QuestionCard;
