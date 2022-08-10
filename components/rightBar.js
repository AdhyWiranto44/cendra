import Trend from "./trend";
import UserToFollow from "./userToFollow";

export default function RightBar() {
  const trends = [
    {
      'title': '#NINEORNONE',
      'desc': '180K Tweets',
    },
    {
      'title': '#namjoon',
      'desc': '180K Tweets',
    },
    {
      'title': '#nayeon_pop',
      'desc': '145K Tweets',
    },
    {
      'title': '#inyourarea',
      'desc': '1M Tweets',
    },
  ];

  const usersToFollow = [
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
  ]

  const renderTrends = () => {
    return (
      trends.map((trend, idx) => {
        return (
          <Trend
            key={idx}
            trend={{ ...trend, idx }}
          />
        )
      })
    )
  }

  const renderUserToFollow = () => {
    return (
      usersToFollow.map((user, idx) => {
        return (
          <UserToFollow
            key={idx}
            userToFollow={user}
          />
        )
      })
    )
  }

  return (
    <div className="container-fluid hidden lg:block lg:w-4/12">
      <div id="cendra-trends" className="pt-4 border-l h-screen border-slate-600 overflow-y-auto flex-col">
        <a className="mx-6 flex items-baseline justify-center lg:justify-start mb-4 duration-300 p-4 bg-slate-700 rounded-full" href="#" title="Main">
          <i className="fa-solid fa-search text-zinc-400 pr-4"></i>
          <input id="search-button" type="text" className="bg-slate-700 w-full focus:outline-none text-white" placeholder="Search Twitter" />
        </a>
        <div className="bg-slate-700 pt-4 mx-6 mb-4 rounded-xl">
          <h2 className="text-xl font-bold mb-4 px-4">Your Trends</h2>
          <div id="trend-list">
            {renderTrends()}
            <a href="#" className="flex items-center px-4 py-2 duration-300 hover:bg-slate-600 rounded-b-xl text-sky-500">
              Show more
            </a>
          </div>
        </div>
        <div className="bg-slate-700 pt-4 mx-6 rounded-xl mb-4">
          <h2 className="text-xl font-bold mb-4 px-4">Who to follow</h2>
          <div id="follow-list">
            {renderUserToFollow()}
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
  );
}