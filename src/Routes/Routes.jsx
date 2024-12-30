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
import NewsContainer from "../components/NewsContainer";
import ProfileEdit from "../pages/Profile_edit/ProfileEdit";
import CourseCard_details from "../components/CaurseCard.jsx/CourseCard_details";
import VideoCardWrapper from "../components/VideoCardWrapper";
import ReelPage from "../pages/ReelPage/ReelPage";
import VideoViewPage from "../pages/videoViewPage/VideoViewPage";
import { CallCardWrapper_mongo } from "../components/callCard/CallCardWrapper_mongo";


  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error_page/>,
      children: [
        {
          path: "/",
          element: <CallCardWrapper_mongo/>,
          // loader: ()=> fetch("http://localhost:5001/api/users/")
        },

        
        {
          path: "/group",
          element: <GroupCallCard_wrapper/>,
        },
        {
          path: "/news",
          element: <NewsContainer />,
        },
        {
          path: "/hire",
          element: <CallCardReel/>,
          loader: ()=> fetch("/userDataLocal.json")
        },
        {
          path: "/class",
          element: <CourseCard_wrapper/>,
        },{
          path: "/watch",
          element: <VideoCardWrapper/>,
        }
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path:"/watch/video",
      element: <VideoViewPage/>
    },
    {
      path: "/profile/edit",
      element: <ProfileEdit />,
    },
    {
      path: "/:unique_username_id",
      element: <ProfilePage />,
      loader: ()=> fetch("/userDataLocal.json")

    },
    {
      path: "/callpage",
      element: <CallPage />,
    },{
      path: "/coursepage",
      element: <CourseCard_details/>
      ,
    }
    ,{
      path: "/reel",
      element: <ReelPage/>
      ,
    }


  ]);


  