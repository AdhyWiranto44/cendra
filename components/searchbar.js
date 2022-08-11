export default function Searchbar() {
  return (
    <div className="mx-6 flex items-baseline justify-center lg:justify-start mb-4 duration-300 p-4 bg-slate-700 rounded-full">
      <i className="fa-solid fa-search text-zinc-400 pr-4"></i>
      <input id="search-button" type="text" className="bg-slate-700 w-full focus:outline-none text-white" placeholder="Search Twitter" />
    </div>
  )
}