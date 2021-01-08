import React, { useEffect } from "react";
import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Login from "./Components/Login";
import SideBar from "./Components/SideBar";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "./Firebase/Firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import Wiget from "./Components/Wiget";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const gettingData = () => {
      return auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          // Login In
          dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoURL: userAuth.profilePic,
            })
          );
        } else {
          // User is Logged Out
          try {
            dispatch(logout());
          } catch (error) {
            alert(error);
          }
        }
      });
    };
    gettingData();
  }, []);

  return (
    <div className="App">
      {/* header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Wiget />
        </div>
      )}
      {/* App Body */}
      {/* side Bar */}
      {/* Feed */}
      {/* Widget */}
    </div>
  );
}

export default App;
