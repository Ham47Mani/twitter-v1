import React from 'react';

import "./asideBox.scss";
import AsidebarBox from '../asidebarBox/AsidebarBox';
import Image from 'next/image';

const hashtags : { name: string, numTweets: string }[] = [
  {
    name: "#Palestine",
    numTweets: "29.7 k"
  },
  {
    name: "#bitcoin",
    numTweets: "25 k"
  },
  {
    name: "#Gpt-4",
    numTweets: "26.9 k"
  },
]

const peopleFollow : { name: string, username: string, userPhoto: string }[] = [
  {name: "Hammani", username: "@ham47mani", userPhoto: "/assets/imgs/avatars/user-1.jpg"},
  {name: "Ag Coding", username: "@agcoding", userPhoto: "/assets/imgs/avatars/user-5.jpg"},
]

const AsideBar = () => {
  return (
    <aside className='hidden w-[30%] xl:block'>
      {/* ====== Search ====== */}
      <div className="search relative m-2">
        <i className="fa-solid fa-magnifying-glass search__icon"></i>
        <input className="search__input" type="text" placeholder="Search Twitter"/>
      </div>

      {/* ====== Hash Tags ====== */}
      <AsidebarBox title="what&apos;s happing">
        {
          hashtags.map((hashtag, i) => (
            <div className='asidebar-box__item' key={i}>
              <h4 className='font-bold text-gray-800 dark:text-white capitalize'>{hashtag.name}</h4>
              <p className="text-xs text-gray-400">{hashtag.numTweets}</p>
            </div>
          ))
        }
        <div className="text-blue-400 hover:text-blue-500 transition p-3 cursor-pointer">Show more</div>
      </AsidebarBox>
      <AsidebarBox title='Who to follow'>
        {
          peopleFollow.map((people, i) => (
            <div className='asidebar-box__item flex justify-between items-center' key={i}>
              <div className="flex">
                <Image className='w-10 h-10 rounded-full' 
                      src={people.userPhoto} alt={people.username} width={40} height={40}
                />
                <div className="ml-2 text-sm">
                  <h5 className="text-gray-900 dark:text-white font-bold">{people.name}</h5>
                  <p className="text-gray-400">{people.username}</p>
                </div>
              </div>
              <button className="text-sm font-bold text-blue-400 px-4 py-1 rounded-full border-2 
              border-blue-400 transition hover:bg-blue-400 hover:text-white">Follow</button>
            </div>
          ))
        }
        <div className='asidebar-box__item'>
          <div className="flex gap-x-4 animate-pulse">
            <div className="rounded-full bg-gray-400 h-12 w-12"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-gray-400 rounded w-5/6"></div>
              <div className="h-4 bg-gray-400 rounded w-3/4"></div>
              <div className="h-4 bg-gray-400 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </AsidebarBox>
    </aside>
  )
}

export default AsideBar;