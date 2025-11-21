import * as React from 'react';
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useContext } from 'react';
import {Oval} from 'react-loader-spinner'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { AuthContext } from '../../context/AuthContext';
import './authSideBar.css'

let jwtToken = null;

const LoginPage = (props) => {

    const {setOpenLogin, setToggleLoginLogout} = useContext(AuthContext)
    const {setToggleLoginRegister} = props;

    const [userNameEmail, setUserNameEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [circle, setCircle] = useState(false)

    const onChangeEmail = event => {
        setUserNameEmail(event.target.value)
    }

    const onChangePassword = event => {
        setPassword(event.target.value)
    }

    const loginUser = async () => {
        let email = ""
        let userName = ""

        if (userNameEmail.endsWith("@gmail.com")){
            email = userNameEmail.toLowerCase();
        } else {
            userName = userNameEmail.toLowerCase();
        }

        // const loginUrl = "http://localhost:5000/login/"
        const loginUrl = "https://recipe-rower.onrender.com/auth/login"
        const LoginDetails = {
            userName,
            email,
            password
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(LoginDetails)
        }

        const response = await fetch(loginUrl, options);
        const data = await response.json()
        if (response.ok === true) {
            Cookies.set('jwtToken', data.jwtToken, {expires: 15})
            setShowErrorMessage(false)
            setToggleLoginLogout(true)
            setOpenLogin(false)
            setCircle(false)
            toast.success("Login Successful!")
        } else {
            setShowErrorMessage(true)
            setErrorMessage(data.invalid)
            setCircle(false)
            toast.error("Wrong Credentials!")
            setPassword("")
            setUserNameEmail("")
        }
    }


    const onSubmitLoginForm = event => {
        event.preventDefault()

        if (userNameEmail==="") {
            setIsEmailEmpty(true)
        } else {
            setIsEmailEmpty(false)
        }

        if (password==="") {
            setIsPasswordEmpty(true)
        } else {
            setIsPasswordEmpty(false)
        }

        if (password !== "" && userNameEmail !== "") {
            setCircle(true)
            loginUser()
        } else {
            return
        }
    }

    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return(
        <>
            <form onSubmit={onSubmitLoginForm}>
                <h1 className="text-[18px] font-[600] mb-[5px]">Login</h1>
                <hr className="border-[2px] border-[#e26310] w-[60px] mb-[10px]"/>
                {showErrorMessage && < p className='text-[15px] text-[red] text-center'>*{errorMessage}</p>}
                <Box
                    sx={{
                        '& > :not(style)': {marginBottom: '3px', width: '100%' },
                    }}
                    noValidate
                    autoComplete="on"
                >
                    <TextField id="email/username" label="Email/Username" variant="standard" value={userNameEmail}  onChange={onChangeEmail}/>
                </Box>
                {isEmailEmpty && <p className='text-[red] text-[10px]'>*Enter email</p>}
                <div className='relative'>
                    <Box
                        sx={{
                            '& > :not(style)': {marginBottom: '3px', width: '100%' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                borderColor: 'red',
                                },
                                '&:hover fieldset': {
                                borderColor: 'red', // Set the color for hover state
                                },
                                '&.Mui-focused fieldset': {
                                borderColor: 'red', // Set the color for focus state
                                },
                            },
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <TextField id="password" label="Password" variant="standard" type={showPassword ? 'text' : 'password'} value={password} onChange={onChangePassword} className='w-[100vw]'/>
                    </Box>
                    <div className='absolute top-[47%] right-[4px] z-[100] cursor-pointer'>
                        {
                            !showPassword ? <AiOutlineEyeInvisible className='text-[18px] text-[#00000099]' onClick={onClickShowPassword} /> : <AiOutlineEye className='text-[18px] text-[#00000099]' onClick={onClickShowPassword} />
                        }
                    </div>
                </div>
                {isPasswordEmpty && <p className='text-[red] text-[10px]'>*Enter password</p>}
                <button disabled={circle} className='mt-[20px] bg-[#e26310] flex flex-row justify-center px-[15px] w-[100%] py-[7px] rounded-[6px] text-[#ffffff] border-0 outline-none ' type='submit'>
                    {
                        circle ? 
                        (<Oval
                        height={20}
                        width={20}
                        color="#ffffff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#ffffff"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                        />) 
                        :
                        "Login"
                    }
                </button>
            </form>
            <p className='text-center font-[600] mt-5'>Didn't have an account? <span className='text-[blue] cursor-pointer' onClick={() => setToggleLoginRegister(false)}>Register here</span> </p>
        </>
    )
}

export {LoginPage, jwtToken}