import { Link } from "react-router-dom"


const CookWithUs = () => {
    return (
        <div id="searchByIngredients" className="w-[100%] flex flex-col md:items-center md:justify-between md:flex-row mb-[30px] items-center mt-[20px] sm:mt-[0px] ">
            <div className="order-2 md:order-1 md:w-[60%] text-center md:text-left">
                <h1 className="md:text-[30px] font-[800] font-['Sofia'] mb-[15px] text-[20px] ">Cook with what you have at home!</h1>
                <p className="md:text-[16px] font-[400] mb-[20px] text-[12px] ">Tell us what's in the kitchen, and we'll give you a delicious recipe</p>
                <Link to="/search-by-ingredients">
                    <button type="button" className="bg-[#e26310] cursor-pointer outline-none text-[#ffffff] text-[13px] border-0 rounded-[20px] px-[16px] py-[6px] ">Let's Cook</button>
                </Link>
            </div>
            <img src="/pot-biryani.png" alt="" className="md:w-[300px] order-1 md:order-2 w-[150px] hidden sm:block mb-[20px] md:mb-[0px] " />
        </div>
    )
}

export default CookWithUs