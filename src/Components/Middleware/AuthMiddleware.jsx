import {Navigate, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../contexts/AuthContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AuthMiddleware = ({children}) =>  {
    
    const {token, logout} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        try{
          const tokenExpDateInSec = jwtDecode(token).exp // token expiration date
          const currentTimeInSeconds = new Date().getTime() / 1000;  // since Jan 1st 1970

          // check if token expired
          if(!token || tokenExpDateInSec < currentTimeInSeconds) {  // token already expired
            logout() // logout user
            navigate("/login")
          }

        } catch (err){
          logout()
          navigate("/login");
        }
    }, [token])

    return <>{children}</>;
}