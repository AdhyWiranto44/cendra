import Trend from "./trend";

export default function Trends() {
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

  return (
    <div className="bg-slate-700 pt-4 mx-6 mb-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4 px-4">Your Trends</h2>
      <div id="trend-list">
        {renderTrends()}
        <a href="/explore" className="flex items-center px-4 py-2 duration-300 hover:bg-slate-600 rounded-b-xl text-sky-500">
          Show more
        </a>
      </div>
    </div>
  )
}