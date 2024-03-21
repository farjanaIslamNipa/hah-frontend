import communityImg from '../../assets/images/donor-bg.png'
import Button from '../../components/ui/Button';

const CommunityHeader = () => {
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
          <form>
            <textarea name="" id="" rows={3} placeholder='Share your thoughts' className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm" ></textarea>
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