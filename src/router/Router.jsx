import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        }
      ]
    },
  ]);

  export default Router;