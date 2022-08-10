export default function NavLink(props) {
  return (
    <a id={props.menu.id} className="text-2xl mx-4 lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href={props.menu.url} title={props.menu.title}>
      <i className={`${props.menu.icon} lg:pr-4`}></i>
      <h2 className="text-xl hidden lg:block">{props.menu.title}</h2>
    </a>
  );
}