import {createBrowserRouter,} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import App from "../App";
import ProfilePage from "../pages/ProfilePage/ProfilePage";


  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <div>no page</div>,
      children: [
        // {
        //   path: "/profile",
        //   element: <ProfilePage />,
        // },
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


  ]);