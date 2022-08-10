export default function Trend(props) {
  return (
    <a href='#' id="trend-item" className="block px-4 py-2 duration-300 hover:bg-slate-600">
      <small className="text-zinc-400">{props.trend.idx + 1} · Trending</small>
      <p className="font-bold">{props.trend.title}</p>
      <small className="text-zinc-400">{props.trend.desc}</small>
    </a>
  )
}