import { Link } from "react-router-dom"


const SearchByNutrition = () => {
    return(
        <div id="searchByNutrition" className="w-[100%] flex flex-col md:items-center md:justify-between md:flex-row mb-[30px] items-center">
            <div className="order-2 md:order-1 md:w-[60%] text-center md:text-left">
                <h1 className="md:text-[30px] font-[800] font-['Sofia'] mb-[15px] text-[20px] ">We understand your dietary goals and aspirations!</h1>
                <p className="md:text-[16px] font-[400] mb-[20px] text-[12px] ">Explore recipes that align with your diet and allow you to choose the nutrition you want.</p>
                <Link to="search-by-nutrition">
                    <button type="button" className="bg-[#e26310] cursor-pointer outline-none text-[#ffffff] text-[13px] border-0 rounded-[20px] px-[16px] py-[6px] ">Let's Cook</button>
                </Link>
            </div>
            <img src="/nutritional-bowl.png" alt="" className="md:w-[300px] order-1 md:order-2 w-[150px] mb-[20px] md:mb-[0px] " />
        </div>
    )
}

export default SearchByNutrition