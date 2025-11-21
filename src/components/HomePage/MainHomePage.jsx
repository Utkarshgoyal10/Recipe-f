import NavBar from "./NavBar"
import HomePageBanner from "./HomePageBanner"
import CookWithUs from './CookWithUs'
import SearchByName from "./SearchByName"
import SearchByNutrition from "./SearchByNutrition"
import SearchByCuisine from "./SearchByCuisine"
import { ToastContainer } from "react-toastify"
import { React } from "react"
import Footer from "./Footer"

const MainHomePage = () => {
    return(
        <div className="font-['Roboto']">
            <ToastContainer
                position="top-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" 
            />
            <NavBar /> 
            <HomePageBanner/>
            <div className="homepage-bg-con w-[100%] min-h-[100vh] px-[25px] md:px-[90px] xl:px-[180px] flex flex-col items-center">
                <CookWithUs />
                <SearchByName />
                <SearchByNutrition />
                <SearchByCuisine />
            </div>
            <Footer />
        </div>
    )
}

export default MainHomePage