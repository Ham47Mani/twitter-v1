import Image from 'next/image';

type Props = {}

const UserIcon = (props: Props) => {
  return (
    <div className='w-14 xl:w-full mx-auto mt-auto flex items-center justify-between mb-2 p-2 rounded-full cursor-pointer'>
      <Image className='w-10 h-10 rounded-full' src="/assets/imgs/profile.jpg" alt="Profile Image" width={40} height={40}/>
      <div className='hidden xl:flex xl:flex-col'>
        <h4 className='text-gray-800 dark:text-white font-bold text-sm'>B. HamMani</h4>
        <p className='text-gray-400 text-sm'>@Ham47mani</p>
      </div>
      <i className="fa-solid fa-chevron-down text-xs hidden xl:flex items-center xl:ml-4  text-gray-800 dark:text-white"></i>
    </div>
  )
}

export default UserIcon