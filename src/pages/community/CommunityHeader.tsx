/* eslint-disable @typescript-eslint/no-explicit-any */
import communityImg from '../../assets/images/donor-bg.png'
import Button from '../../components/ui/Button';
import {useAddCommentMutation} from '../../redux/features/comments/commentApi';
import {toast} from 'sonner';
import {TComment, TResponse} from '../../types';
import {FieldValues, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {commentSchema} from './zodCommentValidation';

const CommunityHeader = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(commentSchema) });

  const [addComment] = useAddCommentMutation()

  const onSubmit = async (data: FieldValues) => {

    const toastId = toast.loading('Comment publishing ...')

    try {
      const res = await addComment(data) as TResponse<TComment>;

      if(res?.error){
        throw new Error(res?.error?.data?.message) 
      }
      toast.success("Comment added successfully", { id: toastId, duration: 2000 });
      reset()
    } catch (err : any) {
      toast.error(err?.message ? err.message : "Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <div className="grid grid-cols-12">
    <div className="col-span-5 bg-brand bg-opacity-25">
      <div className="p-6 h-full flex items-center justify-center">
        <img src={communityImg} alt="Community" />
      </div>
    </div>
    <div className="col-span-7">
      <div className="bg-brand bg-opacity-10 h-full p-8">
        <h2 className='font-extrabold text-2xl mb-3'>We value your opinion</h2>
        <p>Gratitude doesn't seem enough to express our appreciation for the medical teams and supply providers who stood by us during the aftermath of the disaster. Your unwavering commitment to our well-being restored our faith in humanity. Thank you from the bottom of our hearts </p>
        <p className="my-4 font-semibold text-brand text-[18px]">We're eager to hear your perspective! Share your thoughts with us</p>
        <div className="mt-4">
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
            <div>
              <input {...register('name')} type="text" className='custom-input' placeholder='Enter your name' />
              {errors?.name && (
                <span className="text-xs text-red-500">
                  {errors.name.message as string}
                </span>
              )}
            </div>
            <div>
              <input {...register('email')} type="text" className='custom-input' placeholder='Enter your email' />
              {errors?.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message as string}
                </span>
              )}
            </div>
            <div>
              <textarea {...register('comment')} name="comment" id="comment" rows={2} placeholder='Share your thoughts' className="custom-input" ></textarea>
              {errors?.comment && (
                <span className="text-xs text-red-500">
                  {errors.comment.message as string}
                </span>
              )}
            </div>
            <div className='text-end'>
              <Button type='submit'>Publish your opinion</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CommunityHeader;