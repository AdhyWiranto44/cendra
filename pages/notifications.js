import Script from "next/script";
import ExploreModal from "../components/exploreModal";
import Footer from "../components/footer";
import RightBar from "../components/rightBar";
import Searchbar from "../components/searchbar";
import Sidebar from "../components/sidebar";
import Trends from "../components/trends";
import TweetModal from "../components/tweetModal";
import Users from "../components/users";

export default function Notifications() {
  return (
    <div class="bg-slate-800 flex">
      <Sidebar />
      <div class="container-fluid h-screen overflow-y-auto w-full sm:w-10/12 lg:w-5/12">
        <div id="cendra-header" class="bg-slate-800 w-full items-center z-10 sticky top-0">
          <div id="cendra-title" class="p-4">
            <h1 class="font-bold text-xl">Notifications</h1>
          </div>
          <div id="tabs" class="flex">
            <a class="text-white font-semibold text-center py-4 w-full duration-300 bg-slate-800 hover:bg-slate-700 border-b-2 border-sky-500" href="#">All</a>
            <a class="text-white font-semibold text-center py-4 w-full duration-300 bg-slate-800 hover:bg-slate-700" href="#">Mentions</a>
          </div>
        </div>
        <div id="notification-list" class="">
          <div id="interaction" class="flex border-b border-slate-600 p-4 mb-2">
            <div class="w-14 flex flex-shrink-0 mr-3 justify-center">
              <i class="text-3xl fa-solid fa-heart text-red-500"></i>
            </div>
            <div id="tweet-info" class="w-10/12">
              <div id="user-photo-profile" class="w-10 flex-shrink-0 mr-3">
                <img class="rounded-full" src="img/mina.jpg" alt="mina" />
              </div>
              <div id="user-name" class="flex">
                <a href="#">
                  <p class="font-semibold hover:underline mr-1">Myoui Mina</p>
                </a>
                <p class="text-gray-400">liked your Tweet</p>
              </div>
              <div id="tweet-text" class="mt-4">
                <p class="text-gray-400">I made twitter clone now</p>
              </div>
            </div>
          </div>
          <div id="reply" class="flex border-b border-slate-600 p-4 mb-2">
            <div id="user-photo-profile" class="w-14 flex-shrink-0 mr-3">
              <img class="rounded-full" src="img/dahyun.jpg" alt="dahyun" />
            </div>
            <div id="tweet-info" class="w-10/12">
              <div id="user-name" class="flex">
                <a href="#">
                  <p class="font-semibold hover:underline mr-1">Kim Dahyun</p>
                </a>
                <p class="text-gray-400 mr-1">@dahyuneee</p>
                <p class="text-gray-400">· Jul 20</p>
              </div>
              <p class="text-gray-400">
                Replying to
                <a class="text-sky-500 hover:underline" href="#"> @momo</a>
              </p>
              <div id="tweet-text">
                <p>Nice.</p>
              </div>
              <div id="tweet-menu" class="flex-col mt-2">
                <button><i class="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">44</span></i></button>
                <button><i class="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                <button><i class="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
              </div>
            </div>
          </div>
          <div id="reply" class="flex border-b border-slate-600 p-4 mb-2">
            <div id="user-photo-profile" class="w-14 flex-shrink-0 mr-3">
              <img class="rounded-full" src="img/mina.jpg" alt="mina" />
            </div>
            <div id="tweet-info" class="w-10/12">
              <div id="user-name" class="flex">
                <a href="#">
                  <p class="font-semibold hover:underline mr-1">Myoui Mina</p>
                </a>
                <p class="text-gray-400 mr-1">@mina_sr_my</p>
                <p class="text-gray-400">· 2h</p>
              </div>
              <p class="text-gray-400">
                Replying to
                <a class="text-sky-500 hover:underline" href="#"> @momo</a>
              </p>
              <div id="tweet-text">
                <p>Lorem ipsum dolor.</p>
              </div>
              <div id="tweet-menu" class="flex-col mt-2">
                <button><i class="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">44</span></i></button>
                <button><i class="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                <button><i class="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
              </div>
            </div>
          </div>
          <div id="interaction" class="flex border-b border-slate-600 p-4 mb-2">
            <div class="w-14 flex flex-shrink-0 mr-3 justify-center">
              <i class="text-3xl fa-solid fa-heart text-red-500"></i>
            </div>
            <div id="tweet-info" class="w-10/12">
              <div id="user-photo-profile" class="w-10 flex-shrink-0 mr-3">
                <img class="rounded-full" src="img/mina.jpg" alt="mina" />
              </div>
              <div id="user-name" class="flex">
                <a href="#">
                  <p class="font-semibold hover:underline mr-1">Myoui Mina</p>
                </a>
                <p class="text-gray-400">liked your Tweet</p>
              </div>
              <div id="tweet-text" class="mt-4">
                <p class="text-gray-400">I made twitter clone now</p>
              </div>
            </div>
          </div>
          <div id="reply" class="flex border-b border-slate-600 p-4 mb-2">
            <div id="user-photo-profile" class="w-14 flex-shrink-0 mr-3">
              <img class="rounded-full" src="img/dahyun.jpg" alt="dahyun" />
            </div>
            <div id="tweet-info" class="w-10/12">
              <div id="user-name" class="flex">
                <a href="#">
                  <p class="font-semibold hover:underline mr-1">Kim Dahyun</p>
                </a>
                <p class="text-gray-400 mr-1">@dahyuneee</p>
                <p class="text-gray-400">· Jul 20</p>
              </div>
              <p class="text-gray-400">
                Replying to
                <a class="text-sky-500 hover:underline" href="#"> @momo</a>
              </p>
              <div id="tweet-text">
                <p>Nice.</p>
              </div>
              <div id="tweet-menu" class="flex-col mt-2">
                <button><i class="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">44</span></i></button>
                <button><i class="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                <button><i class="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
              </div>
            </div>
          </div>
          <div id="reply" class="flex border-b border-slate-600 p-4 mb-2">
            <div id="user-photo-profile" class="w-14 flex-shrink-0 mr-3">
              <img class="rounded-full" src="img/mina.jpg" alt="mina" />
            </div>
            <div id="tweet-info" class="w-10/12">
              <div id="user-name" class="flex">
                <a href="#">
                  <p class="font-semibold hover:underline mr-1">Myoui Mina</p>
                </a>
                <p class="text-gray-400 mr-1">@mina_sr_my</p>
                <p class="text-gray-400">· 2h</p>
              </div>
              <p class="text-gray-400">
                Replying to
                <a class="text-sky-500 hover:underline" href="#"> @momo</a>
              </p>
              <div id="tweet-text">
                <p>Lorem ipsum dolor.</p>
              </div>
              <div id="tweet-menu" class="flex-col mt-2">
                <button><i class="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">44</span></i></button>
                <button><i class="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                <button><i class="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
              </div>
            </div>
          </div>
          <div id="interaction" class="flex border-b border-slate-600 p-4 mb-2">
            <div class="w-14 flex flex-shrink-0 mr-3 justify-center">
              <i class="text-3xl fa-solid fa-heart text-red-500"></i>
            </div>
            <div id="tweet-info" class="w-10/12">
              <div id="user-photo-profile" class="w-10 flex-shrink-0 mr-3">
                <img class="rounded-full" src="img/mina.jpg" alt="mina" />
              </div>
              <div id="user-name" class="flex">
                <a href="#">
                  <p class="font-semibold hover:underline mr-1">Myoui Mina</p>
                </a>
                <p class="text-gray-400">liked your Tweet</p>
              </div>
              <div id="tweet-text" class="mt-4">
                <p class="text-gray-400">I made twitter clone now</p>
              </div>
            </div>
          </div>
          <div id="reply" class="flex border-b border-slate-600 p-4 mb-2">
            <div id="user-photo-profile" class="w-14 flex-shrink-0 mr-3">
              <img class="rounded-full" src="img/dahyun.jpg" alt="dahyun" />
            </div>
            <div id="tweet-info" class="w-10/12">
              <div id="user-name" class="flex">
                <a href="#">
                  <p class="font-semibold hover:underline mr-1">Kim Dahyun</p>
                </a>
                <p class="text-gray-400 mr-1">@dahyuneee</p>
                <p class="text-gray-400">· Jul 20</p>
              </div>
              <p class="text-gray-400">
                Replying to
                <a class="text-sky-500 hover:underline" href="#"> @momo</a>
              </p>
              <div id="tweet-text">
                <p>Nice.</p>
              </div>
              <div id="tweet-menu" class="flex-col mt-2">
                <button><i class="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">44</span></i></button>
                <button><i class="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                <button><i class="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
              </div>
            </div>
          </div>
          <div id="reply" class="flex border-b border-slate-600 p-4 mb-2">
            <div id="user-photo-profile" class="w-14 flex-shrink-0 mr-3">
              <img class="rounded-full" src="img/mina.jpg" alt="mina" />
            </div>
            <div id="tweet-info" class="w-10/12">
              <div id="user-name" class="flex">
                <a href="#">
                  <p class="font-semibold hover:underline mr-1">Myoui Mina</p>
                </a>
                <p class="text-gray-400 mr-1">@mina_sr_my</p>
                <p class="text-gray-400">· 2h</p>
              </div>
              <p class="text-gray-400">
                Replying to
                <a class="text-sky-500 hover:underline" href="#"> @momo</a>
              </p>
              <div id="tweet-text">
                <p>Lorem ipsum dolor.</p>
              </div>
              <div id="tweet-menu" class="flex-col mt-2">
                <button><i class="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">44</span></i></button>
                <button><i class="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span class="font-sans font-normal pl-4">456</span></i></button>
                <button><i class="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                <button><i class="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
              </div>
            </div>
          </div>
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
      <TweetModal />
      {/* <!-- End of Tweet Modal --> */}

      {/* <!-- Explore Modal --> */}
      <ExploreModal />
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