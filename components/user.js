export default function User(props) {
  return (
    <a href={`/follow/${props.user.username}`} id="follow-item" className="flex items-center px-4 py-2 duration-300 hover:bg-slate-600">
      <div id="user-photo-profile" className="w-14 flex-shrink-0 mr-3">
        <img className="rounded-full" src={props.user.img} alt={props.user.fullname} />
      </div>
      <div className="user-name">
        <p className="font-bold">{props.user.fullname}</p>
        <small className="block text-zinc-400">@{props.user.username}</small>
      </div>
      <div id="follow-button" className="ml-auto">
        <button className="block font-bold duration-300 bg-white hover:bg-zinc-200 active:bg-zinc-300 px-4 py-1 rounded-full" type="button">Follow</button>
      </div>
    </a>
  )
}