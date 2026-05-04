import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";

const ProtectedRoute = ({element}) => {
    const context = useContext(AuthContext);
    const jwtToken = Cookies.get('jwtToken');
    const setOpenLogin = context?.setOpenLogin;

    useEffect(() => {
        if (jwtToken === undefined && setOpenLogin) {
            setOpenLogin(true);
            toast("Please Login!");
        }
    }, [jwtToken, setOpenLogin]);

    if(jwtToken === undefined){
        return <Navigate to='/' />
    }
    return element;
}

export default ProtectedRoute