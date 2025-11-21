import { Link } from "react-router-dom"
import NavBar from "../HomePage/NavBar"
import MainAuthSideBar from '../AuthSideBar/MainAuthSideBar';
import { useContext, React } from 'react';
import { AuthContext } from '../../context/AuthContext';


const AboutUsPage = () => {
    const {openLogin } = useContext(AuthContext)

    return (
        <>
        <NavBar bgColor={"#1e1e1e"} itemsColor="white" logoColor="white" />
            <div className="pt-[70px] bg-[black] min-h-[100vh] w-[100%] flex flex-col md:flex-row md:justify-between" >
                <div className="self-center w-[100%] md:w-[50%] text-center flex flex-col items-center md:p-10 p-4">
                    <h1 style={{fontFamily: "Carrois Gothic SC"}} className='text-[white] tracking-widest md:text-[20px] text-[15px] '></h1>
                    <h1 className="font-['Allura'] text-white mb-2 text-[50px]">Recipe Rover</h1>
                    <hr className="border-[white] border-[1.5px] w-[120px] pb-0 mb-4" />
                    <hr className="border-[white] border-[1.5px] w-[120px] pb-0 mb-6" />
                    <p className="text-white font-['Roboto'] md:text-[16px] text-[17px] mb-5 leading-relaxed">
                    The <span className="text-[#e26310] font-2xl font-bold">Recipe Rover</span> Application is a versatile web-based tool, harnessing the power of the Spoonacular API, OpenAI API, 
                    and Kaggle Dataset. With this robust platform, users can explore a vast array of recipes by leveraging a multitude of 
                    search criteria, such as keywords, nutrients, ingredients, and cuisine preferences. This culinary companion not only 
                    furnishes comprehensive details about each recipe, including its constituent ingredients, nutritional breakdown, and 
                    step-by-step cooking instructions, but it also accommodates both vegetarians and non-vegetarians in their quest for 
                    delectable dishes.
                    <br />
                    <br />
                    {/* Furthermore, the application takes your culinary journey a step further by incorporating advanced AI capabilities. 
                    By embracing AI-driven search functionality, you can effortlessly explore a diverse range of recipes in various languages 
                    and cuisines, opening up a world of culinary possibilities at your fingertips. Whether you're in pursuit of a specific 
                    nutrient profile or wish to experiment with unique ingredients, the <span className="text-[#e26310] font-bold">Recipe Rover</span> Application has you covered
                    <br /> */}
                    {/* <br /> */}
                    Overall, the Recipe Rover Application is a comprehensive tool for food enthusiasts and anyone interested in exploring 
                    new recipes and improving their cooking skills.
                    </p>
                    <Link to="/" className="w-[100%] ">
                        <button style={{fontFamily: "Carrois Gothic SC"}} className="mb-4 md:mb-0 bg-transparent border-white border-solid border-2 text-white p-[6px] hover:bg-blue-900 hover-text-black-200 md:w-[160px] tracking-widest text-[12px] w-[100%] md:text-[14px] ">EXPLORE</button>
                    </Link>
                </div>
                <div className="w-[100%] md:w-[50%] h-[100%] self-center">
                    <img src="https://i.ibb.co/vZ045KC/IMG-20230211-181831.png" alt="about" className="w-[100%] md:h-[90.5vh]" draggable="false"/>
                </div>
                {openLogin && <MainAuthSideBar />}
            </div>
        </>
    )
}

export default AboutUsPage