export default function Login() {
  return (
    <div className="bg-slate-800 flex-col">
      <div className="container-fluid md:w-6/12 lg:w-4/12 mx-auto p-8">
        <i className="text-4xl fa-solid fa-feather-pointed mt-4"></i>
        <h1 className="font-bold text-4xl my-14">Happening<br />Now</h1>
        <h2 className="font-bold text-2xl">Sign In to Cendra</h2>
        <form action="" className="mx-">
          <input className="w-full bg-slate-800 border rounded-sm border-slate-700 p-4 focus:border-sky-500 text-white my-4" type="text" placeholder="username" />
          <input className="w-full bg-slate-800 border rounded-sm border-slate-700 p-4 focus:border-sky-500 text-white my-4" type="password" placeholder="password" />
          <button type="button" className="w-full duration-300 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 rounded-full my-4 p-4 text-white font-bold">Sign In</button>
        </form>
        <a href="#" className="block text-center w-full duration-300 border hover:bg-slate-600 active:bg-sky-700 rounded-full my-4 p-4 text-white">Forgot Password?</a>
        <p className="text-center">
          Don't have an account?
          <a href="register.html" className="text-sky-500"> Sign Up</a>
        </p>
      </div>
    </div>
  )
}