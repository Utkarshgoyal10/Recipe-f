import './MainHomePage.css'

const HomePageBanner = () => {
    return (
        <div className="homepage-bg flex flex-col justify-center items-center">
            <h1 className="font-['Sofia'] md:text-[60px] md:w-[50%] text-center font-[900] mb-[35px] m-0 text-[35px] w-[85%] ">Recipe From Us, Cooking From You!</h1>
            <p className="md:text-[15px] md:w-[40%] text-center font-[900] text-[15px] w-[80%]">Experience a homemade meal with your own hands, with our exciting recipes</p>
            <div className='md:flex flex-col md:flex-row mt-2 hidden'>
                <a href='#searchByIngredients' className='flex items-center cursor-pointer m-2 bg-[white] border-[#e26310] border-solid border-[1px] text-[14px] font-[600] font-["Roboto"] h-[35px] px-[15px] rounded-[6px] text-[#e26310] ' >
                    Search by Ingredients
                </a>
                <a href='#searchByNutrition' className='flex items-center cursor-pointer m-2 bg-[#e26310] text-[14px] font-[500] font-["Roboto"] h-[35px] px-[15px] rounded-[6px] text-[white] ' >
                    Browse by Nutrition
                </a>
            </div>
        </div>
    )
}

export default HomePageBanner