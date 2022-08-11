import Script from 'next/script'
import ExploreModal from '../components/exploreModal';
import Footer from '../components/footer';
import RightBar from '../components/rightBar';
import Searchbar from '../components/searchbar';
import Sidebar from '../components/sidebar';
import Trends from '../components/trends';
import TweetModal from '../components/tweetModal';
import User from '../components/user';


export default function Connect() {
  const users = [
    {
      'fullname': 'Chou Tzuyu',
      'username': 'thinkaboutzu',
      'img': 'img/tzuyu.jpg',
    },
    {
      'fullname': 'Im Nayeon',
      'username': 'nayeonnyny',
      'img': 'img/nayeon.jpg',
    },
    {
      'fullname': 'Myoui Mina',
      'username': 'mina_sr_my',
      'img': 'img/mina.jpg',
    },
    {
      'fullname': 'Kim Dahyun',
      'username': 'dahyunee',
      'img': 'img/dahyun.jpg',
    },
  ]

  const renderUsers = () => {
    return (
      users.map((user, idx) => {
        return (
          <User
            key={idx}
            user={user}
          />
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
            <h1 className="font-bold text-xl">Connect</h1>
          </div>
        </div>
        <div id="connect-list" className="rounded-xl mb-4">
          <h2 className="text-xl font-bold mb-4 px-4">Suggested for you</h2>
          <div id="follow-list">
            {renderUsers()}
          </div>
        </div>
      </div>

      <RightBar
        contents={
          <>
            <Searchbar />
            <Trends />
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
  );
}