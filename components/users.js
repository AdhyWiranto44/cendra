import User from "./user"

export default function Users() {
  const users = [
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

  const renderUser = () => {
    return (
      users.map((user, idx) => {
        return (
          <User
            key={idx}
            user={user}
          />
        )
      })
    )
  }

  return (
    <div className="bg-slate-700 pt-4 mx-6 rounded-xl mb-4">
      <h2 className="text-xl font-bold mb-4 px-4">Who to follow</h2>
      <div id="follow-list">
        {renderUser()}
        <a href="/connect" className="flex items-center px-4 py-2 duration-300 hover:bg-slate-600 rounded-b-xl text-sky-500">
          Show more
        </a>
      </div>
    </div>
  )
}