/* eslint-disable @typescript-eslint/no-explicit-any */
import {FormEvent, useRef, useState} from 'react';
import communityImg from '../../assets/images/donor-bg.png'
import Button from '../../components/ui/Button';
import {useAddOpinionMutation} from '../../redux/features/opinions/opinionApi';
import {toast} from 'sonner';
import {TResponse} from '../../types';
import {TOpinion} from '../../types/opinion.type';

type TUserInfo = {
  username: string | null;
  email: string | null;
}

const CommunityHeader = ({userInfo} : {userInfo: TUserInfo}) => {
  const [opinion, setOpinion] = useState('')

  const [addOpinion] = useAddOpinionMutation()

  const opinionRef = useRef<HTMLTextAreaElement | null>(null)

  const handleOpinion = async(e : FormEvent) => {
    e.preventDefault()
    const opinionData = {
      username: userInfo.username,
      email: userInfo.email,
      opinion,
      comments: []
    }
    const toastId = toast.loading('Publishing ...')
    try {
      const res = await addOpinion(opinionData) as TResponse<TOpinion>;

      if(res?.error){
        throw new Error(res?.error?.data?.message) 
      }
      toast.success("Published successfully", { id: toastId, duration: 2000 });
      if(opinionRef.current){
       opinionRef.current.value = ''
      }
    } catch (err : any) {
      toast.error(err?.message ? err.message : "Something went wrong", { id: toastId, duration: 2000 });
    }
  }
  return (
    <div className="grid grid-cols-12">
    <div className="col-span-5 bg-brand bg-opacity-25">
      <div className="p-6">
        <img src={communityImg} alt="Community" />
      </div>
    </div>
    <div className="col-span-7">
      <div className="bg-brand bg-opacity-10 h-full p-8">
        <h2 className='font-extrabold text-2xl mb-3'>We value your opinion</h2>
        <p>Gratitude doesn't seem enough to express our appreciation for the medical teams and supply providers who stood by us during the aftermath of the disaster. Your unwavering commitment to our well-being restored our faith in humanity. Thank you from the bottom of our hearts </p>
        <p className="my-4 font-semibold text-brand text-[18px]">We're eager to hear your perspective! Share your thoughts with us</p>
        <div className="mt-4">
          <form onSubmit={(e) => handleOpinion(e)}>
            <textarea ref={opinionRef} defaultValue={opinion} onChange={(e) => setOpinion(e.target.value)} name="opinion" id="opinion" rows={3} placeholder='Share your thoughts' className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm" ></textarea>
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