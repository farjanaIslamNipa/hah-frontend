import hah from '../../assets/images/hah.svg'
import {TComment} from '../../types/comments.type';



const CommentCard = ({comment} : {comment: TComment}) => {

  return (
    <div className="border border-gray-300 dark:border-brand rounded-xl p-6 grid grid-cols-12 gap-3">
    <div className="col-span-3">
      <div className="flex gap-2 items-center">
        <div><img src={hah} alt="" className="h-12" /></div>
        <div>
          <p className="text-sm">{comment?.name}</p>
          <p className="text-sm text-brand"><em>{comment?.email}</em></p>
        </div>
      </div>
    </div>
    <div className="col-span-9">
      <p>{comment?.comment}</p>
    </div>
  </div>
  );
};

export default CommentCard;