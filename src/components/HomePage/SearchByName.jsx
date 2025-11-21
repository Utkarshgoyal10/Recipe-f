import {Link} from 'react-router-dom'

const SearchByName = () => {
    return(
        <div id='searchByName' className="flex w-[100%] flex-col md:flex-row justify-between items-center mb-[30px]">
            <img src="/mutton-biryani-bowl.png" alt="" className="md:w-[300px] w-[150px] mb-[20px] md:mb-[0px] " />
            <div className="md:w-[60%] text-center md:text-left">
                <h1 className="md:text-[30px] font-[800] font-['Sofia'] mb-[15px] text-[20px] ">We are aware that you would like to search using the recipe name!</h1>
                <p className="md:text-[16px] font-[400] mb-[20px] text-[12px] ">We want to ensure that you don't miss out on the traditional method of searching recipes by their names.</p>
                <Link to='/search-by-name'>
                    <button type="button" className="bg-[#e26310] cursor-pointer outline-none text-[#ffffff] text-[13px] border-0 rounded-[20px] px-[16px] py-[6px] ">Let's Cook</button>
                </Link>
            </div>
        </div>
    )
}

export default SearchByName