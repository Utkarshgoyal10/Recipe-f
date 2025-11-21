import {FiMenu} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {RxCross2} from 'react-icons/rx'
import { useState, useEffect, React, useContext } from 'react'
import { useNavigate, Link } from "react-router-dom";
import './MainHomePage.css'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'

const NavBar = (props) => {
    const {setOpenLogin, setToggleLoginLogout, toggleLoginLogout} = useContext(AuthContext)
    const {bgColor="#ffffff", itemsColor="", logoColor="#e26310"} = props

    const [screenWidth, setScreenWidth] = useState(0);
    const [openMenuBar, setOpenMenuBar] = useState(false);
    const [menu, setMenu] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const jwtToken = Cookies.get('jwtToken');
        if (jwtToken !== undefined) {
            setToggleLoginLogout(true);
        } else {
            setToggleLoginLogout(false);
        }
    }, []);

    const navigate = useNavigate()

    const onClickLogout = () => {
        Cookies.remove('jwtToken')
        setToggleLoginLogout(false)
        toast.success("Logout Successful!")
        navigate("/")
        
    }
    
    const toggleMenuBar = () => {
        setOpenLogin(true);
        setOpenMenuBar(false)
        setMenu(true)
    }

    const toggleMenu = () => {
        setMenu(!menu)
        setOpenMenuBar(!openMenuBar)
    }

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };
  

const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
};

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <div className='fixed w-[100%] top-0 z-50'>
            <nav style={{backgroundColor: bgColor}} className={`h-[70px] flex items-center font-['Roboto'] justify-between md:px-[40px] px-[17px]  w-[100%] nav-bar`}>
                <Link to="/">
                    <div className='flex items-center'>
                        <img src='/logo.jpg' alt='website logo' className='w-[60px]' />
                        <h1 className={`text-[${logoColor}] font-[800] md:text-[20px] text-[16px] ml-2`}>Recipe Rover</h1>
                    </div>
                </Link>
                <div className="hidden md:block">
                    <ul className="list-none pl-[0px] flex items-center font-['Roboto']">
                        <Link to="/">
                            <li style={{color: itemsColor}} className='mr-[30px] cursor-pointer '>Home</li>
                        </Link>
                        <Link to="/about">
                            <li style={{color: itemsColor}} className='mr-[30px] cursor-pointer'>About us</li>
                        </Link>
                        <Link to="/trending">
                            <li style={{color: itemsColor}} className='mr-[30px] cursor-pointer'>Trending Recipes</li>
                        </Link>
                        <Link to="/discussion">
                            <li style={{color: itemsColor}} className='mr-[30px] cursor-pointer'>Discussion</li>
                        </Link>
                        <div className="relative">
                            <li
                                style={{ color: itemsColor }}
                                className='mr-[30px] cursor-pointer'
                                onClick={toggleDropdown}
                            >
                                Get Involved ▼
                            </li>
                            {isDropdownOpen && (
                                <ul className="absolute bg-white shadow-md p-2 rounded-lg">
                                    <Link to="/register-ngo">
                                        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">Register as NGO</li>
                                    </Link>
                                    <Link to="/donate-food">
                                        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">Donate Food</li>
                                    </Link>
                                </ul>
                            )}
                        </div>

                        {toggleLoginLogout ? 
                            (<li className="mr-[20px] cursor-pointer text-[white] m-2 bg-[#e26310] py-[4px] text-[13px] px-[15px] rounded-[6px]" onClick={onClickLogout} >SignOut</li>)
                            :
                            (<li className="mr-[20px] cursor-pointer text-[white] m-2 bg-[#e26310] py-[4px] text-[13px] px-[15px] rounded-[6px]" onClick={() => setOpenLogin(true)} >SignIn</li> )
                        }
                    </ul>
                </div>
                {screenWidth <= 768 &&
                    <div onClick={toggleMenu}>
                        {menu ? <FiMenu style={{color: itemsColor}} className='text-[25px]'/> :
                        <RxCross2 style={{color: itemsColor}} className='text-[28px]' />}
                    </div>
                }

            </nav>
            {screenWidth <= 768 && (
              openMenuBar &&
                <div className='menu-overlay flex flex-col justify-center items-center pb-[15px]'>
                    <ul className="list-none text-center text-[white]">
                        <Link to="/">
                            <li className=" cursor-pointer m-2">Home</li>
                        </Link>
                        <Link to="/about">
                            <li className=" cursor-pointer m-2">About us</li>
                        </Link>
                        {toggleLoginLogout ?
                        <li className=" cursor-pointer m-2 text-[white] bg-[#e26310] text-[15px] py-[3px] px-[15px] rounded-[6px] " onClick={onClickLogout} >SignOut</li>
                        :
                        <li className=" cursor-pointer m-2 text-[white] bg-[#e26310] text-[15px] py-[3px] px-[15px] rounded-[6px] " onClick={toggleMenuBar} >SignIn</li>
                        }
                    </ul>
                </div>)
            }
        </div>
    )
}

export default NavBar