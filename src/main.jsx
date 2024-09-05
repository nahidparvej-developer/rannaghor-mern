
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router/Router'
import { RouterProvider } from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';


createRoot(document.getElementById('root')).render(

  
     <AuthProvider>
       <RouterProvider router={Router} />
     </AuthProvider>


)
