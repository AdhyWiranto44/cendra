export default function TweetModal() {
  return (
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
  );
}