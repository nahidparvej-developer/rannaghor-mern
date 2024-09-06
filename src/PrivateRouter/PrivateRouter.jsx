import React, { useContext } from 'react'
import {AuthContext} from '../contexts/AuthProvider'
import { Navigate, replace, useLocation } from 'react-router-dom';
import LoadinSpiner from '../components/LoadinSpiner';


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading) {
        return (
            <LoadinSpiner/>
      )
    }
    if (user) {
            return children;
    }

  return (
    <Navigate state={{form: location}} to="/signup" replace></Navigate>
  )
  
 
}

export default PrivateRouter
