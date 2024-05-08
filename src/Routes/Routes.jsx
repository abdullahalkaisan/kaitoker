import {createBrowserRouter,} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import App from "../App";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import CallCardReel from "../components/callCard/CallCardReel/CallCardReel";
import GroupCallCard from "../components/groupCallCard/GroupCallCard";
import CallPage from "../pages/CallPage/CallPage";
import CourseCard from "../components/CaurseCard.jsx/CourseCard";
import Error_page from "../pages/Error_page/Error_page";


  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error_page/>,
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
          element: <CourseCard/>,
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