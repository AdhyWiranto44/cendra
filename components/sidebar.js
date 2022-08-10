import NavLink from "./navLink";
import PhotoProfile from "./photoProfile";

export default function Sidebar() {
  const menus = [
    {
      'id': 'home',
      'title': 'Home',
      'icon': 'fa-solid fa-house',
      'url': '/'
    },
    {
      'id': 'explore',
      'title': 'Explore',
      'icon': 'fa-solid fa-magnifying-glass',
      'url': '#'
    },
    {
      'id': 'notifications',
      'title': 'Notifications',
      'icon': 'fa-solid fa-bell',
      'url': '/notifications'
    },
    {
      'id': 'messages',
      'title': 'Messages',
      'icon': 'fa-solid fa-envelope',
      'url': '/messages'
    },
    {
      'id': 'bookmarks',
      'title': 'Bookmarks',
      'icon': 'fa-solid fa-bookmark',
      'url': '/bookmarks'
    },
    {
      'id': 'lists',
      'title': 'Lists',
      'icon': 'fa-solid fa-list',
      'url': '/lists'
    },
    {
      'id': 'profile',
      'title': 'Profile',
      'icon': 'fa-solid fa-user-large',
      'url': '/profile'
    },
    {
      'id': 'more',
      'title': 'More',
      'icon': 'fa-solid fa-ellipsis',
      'url': '#'
    },
  ];

  const renderNavLink = () => {
    return (
      menus.map((menu, idx) => {
        return <NavLink key={idx} menu={menu} />
      })
    );
  }

  return (
    <div className="container-fluid w-2/12 lg:w-3/12">
      <div id="cendra-sidebar" className="pt-4 border-r h-screen border-slate-600 overflow-y-auto flex-col justify-start">
        <a className="text-2xl mx-4 lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="Main">
          <i className="fa-solid fa-feather-pointed"></i>
        </a>
        {renderNavLink()}
        <button id="tweet-sidebar-button" className="text-2xl mx-auto lg:mx-14 flex items-baseline justify-center lg:justify-start mb-1 duration-300 p-3 bg-sky-500 rounded-full hover:bg-sky-600" href="#" title="Tweet">
          <i className="fa-solid fa-pencil mx-auto"></i>
        </button>
        <a className="mx-auto lg:mx-14 flex mb-1 duration-300 p-3 hover:bg-slate-700 hover:rounded-full" href="#" title="More">
          <div id="user-photo-profile" className="w-14 mx-auto lg:mx-0 lg:mr-3">
            <PhotoProfile
              src={`img/momo.jpg`}
              alt={`Hirai Momo`}
            />
          </div>
          <div className="flex-col">
            <p className="font-semibold hidden lg:block">Hirai Momo</p>
            <p className="hidden lg:block text-gray-400 mr-1">@momo</p>
          </div>
        </a>
      </div>
    </div>
  );
}