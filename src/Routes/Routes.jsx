import {createBrowserRouter,} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import App from "../App";


  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <div>no page</div>,
      children: [
        // {
        //   path: "/login",
        //   element: <LoginPage />,
        // },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    }


  ]);