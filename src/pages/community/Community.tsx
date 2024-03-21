import CommunityHeader from "./CommunityHeader";
import hah from '../../assets/images/hah.svg'
import {useState} from "react";

const Community = () => {
  const [showComments, setShowComments] = useState(false)
  return (
    <div className="custom-container">
      <CommunityHeader />
      <div className="my-20 max-w-[80%] mx-auto">
        <div className="border rounded-xl p-6 grid grid-cols-12 gap-3">
          <div className="col-span-3">
            <div className="flex gap-2 items-center">
              <div><img src={hah} alt="" className="h-12" /></div>
              <div>
                <p className="text-sm">devUser</p>
                <p className="text-sm text-brand"><em>devid@gmail.com</em></p>
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum quo hic mollitia, distinctio necessitatibus blanditiis ad aperiam dignissimos debitis similique deleniti repudiandae dicta possimus sequi obcaecati. Rem, eos? Minima excepturi, quidem ad numquam cum fuga repudiandae culpa nostrum dolorum fugiat autem cupiditate rerum facilis debitis reprehenderit similique voluptatum adipisci odio illo ipsam iusto vel! Quam in natus fugit soluta perferendis molestias voluptatibus ad labore vitae sit. Praesentium itaque facere hic libero omnis. Reprehenderit esse maiores, saepe quis fugiat, quod porro error voluptatem iusto mollitia libero! Voluptatibus, autem rem distinctio ullam culpa quia delectus, suscipit iste, maiores impedit officiis ducimus.</p>
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
                <form className="mt-4">
                  <input type="text" className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-brand placeholder:text-sm" placeholder="Be the first one to comment" />
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
      </div>
    </div>
  );
};

export default Community;