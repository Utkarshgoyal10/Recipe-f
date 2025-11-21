import { useState, useContext, React } from "react"
import {LoginPage} from "./LoginPage"
import RegistrationPage from "./RegistrationPage"
import SideNavBar from "./SideNavBar"
import { AuthContext } from "../../context/AuthContext"

const MainAuthSideBar = () => {
    const [toggleLoginRegister, setToggleLoginRegister] = useState(true);
     const {setOpenLogin, openLogin} = useContext(AuthContext)

    return(
        <div className={`login-page-modal z-[1000]`}>
            <div className="login-page-overlay" onClick={() =>  setOpenLogin(false)}></div>
            <div className={`login-page-modal-content ${openLogin ? 'open' : 'closed'}`}>
                <SideNavBar />
                {toggleLoginRegister ? <LoginPage setToggleLoginRegister={setToggleLoginRegister} /> : <RegistrationPage setToggleLoginRegister={setToggleLoginRegister} />}
            </div>
        </div>
    )
}

export default MainAuthSideBar