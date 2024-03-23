
import {Link} from 'react-router-dom';
import ourMission from '../assets/images/our-mission.webp'
import ourVision from '../assets/images/our-vision.webp'
import {useGetVolunteersQuery} from '../redux/features/volunteers/volunteerApi';
import {TVolunteer} from '../types';

const AboutUs = () => {
  const {data, isError } = useGetVolunteersQuery(undefined)

  console.log(data)

  if (isError) {
    return <p className="p-5 font-bold text-brand text-center">Loading...</p>;
  }
  return (
    <>
      <header className="about-us-header-bg flex justify-center items-center h-[430px] sm:h-[380px] lg:[300px]">
        <div className="custom-container">
          <div className="w-full sm:w-[90%] md:w-[70%] mx-auto rounded-2xl p-5 sm:p-8 bg-black bg-opacity-55 text-center text-white">
            <h1 className="text-3xl sm:text-5xl font-bold text-white">About us</h1>
            <p className="text-sm sm:text-base">Welcome to our Post-Disaster Community Health and Medical Supply Chain Platform, where we are dedicated to enhancing resilience and response in the face of adversity. We understand the critical importance of access to medical supplies and healthcare services during times of crisis. Our platform is designed to bridge gaps, streamline processes, and foster collaboration among communities, healthcare providers, and relief organizations.</p>
          </div>
        </div>
      </header>
      <main className='custom-container'>
        <div className="my-6 lg:my-14 grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-14">
          <div>
            <div className='h-[250px] lg:h-[350px] w-full'>
              <img src={ourMission} alt="Our Mission" className='h-full w-full object-cover' />
            </div>
            <div className="pt-5">
              <h3 className="text-xl text-brand font-bold">Our mission</h3>
              <p>At Post-Disaster Community Health and Medical Supply Chain Platform, our mission is clear: to empower communities and healthcare professionals with the tools they need to effectively navigate post-disaster environments. We aim to ensure timely access to essential medical supplies, facilitate communication and coordination among stakeholders, and ultimately save lives during critical moments.</p>
            </div>
          </div>
          <div>
          <div className='h-[250px] lg:h-[350px] w-full'>
              <img src={ourVision} alt="Our Vision" className='h-full w-full object-cover' />
            </div>
            <div className="pt-5">
              <h3 className="text-xl text-brand font-bold">Our vision</h3>
              <p>Our team consists of dedicated professionals with diverse backgrounds in healthcare, technology, logistics, and disaster response. Together, we bring a wealth of knowledge and expertise to bear on the challenges facing post-disaster communities. With a shared commitment to our mission, we strive to deliver innovative solutions and drive positive change where it's needed most.</p>
            </div>
          </div>
        </div>
        <div className="my-8 sm:my-14 our-volunteers-bg p-5 sm:p-10 lg:p-20">
            <div className="bg-white w-full lg:max-w-[90%] xl:max-w-[70%] mx-auto rounded-2xl shadow-md p-8">
              <h2 className="text-center font-bold text-3xl">Meet our volunteers</h2>
              <div className="overflow-x-auto relative mt-8">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="w-[30%] py-3 px-6">Name</th>
                        <th scope="col" className="w-[30%] py-3 px-6">Phone</th>
                        <th scope="col" className="w-[40%] py-3 px-6">Address</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        data?.volunteers.map((volunteer : TVolunteer) => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">{volunteer?.name}</td>
                        <td className="py-4 px-6">{volunteer?.phone}</td>
                        <td className="py-4 px-6">{volunteer?.address}</td>
                    </tr>)
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
        <div className="my-14 mx-0 md:mx-20 text-center">
          <p>We invite you to join us in our mission to strengthen post-disaster community health and medical supply chains. Whether you're a healthcare provider, relief organization, or concerned individual, there's a role for you to play in building resilience and saving lives. Together, we can make a difference.</p>
          <div className="text-center mt-8">
            <Link to="/volunteer" className='btn-solid'>Join us as a volunteer</Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;