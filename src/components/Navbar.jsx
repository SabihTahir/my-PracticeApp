import { useSelector } from "react-redux"

const Navbar = () => {
    const user = useSelector((state) => state.auth.loggedInUser)

  return (
    <>
        <section className={`${user ? "block" : "hidden"} shadow-md p-4 mb-4`}>
            <nav className="max-w-6xl mx-auto">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">My App</h1>
                    <h1 className="text-3xl font-bold">{user?.userName}</h1>
                </div>
            </nav>
        </section>
    </>
  )
}

export default Navbar