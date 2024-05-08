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
        {
          path: "/",
          element:<h1>this is home</h1>,
        },
        {
          path: "/group",
          element: <h1>this is group</h1>,
        },
        {
          path: "/news",
          element: <h1>this is News</h1>,
        },
        {
          path: "/class",
          element: <h1>this is Class</h1>,
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


  ]);