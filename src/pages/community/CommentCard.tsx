/* eslint-disable @typescript-eslint/no-explicit-any */
import {FormEvent, useState} from 'react';
import hah from '../../assets/images/hah.svg'
import {useAddCommentMutation} from '../../redux/features/opinions/opinionApi';


const CommentCard = ({opinion} : {opinion: any}) => {
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState('')

  const [addComment] = useAddCommentMutation()

  const handleComment = (e : FormEvent) => {
    e.preventDefault()
    // const commentArr = Object.preventExtensions(opinion.comments)
    // if(comment){
    //   commentArr.push(comment)
    // }

    const opinionWithAddedComment = {
      id: opinion._id,
      data: comment
    }
    console.log(opinionWithAddedComment, 'arr')

  }

  return (
    <div className="border rounded-xl p-6 grid grid-cols-12 gap-3">
    <div className="col-span-3">
      <div className="flex gap-2 items-center">
        <div><img src={hah} alt="" className="h-12" /></div>
        <div>
          <p className="text-sm">{opinion.username}</p>
          <p className="text-sm text-brand"><em>{opinion.email}</em></p>
        </div>
      </div>
    </div>
    <div className="col-span-9">
      <p>{opinion.opinion}</p>
      <div className="mt-3">
        {
          showComments && 
          <div className="py-3 ml-8">
          <div className="space-y-3">
            <div className="bg-slate-100 rounded-2xl px-5 py-3 text-sm text-gray-600">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quis unde deserunt quibusdam tenetur reiciendis voluptates omnis illum doloribus neque.</p>
              <p className="text-end text-secondary italic">commentUser</p>
            </div>
          </div>
          <form onSubmit={(e) => handleComment(e)} className="mt-4">
            <input onChange={(e) => setComment(e.target.value)} type="text" className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm" placeholder="Be the first one to comment" />
          </form>
        </div>
        }
        <div className="text-end">
          <button onClick={() => setShowComments(!showComments)} className="bg-gray-200 hover:bg-slate-300 transition-all ease-out duration-200 px-5 py-[8px] text-sm font-bold text-gray-600 rounded-lg">
            {
              showComments && 'Hide Comments' || 'Comments'
            }
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CommentCard;