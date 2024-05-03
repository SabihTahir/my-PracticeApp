import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUserData } from "../../Redux/UserData/UserDataSlice"

const SignUpPage = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSignup = (e) => {
    e.preventDefault()
    dispatch(addUserData({ userName, email, password }))
    console.log({ userName, email, password });
    console.log("Data Send Successfully");
    navigate("/")
    setUserName("")
    setEmail("")
    setPassword("")
  }


  return (
    <>
    <section className="h-screen flex items-center justify-center w-full">
        <main className="max-w-lg w-full mx-auto">
          <div className="w-full p-4 rounded-lg rounded-tl-[80px] shadow-xl border border-stone-600 bg-transparent">
            <form onSubmit={handleSignup} className="flex flex-col items-center gap-4 w-full">
              <h1 className="text-2xl font-bold">SignUp</h1>
              <div className="w-full">
                <label htmlFor="name" className="text-sm">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  name="name"
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-2 rounded-md border border-stone-600 bg-transparent outline-none"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded-md border border-stone-600 bg-transparent outline-none"
                />
              </div>
              <div className="w-full">
                <label htmlFor="Password" className="text-sm">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="Password"
                  id="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded-md border border-stone-600 bg-transparent outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-stone-500 to-white/30 hover:bg-gradient-to-l py-2 px-8 rounded-md"
              >
                SignUp
              </button>
            </form>
            <div className="w-full flex items-center justify-between">
              <p className="text-sm mt-4">Have an account?</p>
              <Link
                to="/"
                className="text-stone-500 ml-4 hover:underline"
              >
                LogIn
              </Link>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default SignUpPage