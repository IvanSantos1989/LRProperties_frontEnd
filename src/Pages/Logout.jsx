import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();
    
    logout()
    navigate("/")

    return <></>;
}

export default Logout;