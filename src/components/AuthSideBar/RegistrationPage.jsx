import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {Oval} from 'react-loader-spinner'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { toast } from 'react-toastify'
import './authSideBar.css'


const RegistrationPage = (props) => {
    const {setToggleLoginRegister} = props

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [DOB, setDOB] = useState("");
    const [gender, setGender] = useState("Male");
    const [password, setPassword] = useState("");
    const [isUsernameEmpty, setIsUsernameEmpty] = useState(false)
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isDOBEmpty, setIsDOBEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [userLength, setUserLength] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [circle, setCircle] = useState(false)

    const onChangeUsername = (event) => {
        setUserName(event.target.value);
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangeDOB = (event) => {
        setDOB(event.target.value)
    }

    const onChangeGender = (event) => {
        setGender(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const registerUser = async () => {
        
        const date = new Date();
        let day = date.getDate()
        let month = date.getMonth()
        const year = date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        if (month<10){
            month = `0${month}`
        }
        if (day<10) {
            day = `0${day}`
        }
        if (hours<10) {
            hours = `0${hours}`
        }
        if (minutes<10) {
            minutes = `0${minutes}`
        }
        if (seconds<10) {
            seconds = `0${seconds}`
        }
        const createdAt = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

        // const registerUrl = "http://localhost:5000/register/"
        const registerUrl = "https://recipe-b.onrender.com/auth/register"
        const username = userName.toLowerCase()
        const em = email.toLowerCase()
        const registerDetails = {
            userName: username,
            email: em,
            password,
            gender,
            DOB,
            createdAt
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(registerDetails)
        }

        const response = await fetch(registerUrl, options)
        const data = await response.json()
        console.log(data)
        if(response.ok === true) {
            setToggleLoginRegister(true)
            setShowErrorMessage(false)
            setCircle(false)
            toast.success("Registration Successful!")
        } else {
            setShowErrorMessage(true)
            setErrorMessage(data.userExists)
            setCircle(false)
            toast.error("User Already Exists!")

        }
    }

    const onSubmitRegisterForm = (event) => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(userName === "") {
            setIsUsernameEmpty(true)
        } else {
            setIsUsernameEmpty(false)
        }

        if(userName.length < 6) {
            setUserLength(true)
        } else {
            setUserLength(false)
        }

        if(password === "") {
            setIsPasswordEmpty(true)
        } else {
            setIsPasswordEmpty(false)
        }

        if(DOB === "") {
            setIsDOBEmpty(true)
        } else {
            setIsDOBEmpty(false)
        }

        if(!emailRegex.test(email) || (!email.endsWith("@gmail.com") && !email.endsWith("@outlook.com") && !email.endsWith("@hotmail.com") && !email.endsWith("@yahoo.com"))) {
            console.log("email")
            setIsEmailEmpty(true)
            return
        } else {
            setIsEmailEmpty(false)
        }

        if(userName !== "" && userName.length >= 6 && password !== "" && DOB !== "") {
            setCircle(true)
            registerUser()
        } else {
            return
        }
        
    }

    return(
        <>
            <form onSubmit={onSubmitRegisterForm}>
                <h1 className="text-[18px] font-[600] mb-[5px]">Register</h1>
                <hr className="border-[2px] border-[#e26310] w-[80px] mb-[10px]"/>
                {showErrorMessage && < p className='text-[15px] text-[red] text-center'>*{errorMessage}!</p>}
                <Box
                    sx={{
                        '& > :not(style)': {marginBottom: '1px', width: '100%' },
                    }}
                    noValidate
                    autoComplete="on"
                    >
                    <TextField id="username" label="Username" variant="standard" value={userName} onChange={onChangeUsername}/>
                </Box>
                {isUsernameEmpty && <p className='text-[red] text-[10px]'>*Enter username</p>}
                {userLength && <p className='text-[red] text-[10px]'>*username should contain atleast 6 characters</p>}
                <Box
                    sx={{
                        '& > :not(style)': {marginTop: '8px', width: '100%',},
                    }}
                    noValidate
                    autoComplete="on"
                    >
                    <TextField id="email" label="Email" variant="standard" value={email} onChange={onChangeEmail}/>
                </Box>
                {isEmailEmpty && <p className='text-[red] text-[10px]'>*Invalid email</p>}
                <div className='flex items-center mt-[20px]'>
                    <label className='w-[50%] text-[gray]' htmlFor='date'>Date Of Birth</label>
                    <input type='date' id='date' value={DOB} onChange={onChangeDOB} className='bg-transparent border-[1px] border-[gray] rounded-[5px] text-[15px] px-[6px] py-[3px] outline-none' />
                </div>
                {isDOBEmpty && <p className='text-[red] text-[10px]'>*Select Date of birth</p>}
                <div className='flex items-center mt-5'>
                    <label className='w-[50%] text-[gray]' htmlFor='gender'>Gender</label>
                    <select onChange={onChangeGender} value={gender} className='bg-transparent border-[1px] border-[gray] rounded-[5px] text-[15px] px-[6px] py-[3px] outline-none' id='gender'>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                        <option value={"Other"}>Other</option>
                    </select>
                </div>
                <div className='relative'>
                    <Box
                    sx={{
                        '& > :not(style)': {marginTop: '10px', width: '100%' },
                    }}
                    noValidate
                    autoComplete="on"
                    >
                        <TextField id="password" label="Password" variant="standard" type={showPassword ? 'text' : 'password'} value={password} onChange={onChangePassword} className='w-[100vw]'/>
                    </Box>
                    <div className='absolute top-[55%] right-[4px] z-[100] cursor-pointer'>
                            {
                                !showPassword ? <AiOutlineEyeInvisible className='text-[18px] text-[#00000099]' onClick={onClickShowPassword} /> : <AiOutlineEye className='text-[18px] text-[#00000099]' onClick={onClickShowPassword} />
                            }
                    </div>
                </div>
                {isPasswordEmpty && <p className='text-[red] text-[10px]'>*Enter password</p>}
                <button type='submit' disabled={circle} className='mb-[20px] mt-5 flex flex-row justify-center bg-[#e26310] px-[15px] w-[100%] py-[7px] rounded-[6px] text-[#ffffff] border-0 outline-none '>
                    {
                        circle ? 
                        (<Oval
                        height={20}
                        padding={10}
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
                        "Register"
                    }
                </button>
            </form>
            <p className='text-center font-[600]'>Have an account? <span className='text-[blue] cursor-pointer' onClick={() => setToggleLoginRegister(true)}>Login here</span> </p>
        </>
    )
}

export default RegistrationPage