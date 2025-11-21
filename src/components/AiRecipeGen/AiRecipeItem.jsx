import {FaNutritionix} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi'
import { RxLapTimer } from 'react-icons/rx'

const AiRecipeItem = ({recipeList}) => {
    const {title, cuisine, diet, ingredients, ingredients_might_include="", instructions, no_of_servings, nutritional_info, time_to_cook } = recipeList
    const {calories, carbohydrates, protein, fat, fiber, cholesterol="", vitamin="", sugar="", iron=""} = nutritional_info

    return(
        <div className='shadow-lg mb-6 bg-[white] md:p-5 pb-3 pl-[10px] pt-3 pr-[10px] rounded-lg w-[100%]' >
            <h1 className="text-[green] font-['Roboto'] text-[20px] md:text-[25px] font-bold mb-3" >{title}</h1>
            <div className='flex items-center md:my-3 mb-0 mt-3  flex-wrap '>
                <div className='flex items-center mr-7 mb-3 '>
                    <HiUserGroup className="text-[20px] text-[#ff6200] mr-2 " />
                    <p className='text-[14px] font-["Roboto"] '>{no_of_servings} servings</p>
                </div>
                <div className='flex items-center mr-7 mb-3 '>
                    <RxLapTimer className="text-[20px] text-[#ff6200] mr-2 " />
                    <p className='text-[14px] font-["Roboto"]'>{time_to_cook} minutes</p>
                </div>
                <div className='flex items-center mb-3 mr-7'>
                    <p className='text-[15px] font-["Roboto"] font-bold mr-2 '>Cuisine: </p>
                    <p className='text-[15px] font-["Roboto"] '>{cuisine}</p>
                </div>
                <div className='flex items-center mb-3'>
                    <p className='text-[15px] font-["Roboto"] font-bold mr-2 '>Diet: </p>
                    <p className='text-[15px] font-["Roboto"] '>{diet}</p>
                </div>
            </div>
            <div className="md:flex-row flex flex-col w-[100%] mt-2 md:justify-between">
                <div className="md:order-2 w-[100%] md:w-[35%]">
                    <h1 className='md:text-[22px] text-[20px] mb-2 font-[600] font-["Roboto"] text-[#3f3f3f] mt-3 flex items-center'>Nutritional Information<FaNutritionix className='ml-2 text-[20px] text-[#ff6200]' /> </h1>
                    <table border="1" className='w-[100%]'>
                    <thead>
                        <tr className='w-[100%] flex justify-center '></tr>
                    </thead>
                    <tbody>
                        <tr className='border-[afafaf] border-solid border-[1px] bg-[#f9eee8]'>
                            <td className='font-["Roboto"] text-[#3f3f3f] pl-6 py-1 font-semibold md:text-[16px] text-[14px]'>Calories (kcal)</td>
                            <td className='font-["Roboto"] font-[500] text-[#3f3f3f] pl-4 md:text-[16px] text-[14px]'>{calories}</td>
                        </tr>
                        <tr className='border-[afafaf] border-solid border-[1px] '>
                            <td className='font-["Roboto"] text-[#3f3f3f] pl-6 py-1 font-semibold md:text-[16px] text-[14px]'>Carbs (g)</td>
                            <td className='font-["Roboto"] font-[500] text-[#3f3f3f] pl-4 md:text-[16px] text-[14px]'>{carbohydrates}</td>
                        </tr>
                        <tr className='border-[afafaf] border-solid border-[1px] bg-[#f9eee8]'>
                            <td className='font-["Roboto"] text-[#3f3f3f] pl-6 py-1 font-semibold md:text-[16px] text-[14px]'>Fat (g)</td>
                            <td className='font-["Roboto"] font-[500] text-[#3f3f3f] pl-4 md:text-[16px] text-[14px]'>{fat}</td>
                        </tr>
                        <tr className='border-[afafaf] border-solid border-[1px] '>
                            <td className='font-["Roboto"] text-[#3f3f3f] pl-6 py-1 font-semibold md:text-[16px] text-[14px]'>Protein (g)</td>
                            <td className='font-["Roboto"] font-[500] text-[#3f3f3f] pl-4 md:text-[16px] text-[14px]'>{protein}</td>
                        </tr>
                        {fiber !== "" &&
                            <tr className='border-[afafaf] border-solid border-[1px] bg-[#f9eee8]'>
                                <td className='font-["Roboto"] text-[#3f3f3f] pl-6 py-1 font-semibold md:text-[16px] text-[14px]'>Fiber (g)</td>
                                <td className='font-["Roboto"] font-[500] text-[#3f3f3f] pl-4 md:text-[16px] text-[14px]'>{fiber}</td>
                            </tr>
                        }
                        {cholesterol !== "" &&
                            <tr className='border-[afafaf] border-solid border-[1px] '>
                                <td className='font-["Roboto"] text-[#3f3f3f] pl-6 py-1 font-semibold md:text-[16px] text-[14px]'>Cholesterol (mg)</td>
                                <td className='font-["Roboto"] font-[500] text-[#3f3f3f] pl-4 md:text-[16px] text-[14px]'>{cholesterol}</td>
                            </tr>
                        }
                        {vitamin !== "" &&
                            <tr className='border-[afafaf] border-solid border-[1px] bg-[#f9eee8]'>
                                <td className='font-["Roboto"] text-[#3f3f3f] pl-6 py-1 font-semibold md:text-[16px] text-[14px]'>Vitamin (%)</td>
                                <td className='font-["Roboto"] font-[500] text-[#3f3f3f] pl-4 md:text-[16px] text-[14px]'>{vitamin}</td>
                            </tr>
                        }
                        {iron !== "" &&
                            <tr className='border-[afafaf] border-solid border-[1px] '>
                                <td className='font-["Roboto"] text-[#3f3f3f] pl-6 py-1 font-semibold md:text-[16px] text-[14px]'>Iron (%)</td>
                                <td className='font-["Roboto"] font-[500] text-[#3f3f3f] pl-4 md:text-[16px] text-[14px]'>{iron}</td>
                            </tr>
                        }
                        {sugar !== "" &&
                            <tr className='border-[afafaf] border-solid border-[1px] bg-[#f9eee8]'>
                                <td className='font-["Roboto"] text-[#3f3f3f] pl-6 py-1 font-semibold md:text-[16px] text-[14px]'>Sugar (g)</td>
                                <td className='font-["Roboto"] font-[500] text-[#3f3f3f] pl-4 md:text-[16px] text-[14px]'>{sugar}</td>
                            </tr>
                        }
                    </tbody>
                </table>
                </div>
                
                
                <div className="md:order-1 md:w-[35%]">
                    <h1 className='md:text-[22px] text-[20px] mb-2 font-[600] font-["Roboto"] text-[#3f3f3f] mt-3'>Ingredients:</h1>
                    <ul className='list-disc md:pl-[30px] pl-[20px] '>
                        {ingredients.map(eachItem => (<li key={eachItem} className='md:text-[16px] text-[13px] font-["Roboto"] '>{eachItem}</li>))}
                    </ul>
                </div>
                {ingredients_might_include.length !== 0 &&
                <div className="md:order-1 md:w-[30%]">
                    <h1 className='md:text-[22px] text-[20px] mb-2 font-[600] font-["Roboto"] text-[#3f3f3f] mt-3'>Ingredients Might Include:</h1>
                    <ul className='list-disc md:pl-[30px] pl-[20px] '>
                        {ingredients_might_include.map(eachItem => (<li key={eachItem} className='md:text-[16px] text-[13px] font-["Roboto"] '>{eachItem}</li>))}
                    </ul>
                </div>}
            </div>
            <h1 className='md:text-[22px] text-[20px] mb-2 mt-3 font-[600] font-["Roboto"] text-[#3f3f3f] '>Instructions:</h1>
            <ul className='list-disc md:pl-[30px] pl-[20px] '>
                {instructions.map(eachItem => 
                    <li key={eachItem} className='md:text-[16px] text-[13px] font-["Roboto"] '>{eachItem}</li>
                )}
            </ul>
        </div>
    )
}

export default AiRecipeItem