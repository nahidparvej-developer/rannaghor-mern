import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import UpdateProfile from "../pages/dashboard/UpdateProfile";



const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
        },
        {
          path:'/menu',
          element:<Menu></Menu> ,
        },
        {
          path:'/update-profile',
          element: <UpdateProfile></UpdateProfile>
        }
      ],
    },
    {
      path:'/signup',
      element: <Signup></Signup>,
    }
  ]);

  export default Router;