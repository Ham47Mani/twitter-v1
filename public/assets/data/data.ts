// ======================= Start Nav Item Data =======================
interface navItem {
  icon: string;
  name: string;
  path: string;

}

export const navData: navItem[] = [
  {
    icon: "fa-solid fa-house",
    name: "home",
    path: "/"
  },
  {
    icon: "fa-solid fa-hashtag",
    name: "explore",
    path: "/explore"
  },
  {
    icon: "fa-solid fa-bell",
    name: "notification",
    path: "/notification"
  },
  {
    icon: "fa-solid fa-envelope",
    name: "messages",
    path: "/messages"
  },
  {
    icon: "fa-solid fa-bookmark",
    name: "bookmarks",
    path: "/bookmarks"
  },
  {
    icon: "fa-solid fa-list-ul",
    name: "lists",
    path: "/lists"
  },
  {
    icon: "fa-solid fa-user",
    name: "profile",
    path: "/profile"
  },
  {
    icon: "fa-solid fa-ellipsis",
    name: "more",
    path: "#"
  },
]

// ======================= End Nav Item Data =======================

// ======================= Start Tweet Box Icon =======================
interface TweetBoxIconType {
  icon: string;
  path: string;
}

export const TweetBoxIcon: TweetBoxIconType[] = [
  {
    icon: "fa-solid fa-image",
    path: "#"
  },
  {
    icon: "fa-brands fa-git",
    path: "#"
  },
  {
    icon: "fa-solid fa-square-poll-horizontal",
    path: "#"
  },
  {
    icon: "fa-solid fa-face-smile",
    path: "#"
  },
  {
    icon: "fa-solid fa-business-time",
    path: "#"
  },
]
// ======================= End Tweet Box Icon =======================

// ======================= Start Tweets Icon =======================
export const TweetIcons: string[] = [
  "fa-solid fa-comment",
  "fa-solid fa-retweet",
  "fa-solid fa-heart",
  "fa-solid fa-share"
]
// ======================= End Tweets Icon =======================

// ======================= Start Tweets =======================
interface TweetType {
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

export const tweets: TweetType[] = [
  {
    userPic: "/assets/imgs/avatars/user-4.jpg",
    name: "Ad Adem ",
    username: "@AdemAd",
    tweetDate: "07 Dec 2022",
    tweetPic: "/assets/imgs/tweets/tweet-2.jpg",
    tweetContent: `Use the engine of ChatGPT to reply to tweets. Chose your writing style and respond. This chrome extension is useful for anyone trying
      </br>
      <a class="text-blue-400" href="#">#Gpt #ChatGpt</a>`,
    tweetStat: {
      comment: "200 k",
      retweet: "150 k",
      heart: "1.2 M",
      share: "1 k"
    }
  },
]
// ======================= End Tweets =======================