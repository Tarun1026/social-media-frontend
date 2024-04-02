import "./App.css";
import Login from "./components/Login";
import Signup from "./components/sign";
import Outer_nav from "./components/outer_nav";
import Home from "./components/home";
import Profile from "./components/profile/profile";
import UpdateProfile from "./components/profile/update";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./components/profile/detail";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Outer_nav />
          <Login />
        </>
      ),
    },
    {
      path: "/user",
      element: (
        <>
          <div className="flex flex-row bg-slate-600">
            <Home />
            <Profile />
          </div>
        </>
      ),
    },
    {
      path: "/Signup",
      element: (
        <>
          <Signup />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <div className="flex flex-row bg-slate-600">
            <Home />
            <UpdateProfile />
            <Detail />
          </div>
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <Home /> */}
    </>
  );
}

export default App;
