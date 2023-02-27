import "./App.css";
import Login from "./components/login";
import Logout from "./components/logout";
import Popup from "./components/PopUp";
import PopUpForLogOut from "./components/PopUpForLogOut";
import { useSelector } from "react-redux";
import { selectPopUp, selectPopUpForLogOut,  selectUser } from "./store/store";

function App() {
  const user = useSelector(selectUser);
  const popup = useSelector(selectPopUp);
  const popupforlogout=useSelector(selectPopUpForLogOut)

  return (
    <div>``
      {user ? <Logout /> : <Login />}
      {popup && <Popup></Popup>}
   
      {popupforlogout && <PopUpForLogOut></PopUpForLogOut>}
      
      
      
    </div>
  );
}

export default App;
