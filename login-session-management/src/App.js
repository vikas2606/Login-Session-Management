import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Logout from "./components/logout";
import Clock from "./components/Clock";
import Popup from "./components/PopUp";
import PopUpForLogOut from "./components/PopUpForLogOut";
import { useSelector } from "react-redux";
import { selectPopUp, selectPopUpForLogOut, selectTime, selectUser } from "./store/store";

function App() {
  const user = useSelector(selectUser);
  const time = useSelector(selectTime);
  const popup = useSelector(selectPopUp);
  const popupforlogout=useSelector(selectPopUpForLogOut)

  return (
    <div>
      {user ? <Logout /> : <Login />}
      {popup && <Popup></Popup>}
   
      {popupforlogout && <PopUpForLogOut></PopUpForLogOut>}
      
      
      
    </div>
  );
}

export default App;
