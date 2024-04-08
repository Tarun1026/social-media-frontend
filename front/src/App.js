import "./App.css";
import Login from "./components/Login";
import Signup from "./components/sign";
import Outer_nav from "./components/outer_nav";
import Home from "./components/home";
import Profile from "./components/profile/profile";
import UpdateProfile from "./components/profile/update";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./components/profile/updating";
import UploadPost from "./components/profile/uploadpost";


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
      path: "/profile/:username",
      element: (
        <>
          <div className="flex flex-row bg-black">

          <Home />
          <ProfilePage />


          </div>
        </>
      ),
    },
    {
      path: "/profile/post",
      element: (
        <>
          <div className="flex flex-row bg-slate-600">

          <Home />
          <UploadPost/>


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
            {/* <Detail /> */}
          </div>
        </>
      ),
    },
    // {
    //   path:"/post",
    //   element:(
    //     <>
    //     <UploadPost/>
    //     </>
    //   )
    // }
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <Home /> */}
    </>
  );
}

export default App;
