import Script from 'next/script'
import ExploreModal from '../components/exploreModal';
import Sidebar from '../components/sidebar';
import TweetModal from '../components/tweetModal';


export default function Connect() {
  return (
    <div className="bg-slate-800 flex">
      <Sidebar />
      <div className="container-fluid h-screen overflow-y-auto w-full sm:w-10/12 lg:w-5/12">
        <div id="cendra-header" className="flex py-2 bg-slate-800 w-full items-center z-10 sticky top-0">
          <a href="#" className="ml-2 mr-8 p-2 duration-300 hover:bg-slate-700 rounded-full">
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <div id="cendra-title">
            <h1 className="font-bold text-xl">Connect</h1>
          </div>
        </div>
        <div id="connect-list" className="rounded-xl mb-4">
          <h2 className="text-xl font-bold mb-4 px-4">Suggested for you</h2>
          <div id="follow-list">
            <a href="#" id="follow-item" className="flex items-center px-4 py-2">
              <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
                <img className="rounded-full" src="img/tzuyu.jpg" alt="mina" />
              </div>
              <div className="user-name">
                <p className="font-bold">Chou Tzuyu</p>
                <small className="block text-zinc-400">@thinkaboutzu</small>
                <p className="text-white">hello wonseu~</p>
              </div>
              <div id="follow-button" className="ml-auto">
                <button className="block font-bold duration-300 bg-white hover:bg-zinc-200 active:bg-zinc-300 px-4 py-1 rounded-full" type="button">Follow</button>
              </div>
            </a>
            <a href="#" id="trend-item" className="flex items-center px-4 py-2">
              <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
                <img className="rounded-full" src="img/nayeon.jpg" alt="mina" />
              </div>
              <div className="user-name">
                <p className="font-bold">Im Nayeon</p>
                <small className="block text-zinc-400">@nayeonyny</small>
                <p className="text-white">kuku kakang?!</p>
              </div>
              <div id="follow-button" className="ml-auto">
                <button className="block font-bold duration-300 bg-white hover:bg-zinc-200 active:bg-zinc-300 px-4 py-1 rounded-full" type="button">Follow</button>
              </div>
            </a>
            <a href="#" id="follow-item" className="flex items-center px-4 py-2">
              <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
                <img className="rounded-full" src="img/mina.jpg" alt="mina" />
              </div>
              <div className="user-name">
                <p className="font-bold">Myoui Mina</p>
                <small className="block text-zinc-400">@mina_sr_my</small>
                <p className="text-white">🐧</p>
              </div>
              <div id="follow-button" className="ml-auto">
                <button className="block font-bold duration-300 bg-white hover:bg-zinc-200 active:bg-zinc-300 px-4 py-1 rounded-full" type="button">Follow</button>
              </div>
            </a>
            <a href="#" id="trend-item" className="flex items-center px-4 py-2">
              <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
                <img className="rounded-full" src="img/dahyun.jpg" alt="mina" />
              </div>
              <div className="user-name">
                <p className="font-bold">Kim Dahyun</p>
                <small className="block text-zinc-400">@dahhyunnee</small>
                <p className="text-white">dubu dubu~</p>
              </div>
              <div id="follow-button" className="ml-auto">
                <button className="block font-bold duration-300 bg-white hover:bg-zinc-200 active:bg-zinc-300 px-4 py-1 rounded-full" type="button">Follow</button>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid hidden lg:block lg:w-4/12">
        <div id="cendra-trends" className="pt-4 border-l h-screen border-slate-600 overflow-y-auto flex-col">
          <a className="mx-6 flex items-baseline justify-center lg:justify-start mb-4 duration-300 p-4 bg-slate-700 rounded-full" href="#" title="Main">
            <i className="fa-solid fa-search text-zinc-400 pr-4"></i>
            <input id="search-button" type="text" className="bg-slate-700 w-full focus:outline-none text-white" placeholder="Search Twitter" />
          </a>
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
          <div id="other-link" className="mx-6 mb-4 text-zinc-400 text-sm">
            <a className="hover:underline mr-3 mb-1 inline-block" href="#">Terms of Service</a>
            <a className="hover:underline mr-3 mb-1 inline-block" href="#">Privacy Policy</a>
            <a className="hover:underline mr-3 mb-1 inline-block" href="#">Cookie Policy</a>
            <a className="hover:underline mr-3 mb-1 inline-block" href="#">Accessibility</a>
            <a className="hover:underline mr-3 mb-1 inline-block" href="#">Ads Info</a>
            <a className="hover:underline mr-3 mb-1 inline-block" href="#">More</a>
            <a className="hover:underline mr-3 mb-1 inline-block" href="#">&copy; Cendra, Inc</a>
          </div>
        </div>
      </div>

      {/* <!-- Tweet Modal --> */}
      <TweetModal />
      {/* <!-- End of Tweet Modal --> */}

      {/* <!-- Explore Modal --> */}
      <ExploreModal />
      {/* <!-- End of Explore Modal --> */}

      <Script id='myscript'>
        {`const tweetModal = document.getElementById('tweet-modal');`}
        {`const tweetModalExit = document.getElementById('tweet-modal-exit');`}
        {`const tweetSidebarButton = document.getElementById('tweet-sidebar-button');`}
        {`const tweetInput = document.getElementById('tweet-component').getElementsByTagName('textarea')[0];`}
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

        {`tweetInput.addEventListener('focus', () => {
          tweetInput.classList.add('border-b-2');
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
  );
}