import {FaNutritionix} from 'react-icons/fa'

const NutritionItem = (props) => {
    const {recipeList, ingredients, recipeInfo} = props
    const {title, image, calories, carbs, fat, protein, cholesterol="", fiber="", sugar="", vitamin="", iron=""} = recipeList[0]
    return(
        <div className='shadow-lg mb-6 bg-[white] md:p-5 pb-3 pl-[10px] pt-3 pr-[10px] rounded-lg w-[100%]' >
            <h1 className="text-[green] font-['Roboto'] text-[20px] md:text-[25px] font-bold mb-3" >{title}</h1>
            <img src={image} alt={title} className="md:w-[60%] w-[100%]" />
            <div className="md:flex-row flex flex-col w-[100%] mt-2">
                <div className="md:order-2 w-[40]">
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
                                <td className='font-["Roboto"] font-[500] text-[#3f3f3f] pl-4 md:text-[16px] text-[14px]'>{carbs}</td>
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
                
                <div className="md:order-1 w-[60%]">
                    <h1 className='md:text-[22px] text-[20px] mb-2 font-[600] font-["Roboto"] text-[#3f3f3f] mt-3'>Ingredients:</h1>
                    <ul className='list-disc md:pl-[30px] pl-[20px] '>
                        {ingredients.ingredients.map(eachItem => (<li key={eachItem} className='md:text-[16px] text-[13px] font-["Roboto"] '>{eachItem}</li>))}
                    </ul>
                </div>
            </div>
            <h1 className='md:text-[22px] text-[20px] mb-2 mt-3 font-[600] font-["Roboto"] text-[#3f3f3f] '>Instructions:</h1>
            <ul className='list-disc md:pl-[30px] pl-[20px] '>
                {recipeInfo.steps.map(eachItem => 
                    <li key={eachItem} className='md:text-[16px] text-[13px] font-["Roboto"] '>{eachItem}</li>
                )}
            </ul>
        </div>
    )
}

export default NutritionItem