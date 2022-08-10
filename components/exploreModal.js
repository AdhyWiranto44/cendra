export default function ExploreModal() {
  return (
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
                <button className="block font-bold duration-300 bg-white hover:bg-zinc-100 active:bg-zinc-200 px-4 py-1 rounded-full" type="button">Follow</button>
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
                <button className="block font-bold duration-300 bg-white hover:bg-zinc-100 active:bg-zinc-200 px-4 py-1 rounded-full" type="button">Follow</button>
              </div>
            </a>
            <a href="#" className="flex items-center px-4 py-2 duration-300 hover:bg-slate-600 rounded-b-xl text-sky-500">
              Show more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}