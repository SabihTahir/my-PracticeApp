import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);
    const userName = loggedInUser ? loggedInUser.userName : '';
    console.log(userName);

    const logOutHandle = () => {
        dispatch(logoutUser());
        console.log("Logout Successfully");
        navigate("/");
        localStorage.removeItem("loggedInUser");
    }

    return (
        <>
            <h1>Home</h1>
            <h2>{userName}</h2>
            <button onClick={logOutHandle}>Logout</button>
        </>
    );
};

export default Home;
