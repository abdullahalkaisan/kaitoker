import {createBrowserRouter,} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import App from "../App";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import CallCardReel from "../components/callCard/CallCardReel/CallCardReel";
// import GroupCallCard from "../components/groupCallCard/GroupCallCard";
import CallPage from "../pages/CallPage/CallPage";
// import CourseCard from "../components/CaurseCard.jsx/CourseCard";
import Error_page from "../pages/Error_page/Error_page";
import GroupCallCard_wrapper from "../components/GroupCallCard_wrapper";
import CourseCard_wrapper from "../components/CaurseCard.jsx/CourseCard_wrapper";
// import CallCard from "../components/callCard/CallCard";
import CallCardWrapper from "../components/callCard/CallCardWrapper";


  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error_page/>,
      children: [
        {
          path: "/",
          element: <CallCardWrapper/>,
          loader: ()=> fetch("userDataLocal.json")
        },
        {
          path: "/group",
          element: <GroupCallCard_wrapper/>,
        },
        {
          path: "/news",
          element: <h1>This is News</h1>,
        },{
          path: "/hire",
          element: <CallCardReel/>,
          loader: ()=> fetch("userDataLocal.json")
        },
        {
          path: "/class",
          element: <CourseCard_wrapper/>,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/profile/:id",
      element: <ProfilePage />,
      loader: ()=> fetch("/userDataLocal.json")

    },
    {
      path: "/callpage",
      element: <CallPage />,
    },


  ]);