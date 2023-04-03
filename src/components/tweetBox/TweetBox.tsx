import Image from 'next/image';

import "./tweetBox.scss";
import { TweetBoxIcon } from '../../../public/assets/data/data';
import Link from 'next/link';

type TweetBoxProps = {}

const TweetBox = (props: TweetBoxProps) => {
  return (
    <div className='border pb-3 border-gray-200 dark:border-dim-200'>
      <div className='flex p-4'>
        <Image 
          className='w-10 h-10 rounded-full'
          src="/assets/imgs/profile.jpg" alt='profile Pic' width={40} height={40}
        />
        <textarea className='area-tweet' placeholder={`What's happening`}></textarea>
      </div>
      <div className='flex p-4 w-full'>
        {
          TweetBoxIcon.map((icon, i) => (
            <Link className='text-blue-400 rounded-full p-2 hover:text-blue-500' href={icon.path} key={i}>
              <i className={`${icon.icon} text-lg`}></i>
            </Link>
          ))
        }
        <button className='tweet-btn'>Tweet</button>
      </div>
    </div>
  )
}

export default TweetBox