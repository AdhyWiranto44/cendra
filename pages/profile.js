import Script from "next/script";
import Footer from "../components/footer";
import RightBar from "../components/rightBar";
import Searchbar from "../components/searchbar";
import Sidebar from "../components/sidebar";
import Trends from "../components/trends";
import Users from "../components/users";

export default function Profile() {
  const tweets = [
    {
      'time': 'Just now',
      'tweet': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit..',
      'comments_count': 45,
      'retweets_count': 45,
      'likes_count': 45,
    },
    {
      'time': 'Just now',
      'tweet': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit..',
      'comments_count': 45,
      'retweets_count': 45,
      'likes_count': 45,
    },
    {
      'time': 'Just now',
      'tweet': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit..',
      'comments_count': 45,
      'retweets_count': 45,
      'likes_count': 45,
    },
  ]

  const renderTweets = () => {
    return (
      tweets.map((tweet, idx) => {
        return (
          <>
            <div id="tweet-item" className="flex border-b border-slate-600 p-4 mb-2">
              <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
                <img className="rounded-full" src="img/momo.jpg" alt="momo" />
              </div>
              <div id="tweet-info" className="w-10/12">
                <div id="user-name" className="flex">
                  <a href="#">
                    <p className="font-semibold hover:underline mr-1">Hirai Momo</p>
                  </a>
                  <p className="text-gray-400 mr-1">@momo</p>
                  <p className="text-gray-400">· {tweet.time}</p>
                </div>
                <div id="tweet-text">
                  <p>{tweet.tweet}</p>
                </div>
                <div id="tweet-menu" className="flex-col mt-2">
                  <button><i className="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">{tweet.comments_count}</span></i></button>
                  <button><i className="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">{tweet.retweets_count}</span></i></button>
                  <button><i className="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">{tweet.likes_count}</span></i></button>
                  <button><i className="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                  <button><i className="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                </div>
              </div>
            </div>
          </>
        )
      })
    )
  }

  return (
    <div className="bg-slate-800 flex">
      <Sidebar />
      <div className="container-fluid h-screen overflow-y-auto w-full sm:w-10/12 lg:w-5/12">
        <div id="cendra-header" className="flex py-2 bg-slate-800 w-full items-center z-10 sticky top-0">
          <a href="#" className="ml-2 mr-8 p-2 duration-300 hover:bg-slate-700 rounded-full">
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <div id="cendra-title">
            <h1 className="font-bold text-xl">Hirai Momo</h1>
            <p className="text-sm text-gray-400 mr-1">123 Tweets</p>
          </div>
        </div>
        <div id="cendra-user-profile" className="flex-col border-b border-slate-600">
          <div id="user-background">
            <img className="w-screen h-52" src="img/background.jpg" alt="User Background" />
          </div>
          <div id="user-photo-profile" className="w-32 flex-shrink-0 mx-4 -mt-16">
            <img className="rounded-full relative border-4 border-slate-800" src="img/momo.jpg" alt="momo" />
          </div>
          <div className="flex-col m-4">
            <p className="font-bold text-xl">Hirai Momo</p>
            <p className="text-gray-400 mr-1">@momo</p>
            <p className="my-3">Born to be idol :3</p>
          </div>
          <div id="user-follow-info" className="flex m-4">
            <p className="text-gray-400 mr-4"><span className="text-white font-bold">50</span> Following</p>
            <p className="text-gray-400"><span className="text-white font-bold">1,023</span> Followers</p>
          </div>
        </div>
        <div id="tweet-list" className="">
          {renderTweets()}
        </div>
      </div>

      <RightBar
        contents={
          <>
            <Searchbar />
            <Trends />
            <Users />
            <Footer />
          </>
        }
      />

      {/* <!-- Tweet Modal --> */}
      <div id="tweet-modal" className="bg-black bg-opacity-70 w-full h-full absolute z-20 hidden">
        <div className="ml-4 mt-4">
          <button id="tweet-modal-exit" className="duration-300 p-3 rounded-full hover:bg-slate-700" title="Close">
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
        <div className="border border-slate-600 p-4 rounded-md flex bg-slate-800 absolute left-2/4 -translate-x-2/4 mt-14 w-9/12 lg:w-5/12">
          <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
            <img className="rounded-full" src="img/momo.jpg" alt="momo" />
          </div>
          <form className="w-full">
            <textarea className="bg-slate-800 block w-full mb-4 text-white focus:outline-none border-sky-500" type="text" name="tweet" placeholder="What's happening?"></textarea>
            <button className="block bg-sky-500 duration-300 hover:bg-sky-600 px-4 py-2 rounded-full text-sky-50 font-semibold ml-auto" type="button">Tweet</button>
          </form>
        </div>
      </div>
      {/* <!-- End of Tweet Modal --> */}

      {/* <!-- Explore Modal --> */}
      <div id="explore-modal" className="bg-black bg-opacity-70 w-full h-full absolute z-20 hidden">
        <div className="ml-4 mt-4">
          <button id="explore-modal-exit" className="duration-300 p-3 rounded-full hover:bg-slate-700" title="Close">
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
        <div id="cendra-trends" className="pt-4 h-screen overflow-y-auto flex-col md:w-5/12 mx-auto">
          <div className="mx-6 flex items-baseline justify-center lg:justify-start mb-4 duration-300 p-4 bg-slate-700 rounded-full" title="Main">
            <i className="fa-solid fa-search text-zinc-400 pr-4"></i>
            <input id="search-button" type="text" className="bg-slate-700 w-full focus:outline-none text-white" placeholder="Search Twitter" />
          </div>
          <div className="bg-slate-700 pt-4 mx-6 mb-4 rounded-xl">
            <h2 className="text-xl font-bold mb-4 px-4">Your Trends</h2>
            <div id="trend-list">
              <a href="#" id="trend-item" className="block px-4 py-2 duration-300 hover:bg-slate-600">
                <small className="text-zinc-400">1 · Trending</small>
                <p className="font-bold">#NINEORNONE</p>
                <small className="text-zinc-400">180K Tweets</small>
              </a>
              <a href="#" id="trend-item" className="block px-4 py-2 duration-300 hover:bg-slate-600">
                <small className="text-zinc-400">2 · Trending</small>
                <p className="font-bold">#namjoon</p>
                <small className="text-zinc-400">180K Tweets</small>
              </a>
              <a href="#" id="trend-item" className="block px-4 py-2 duration-300 hover:bg-slate-600">
                <small className="text-zinc-400">3 · Trending</small>
                <p className="font-bold">#nayeon_pop</p>
                <small className="text-zinc-400">180K Tweets</small>
              </a>
              <a href="#" id="trend-item" className="block px-4 py-2 duration-300 hover:bg-slate-600">
                <small className="text-zinc-400">4 · Trending</small>
                <p className="font-bold">#inyourarea</p>
                <small className="text-zinc-400">180K Tweets</small>
              </a>
              <a href="#" className="flex items-center px-4 py-2 duration-300 hover:bg-slate-600 rounded-b-xl text-sky-500">
                Show more
              </a>
            </div>
          </div>
          <div className="bg-slate-700 pt-4 mx-6 rounded-xl mb-4">
            <h2 className="text-xl font-bold mb-4 px-4">Who to follow</h2>
            <div id="follow-list">
              <a href="#" id="follow-item" className="flex items-center px-4 py-2 duration-300 hover:bg-slate-600">
                <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
                  <img className="rounded-full" src="img/tzuyu.jpg" alt="mina" />
                </div>
                <div className="user-name">
                  <p className="font-bold">Chou Tzuyu</p>
                  <small className="block text-zinc-400">@thinkaboutzu</small>
                </div>
                <div id="follow-button" className="ml-auto">
                  <button className="block font-bold duration-300 bg-white hover:bg-zinc-200 active:bg-zinc-300 px-4 py-1 rounded-full" type="button">Follow</button>
                </div>
              </a>
              <a href="#" id="trend-item" className="flex items-center px-4 py-2 duration-300 hover:bg-slate-600">
                <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
                  <img className="rounded-full" src="img/nayeon.jpg" alt="mina" />
                </div>
                <div className="user-name">
                  <p className="font-bold">Im Nayeon</p>
                  <small className="block text-zinc-400">@nayeonyny</small>
                </div>
                <div id="follow-button" className="ml-auto">
                  <button className="block font-bold duration-300 bg-white hover:bg-zinc-200 active:bg-zinc-300 px-4 py-1 rounded-full" type="button">Follow</button>
                </div>
              </a>
              <a href="#" className="flex items-center px-4 py-2 duration-300 hover:bg-slate-600 rounded-b-xl text-sky-500">
                Show more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Explore Modal --> */}

      <Script id='myscript'>
        {`const tweetModal = document.getElementById('tweet-modal');`}
        {`const tweetModalExit = document.getElementById('tweet-modal-exit');`}
        {`const tweetSidebarButton = document.getElementById('tweet-sidebar-button');`}
        {`const tweetInputFloated = tweetModal.getElementsByTagName('textarea')[0];`}

        {`const exploreModal = document.getElementById('explore-modal');`}
        {`const exploreButton = document.getElementById('explore');`}
        {`const exploreModalExit = document.getElementById('explore-modal-exit');`}

        {`const searchButton = document.getElementById('search-button');`}

        {`tweetSidebarButton.addEventListener('click', () => {
          tweetModal.classList.remove('hidden');
        });`}

        {`tweetModalExit.addEventListener('click', () => {
          tweetModal.classList.add('hidden');
        });`}

        {`tweetInputFloated.addEventListener('focus', () => {
          tweetInputFloated.classList.add('border-b-2');
        });`}

        {`exploreButton.addEventListener('click', () => {
          if (window.innerWidth < 1024) {
          exploreModal.classList.remove('hidden');
          } else {
          searchButton.focus();
          }
        });`}

        {`exploreModalExit.addEventListener('click', () => {
          exploreModal.classList.add('hidden');
        });`}

      </Script>
    </div>
  )
}