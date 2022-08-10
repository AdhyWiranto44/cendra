import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-slate-800 flex'>
      <div className="container-fluid w-2/12 lg:w-3/12">
        <div id="cendra-sidebar" className="pt-4 border-r h-screen border-slate-600 overflow-y-auto flex-col justify-start">
          <a className="text-2xl mx-4 lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="Main">
            <i className="fa-solid fa-feather-pointed"></i>
          </a>
          <a className="text-2xl mx-4 lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="Home">
            <i className="fa-solid fa-house lg:pr-4"></i>
            <h2 className="text-xl hidden lg:block">Home</h2>
          </a>
          <a id="explore" className="text-2xl mx-4 lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="Explore">
            <i className="fa-solid fa-magnifying-glass lg:pr-4"></i>
            <h2 className="text-xl hidden lg:block">Explore</h2>
          </a>
          <a className="text-2xl mx-4 lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="Notification">
            <i className="fa-solid fa-bell lg:pr-4"></i>
            <h2 className="text-xl hidden lg:block">Notifications</h2>
          </a>
          <a className="text-2xl mx-4 lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="Messages">
            <i className="fa-solid fa-envelope lg:pr-4"></i>
            <h2 className="text-xl hidden lg:block">Messages</h2>
          </a>
          <a className="text-2xl mx-4 lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="Bookmarks">
            <i className="fa-solid fa-bookmark lg:pr-4"></i>
            <h2 className="text-xl hidden lg:block">Bookmarks</h2>
          </a>
          <a className="text-2xl mx-4 lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="Lists">
            <i className="fa-solid fa-list lg:pr-4"></i>
            <h2 className="text-xl hidden lg:block">Lists</h2>
          </a>
          <a className="text-2xl mx-4 lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="Profile">
            <i className="fa-solid fa-user-large lg:pr-4"></i>
            <h2 className="text-xl hidden lg:block">Profile</h2>
          </a>
          <a className="text-2xl mx-4 lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="More">
            <i className="fa-solid fa-ellipsis lg:pr-4"></i>
            <h2 className="text-xl hidden lg:block">More</h2>
          </a>
          <button id="tweet-sidebar-button" className="text-2xl mx-auto lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 bg-sky-500 rounded-full hover:bg-sky-600" href="#" title="Tweet">
            <i className="fa-solid fa-pencil mx-auto"></i>
          </button>
          <a className="mx-auto lg:mx-14 flex mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="More">
            <div id="user-photo-profile" className="w-14 mx-auto lg:mx-0 lg:mr-3">
              <img className="rounded-full" src="img/momo.jpg" alt="momo" />
            </div>
            <div className="flex-col">
              <p className="font-semibold hidden lg:block">Hirai Momo</p>
              <p className="hidden lg:block text-gray-400 mr-1">@momo</p>
            </div>
          </a>
        </div>
      </div>
      <div className="container-fluid h-screen overflow-y-auto w-full sm:w-10/12 lg:w-5/12">
        <div id="cendra-header" className="bg-slate-800 w-full items-center z-10 sticky top-0">
          <div id="cendra-title" className="p-4">
            <h1 className="font-bold text-xl">Home</h1>
          </div>
        </div>
        <div className="border-b border-slate-600 p-4 flex">
          <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
            <img className="rounded-full" src="img/momo.jpg" alt="momo" />
          </div>
          <form id="tweet-component" className="w-full">
            <textarea className="bg-slate-800 block w-full mb-4 text-white focus:outline-none border-sky-500" type="text" name="tweet" placeholder="What's happening?"></textarea>
            <button className="block bg-sky-500 duration-300 hover:bg-sky-600 px-4 py-2 rounded-full text-sky-50 font-semibold ml-auto" type="button">Tweet</button>
          </form>
        </div>
        <div id="tweet-list" className="">
          <div id="tweet-item" className="flex border-b border-slate-600 p-4 mb-2">
            <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
              <img className="rounded-full" src="img/dahyun.jpg" alt="dahyun" />
            </div>
            <div id="tweet-info" className="w-10/12">
              <div id="user-name" className="flex">
                <a href="#">
                  <p className="font-semibold hover:underline mr-1">Kim Dahyun</p>
                </a>
                <p className="text-gray-400 mr-1">@dahyuneee</p>
                <p className="text-gray-400">· 1h</p>
              </div>
              <div id="tweet-text">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quidem debitis dolorem repudiandae a pariatur repellat. Vitae fugiat porro sed iusto, officiis id recusandae? Possimus nulla, veniam saepe eos perferendis excepturi expedita quidem totam animi a velit delectus cumque mollitia? Debitis deleniti ipsa incidunt, consequuntur iure itaque dolorem eum iste.</p>
              </div>
              <div id="tweet-menu" className="flex-col mt-2">
                <button><i className="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">44</span></i></button>
                <button><i className="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">456</span></i></button>
                <button><i className="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">456</span></i></button>
                <button><i className="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                <button><i className="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
              </div>
            </div>
          </div>
          <div id="tweet-item" className="flex border-b border-slate-600 p-4 mb-2">
            <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
              <img className="rounded-full" src="img/mina.jpg" alt="mina" />
            </div>
            <div id="tweet-info" className="w-10/12">
              <div id="user-name" className="flex">
                <a href="#">
                  <p className="font-semibold hover:underline mr-1">Myoui Mina</p>
                </a>
                <p className="text-gray-400 mr-1">@mina_sr_my</p>
                <p className="text-gray-400">· 2h</p>
              </div>
              <div id="tweet-text">
                <p>Lorem ipsum dolor.</p>
              </div>
              <div id="tweet-menu" className="flex-col mt-2">
                <button><i className="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">44</span></i></button>
                <button><i className="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">456</span></i></button>
                <button><i className="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">456</span></i></button>
                <button><i className="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                <button><i className="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
              </div>
            </div>
          </div>
          <div id="tweet-item" className="flex border-b border-slate-600 p-4 mb-2">
            <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
              <img className="rounded-full" src="img/dahyun.jpg" alt="dahyun" />
            </div>
            <div id="tweet-info" className="w-10/12">
              <div id="user-name" className="flex">
                <a href="#">
                  <p className="font-semibold hover:underline mr-1">Kim Dahyun</p>
                </a>
                <p className="text-gray-400 mr-1">@dahyuneee</p>
                <p className="text-gray-400">· 1h</p>
              </div>
              <div id="tweet-text">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quidem debitis dolorem repudiandae a pariatur repellat. Vitae fugiat porro sed iusto, officiis id recusandae? Possimus nulla, veniam saepe eos perferendis excepturi expedita quidem totam animi a velit delectus cumque mollitia? Debitis deleniti ipsa incidunt, consequuntur iure itaque dolorem eum iste.</p>
              </div>
              <div id="tweet-menu" className="flex-col mt-2">
                <button><i className="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">44</span></i></button>
                <button><i className="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">456</span></i></button>
                <button><i className="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">456</span></i></button>
                <button><i className="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                <button><i className="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
              </div>
            </div>
          </div>
          <div id="tweet-item" className="flex p-4 mb-2">
            <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
              <img className="rounded-full" src="img/mina.jpg" alt="mina" />
            </div>
            <div id="tweet-info" className="w-10/12">
              <div id="user-name" className="flex">
                <a href="#">
                  <p className="font-semibold hover:underline mr-1">Myoui Mina</p>
                </a>
                <p className="text-gray-400 mr-1">@mina_sr_my</p>
                <p className="text-gray-400">· 2h</p>
              </div>
              <div id="tweet-text">
                <p>Lorem ipsum dolor.</p>
              </div>
              <div id="tweet-menu" className="flex-col mt-2">
                <button><i className="fa-solid fa-comment text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">44</span></i></button>
                <button><i className="fa-solid fa-retweet text-gray-400 duration-300 hover:text-green-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">456</span></i></button>
                <button><i className="fa-solid fa-heart text-gray-400 duration-300 hover:text-red-500 p-3 rounded-full hover:bg-slate-700"><span className="font-sans font-normal pl-4">456</span></i></button>
                <button><i className="fa-solid fa-share-nodes text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
                <button><i className="fa-solid fa-trash-can text-gray-400 duration-300 hover:text-sky-500 p-3 rounded-full hover:bg-slate-700"></i></button>
              </div>
            </div>
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
              <a href="connect.html" className="flex items-center px-4 py-2 duration-300 hover:bg-slate-600 rounded-b-xl text-sky-500">
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
    </div>
  )
}
