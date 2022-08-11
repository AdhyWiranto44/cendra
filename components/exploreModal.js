import Trends from "./trends";
import Users from "./users";

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
        <Trends />
        <Users />
      </div>
    </div>
  );
}