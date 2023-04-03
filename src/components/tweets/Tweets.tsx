import { Fragment } from "react";
import Image from "next/image";
import { TweetIcons, tweets } from "../../../public/assets/data/data";

// ======================== Start Tweets ========================
type Props = {}

const Tweets = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-4">
      {
        tweets.map((tweet, i) => (
          <Tweet tweet={tweet} key={i}/>
        ))
      }
    </div>
  )
}

export default Tweets
// ======================== End Tweets ========================

// ======================== Start Tweet ========================
type TweetProps = {
  tweet: {
    userPic: string;
    name: string;
    username: string;
    tweetDate: string;
    tweetPic: string;
    tweetContent: string;
    tweetStat: {
      comment: string,
      retweet: string,
      heart: string,
      share: string
    }
  }
}

const Tweet = ({tweet}: TweetProps) => {
  const {userPic, name, username, tweetDate, tweetContent, tweetPic, tweetStat} = tweet;
  const tweetIconHoverColor: string[] = [
    "text-blue-400", "text-green-400", "text-red-400", "text-blue-400"
  ];

  return (
    <div className="border border-gray-200 dark:border-dim-200 cursor-pointer pb-4">
      <div className="flex p-4 pb-0">
        <Image className="w-9 h-9 rounded-full" src={userPic} alt="picture" width={36} height={36}/>
        <p className="ml-2 flex items-center flex-shrink-0 font-medium text-gray-800 dark:text-white">
          {name}
          <span className="ml-1 text-sm leading-5 text-gray-400">
            {username} - {tweetDate}
          </span>
        </p>
      </div>
      <div className="pl-8 xl:pl-16 pr-4">
        <p className="w-auto font-medium text-gray-800 dark:text-white" 
            dangerouslySetInnerHTML={{__html: tweetContent}}
        ></p>
        <Image className="rounded-2xl border border-gray-600 my-3 mr-2 w-full" 
          src={tweetPic} alt="name" width={1000}
          height={500}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="flex items-center justify-between w-full">
          {
            TweetIcons.map((icon, i) => (
              <div className="flex items-center text-gray-400 dark:text-white text-xs" key={i}>
                <i className={`${icon} mr-2 text-lg hover:${tweetIconHoverColor[i]}`}></i>
                {Object.values(tweetStat)[i]}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
// ======================== End Tweet ========================