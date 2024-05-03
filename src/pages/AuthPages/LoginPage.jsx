/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Auth/AuthSlice";

const LoginPage = () => {
  const [nameEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  
  useEffect(() => {
    console.log("userData:", userData);
  }, [userData]);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = userData.find(
      (user) =>
        (user.email === nameEmail || user.userName === nameEmail) &&
        user.password === password
    );
    if (user) {
      console.log("Successfully Logged In");
      navigate("/home");
      dispatch(loginUser(user));
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    } else {
      console.log("Invalid email or password");
    }
  };

  return (
    <>
      <section className="h-screen flex items-center justify-center w-full">
        <main className="max-w-lg w-full mx-auto">
          <div className="w-full p-4 rounded-lg rounded-tr-[80px] shadow-xl border border-stone-600 bg-transparent">
            <form
              onSubmit={handleLogin}
              className="flex flex-col items-center gap-4 w-full"
            >
              <h1 className="text-2xl font-bold">Log In</h1>
              <div className="w-full">
                <label htmlFor="name-email" className="text-sm">
                  Username / Email
                </label>
                <input
                  type="text"
                  placeholder="Username / Email"
                  name="name-email"
                  id="name-email"
                  value={nameEmail}
                  required
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
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded-md border border-stone-600 bg-transparent outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-stone-500 to-white/30 hover:bg-gradient-to-l py-2 px-8 rounded-md"
              >
                Login
              </button>
            </form>
            <div className="w-full flex items-center justify-between">
              <p className="text-sm mt-4">Don't have an account?</p>
              <Link
                to="/signup"
                className="text-stone-500 ml-4 hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default LoginPage;
