/* eslint-disable @typescript-eslint/no-explicit-any */
import CommunityHeader from "./CommunityHeader";
import {useGetCommentsQuery} from "../../redux/features/comments/commentApi";
import CommentCard from "./CommentCard";
import {TComment} from "../../types";

const Community = () => {
  const {data, isError} =  useGetCommentsQuery(undefined)

  const sortedComments = ([...[data?.comments]].flat()).sort().reverse()

  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }

  return (
    <div className="custom-container">
      <CommunityHeader />
      <div className="my-20 max-w-[80%] mx-auto space-y-6">
      {
       sortedComments.map((comment : TComment | null) => <CommentCard key={comment?._id} comment={comment as TComment} />)
      }
      </div>
    </div>
  );
};

export default Community;