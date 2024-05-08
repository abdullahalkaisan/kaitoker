import {createBrowserRouter,} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import App from "../App";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import CallCardReel from "../components/callCard/CallCardReel/CallCardReel";
import GroupCallCard from "../components/groupCallCard/GroupCallCard";
import CallPage from "../pages/CallPage/CallPage";


  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <div>no page</div>,
      children: [
        {
          path: "/",
          element:<h1>This is Home</h1>,
        },
        {
          path: "/group",
          element: <GroupCallCard/>,
        },
        {
          path: "/news",
          element: <h1>This is News</h1>,
        },{
          path: "/hire",
          element: <CallCardReel/>,
        },
        {
          path: "/class",
          element: <h1>This is Class</h1>,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/callpage",
      element: <CallPage />,
    },


  ]);