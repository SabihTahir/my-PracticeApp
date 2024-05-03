import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/AuthPages/LoginPage"
import SignUpPage from "./pages/AuthPages/SignUpPage"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar"


const App = () => {
  
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
    </>
  )
}

export default App