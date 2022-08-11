import Script from 'next/script'
import RightBar from '../components/rightBar'
import Searchbar from '../components/searchbar'
import Sidebar from '../components/sidebar'
import Trends from '../components/trends'
import TweetModal from '../components/tweetModal'
import Users from '../components/users'

export default function Explore() {
  return (
    <div class="bg-slate-800 flex">
      <Sidebar />
      <div class="container-fluid h-screen overflow-y-auto w-full sm:w-10/12 lg:w-5/12">
        <div id="cendra-trends" class="pt-4 border-l h-screen border-slate-600 overflow-y-auto flex-col">
          <Searchbar />
          <Trends />
        </div>
      </div>

      <RightBar
        contents={
          <>
            <Users />
          </>
        }
      />

      {/* <!-- Tweet Modal --> */}
      <TweetModal />
      {/* <!-- End of Tweet Modal --> */}

      <Script id='myscript'>
        {`const tweetModal = document.getElementById('tweet-modal');`}
        {`const tweetModalExit = document.getElementById('tweet-modal-exit');`}
        {`const tweetSidebarButton = document.getElementById('tweet-sidebar-button');`}
        {`const tweetInputFloated = tweetModal.getElementsByTagName('textarea')[0];`}

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

      </Script>
    </div>
  )
}