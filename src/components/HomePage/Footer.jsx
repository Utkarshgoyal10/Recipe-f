import { Link } from "react-router-dom"
// import {AiOutlineCopyright} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {IoMdCall} from 'react-icons/io'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Footer as foot} from 'flowbite-react';

import { Typography } from "@material-tailwind/react";
 
 
const currentYear = new Date().getFullYear();

const Footer = () => {

    return(
    <footer className="relative w-full pt-6 bg-cover bg-center bg-fixed bg-gray-100" >
      <div className="mx-auto w-full max-w-7xl px-2">
        <div className="grid grid-cols-1 justify-between gap-6 md:grid-cols-3">
        <Typography variant="h5" className="" >
            <img href="https://flowbite.com"
              src="./logo2.png"
              alt="Flowbite Logo"
              name="Flowbite"
                className="w-52 mx-auto mt-8"
              />
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-between gap-4 col-span-2 my-auto">
          <div className="pl-5 md:w-[100%] w-[100%] ">
                    <h1 className="font-bold text-[15px] mb-2 md:mb-3 ">Explore</h1>
                    <div className="md:mt-4 ">
                        <Link to="/">
                            <p className="text-[#606060] text-[14px] md:text-[16px] font-['Roboto'] mb-2 md:mb-3">Home</p>
                        </Link>
                        <Link to="/about">
                            <p className="text-[#606060] text-[14px] md:text-[16px] font-['Roboto'] mb-2 md:mb-3">About</p>
                        </Link>
                    </div>
                </div>
            <div className="pl-5  md:w-[100%] w-[100%] ">
                    <h1 className="font-bold text-[15px] mb-2 md:mb-3 ">Search</h1>
                    <div className="md:mt-4 mt-3">
                        <Link to="/search-by-name">
                            <p className="text-[#606060] text-[14px] md:text-[16px] font-['Roboto'] mb-2 md:mb-3">Search by Name</p>
                        </Link>
                        <Link to="/search-by-ingredients">
                            <p className="text-[#606060] text-[14px] md:text-[16px] font-['Roboto'] mb-2 md:mb-3">Search by Ingredients</p>
                        </Link>
                        <Link to="/search-by-nutrition">
                            <p className="text-[#606060] text-[14px] md:text-[16px] font-['Roboto'] mb-2 md:mb-3">Search by Nutrition</p>
                        </Link>
                        <Link to="/search-by-cuisine">
                            <p className="text-[#606060] text-[14px] md:text-[16px] font-['Roboto'] mb-2 md:mb-3">Search by Cuisine</p>
                        </Link>
                    </div>
                </div>
                <div className="pl-5  md:w-[100%] w-[100%] ">
                    <h1 className="font-bold text-[15px] mb-2 md:mb-3 ">Contact</h1>
                    <div className="md:mt-4 mt-3">
                        <div className="flex items-center mb-2 md:mb-3">
                            <IoMdCall className="text-[#606060] text-[18px] md:text-[22px] mr-2" />
                            <Link to="tel:+91987654321" className="text-[#606060] text-[14px] md:text-[16px] font-['Roboto']">+91 8954378002</Link>
                        </div>
                        <div className="flex items-center mb-2 md:mb-3">
                            <HiOutlineMail className="text-[#606060] text-[18px] md:text-[22px] mr-2" />
                            <Link to="mailto:reciperover@gmail.com" className="text-[#606060] text-[14px] md:text-[16px] font-['Roboto']">reciperover@gmail.com</Link>
                        </div>
                    </div>
                </div>
          </div>
          
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear} <Link to="/">Recipe-Rover</Link>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
             <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <foot.Icon href="#" icon={BsFacebook} />
            <foot.Icon href="#" icon={BsInstagram} />
            <foot.Icon href="#" icon={BsTwitter} />
            <foot.Icon href="#" icon={BsGithub} />
          </div>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer



