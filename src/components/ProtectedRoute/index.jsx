import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const ProtectedRoute = ({element}) => {
    const {setOpenLogin} = useContext(AuthContext)
    const jwtToken = Cookies.get('jwtToken')
    if(jwtToken === undefined){
        setOpenLogin(true)
        toast("Please Login!")
        return <Navigate to='/' />
    }
    return element
}

export default ProtectedRoute