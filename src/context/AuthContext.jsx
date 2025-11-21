import { createContext, useState } from "react"

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [openLogin, setOpenLogin] = useState(false);
    const [toggleLoginLogout, setToggleLoginLogout] = useState(true)
    
    return (
        <AuthContext.Provider value={{ openLogin, setOpenLogin, toggleLoginLogout, setToggleLoginLogout}} >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}