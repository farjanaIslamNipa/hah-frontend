/* eslint-disable @typescript-eslint/no-explicit-any */
import {FormEvent, useEffect, useState} from 'react';
import hah from '../../assets/images/hah.svg'
import {useAddCommentMutation} from '../../redux/features/opinions/opinionApi';
import {toast} from 'sonner';
import {TResponse} from '../../types';
import {TComment} from '../../types/opinion.type';


const CommentCard = ({opinion} : {opinion: any}) => {
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState('')
  const [commentArr, setCommentArr] = useState<string[]>([])

  const [addComment] = useAddCommentMutation()

  const handleComment = async(e : FormEvent) => {
    e.preventDefault()
    const id = opinion._id
    setCommentArr(prev => [...prev, comment])
    const toastId = toast.loading('Updating...')

    const data = {...opinion, comments: commentArr}

    try{
      const commentData = {
        id,
        data
      }

      const res = await addComment(commentData) as TResponse<TComment>
      console.log(res, 'res')

      if(res?.error){
        throw new Error(res?.error?.data?.message) 
      }
      toast.success('Successfully updated', {id: toastId, duration: 2000})
      setComment('')
    }catch(err : any){
      toast.error(err?.message ? err?.message : 'Something went wrong', {id: toastId})
    }
  }

  useEffect(()=> {
    setCommentArr([...opinion.comments])
  }, [opinion.comments])

  return (
    <div className="border border-gray-300 dark:border-brand rounded-xl p-6 grid grid-cols-12 gap-3">
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
            <div className="bg-slate-100 dark:bg-gray-800 rounded-2xl px-5 py-3 text-sm text-gray-600 dark:text-gray-400">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quis unde deserunt quibusdam tenetur reiciendis voluptates omnis illum doloribus neque.</p>
              <p className="text-end text-secondary italic">commentUser</p>
            </div>
          </div>
          <form onSubmit={(e) => handleComment(e)} className="mt-4">
            <input onChange={(e) => setComment(e.target.value)} type="text" className="border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-800 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm" placeholder="Be the first one to comment" />
          </form>
        </div>
        }
        <div className="text-end">
          <button onClick={() => setShowComments(!showComments)} className="bg-gray-200 dark:bg-brand hover:bg-slate-300 transition-all ease-out duration-200 px-5 py-[8px] text-sm font-bold text-gray-600 dark:text-white rounded-lg">
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