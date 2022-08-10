import PhotoProfile from "./photoProfile";

export default function Tweet(props) {
  return (
    <div id="tweet-item" className="flex border-b border-slate-600 p-4 mb-2">
      <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
        <PhotoProfile
          src={props.tweet.img}
          alt={props.tweet.fullname}
        />
      </div>
      <div id="tweet-info" className="w-10/12">
        <div id="user-name" className="flex">
          <a href="#">
            <p className="font-semibold hover:underline mr-1">{props.tweet.fullname}</p>
          </a>
          <p className="text-gray-400 mr-1">@{props.tweet.username}</p>
          <p className="text-gray-400">· {props.tweet.time}</p>
        </div>
        <div id="tweet-text">
          <p>{props.tweet.tweet}</p>
        </div>
        <div id="tweet-menu" className="flex-col mt-2">
          <button><i className="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">{props.tweet.comments_count}</span></i></button>
          <button><i className="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">{props.tweet.retweets_count}</span></i></button>
          <button><i className="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">{props.tweet.likes_count}</span></i></button>
          <button><i className="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
          <button><i className="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
        </div>
      </div>
    </div>
  );
}