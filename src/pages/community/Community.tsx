/* eslint-disable @typescript-eslint/no-explicit-any */
import CommunityHeader from "./CommunityHeader";
import {useAppSelector} from "../../redux/hooks";
import {currentUser, currentUsername} from "../../redux/features/auth/authSlice";
import {useGetOpinionsQuery} from "../../redux/features/opinions/opinionApi";
import CommentCard from "./CommentCard";

const Community = () => {

  const user = useAppSelector(currentUser)
  const username = useAppSelector(currentUsername)

  const {data, isError} =  useGetOpinionsQuery(undefined)



  const userInfo = {
    username,
    email: (user?.email) as string
  }

  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }

  return (
    <div className="custom-container">
      <CommunityHeader userInfo={userInfo} />
      <div className="my-20 max-w-[80%] mx-auto space-y-6">
        {
          data?.opinions.map((opinion : any) => <CommentCard key={opinion._id} opinion={opinion} />)
        }
      </div>
    </div>
  );
};

export default Community;