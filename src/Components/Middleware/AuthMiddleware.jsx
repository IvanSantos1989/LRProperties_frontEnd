import {Navigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../contexts/AuthContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AuthMiddleware = (props) =>  {
    
    const {token} = useContext(AuthContext)

    // check if token expired
    useEffect(() => {
        const decodedToken = jwtDecode(token)
        console.log(token);
        
      }, []);


    return token ? props.element : <Navigate to="/login" />;
}