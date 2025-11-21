import {HiUserGroup} from 'react-icons/hi'
import {RxLapTimer} from 'react-icons/rx'


const RecipeItem = ({recipeDetails}) => {
    const {TotalTimeInMins, Cuisine, Diet, Ingredients, Instructions, RecipeName, Servings, URL, TranslatedIngredients, TranslatedInstructions, TranslatedRecipeName} = recipeDetails
    const ingredientsList = Ingredients.split(',')
    const translatedIngredientsList = TranslatedIngredients.split(',')
    return (
        <li className='shadow-lg mb-6 bg-[white] md:p-5 pb-1 pl-[10px] pt-3 pr-[10px] rounded-lg w-[100%]' >
            <h1 className="text-[green] font-['Roboto'] text-[20px] md:text-[25px] font-bold " >{RecipeName}</h1>
            <div className='flex items-center md:my-3 mb-0 mt-3  flex-wrap '>
                <div className='flex items-center mr-7 mb-3 '>
                    <HiUserGroup className="text-[20px] text-[#ff6200] mr-2 " />
                    <p className='text-[14px] font-["Roboto"] '>{Servings} servings</p>
                </div>
                <div className='flex items-center mr-7 mb-3 '>
                    <RxLapTimer className="text-[20px] text-[#ff6200] mr-2 " />
                    <p className='text-[14px] font-["Roboto"]'>{TotalTimeInMins} minutes</p>
                </div>
                <div className='flex items-center mb-3'>
                    <p className='text-[15px] font-["Roboto"] font-bold mr-2 '>Cuisine: </p>
                    <p className='text-[15px] font-["Roboto"] '>{Cuisine}</p>
                </div>
            </div>
            {Ingredients !== TranslatedIngredients ? 
                (<>
                    <h1 className='md:text-[22px] text-[20px] mb-2 font-[600] font-["Roboto"] text-[#3f3f3f] '>Ingredients:</h1>
                    <ul className='list-disc md:pl-[30px] pl-[20px] '>
                        {translatedIngredientsList.map(eachItem => (<li key={eachItem} className='md:text-[16px] text-[13px] font-["Roboto"] '>{eachItem}</li>))}
                    </ul>
                    <h1 className='md:text-[22px] text-[20px] mb-2 mt-3 font-[600] font-["Roboto"] text-[#3f3f3f] '>Translated Ingredients:</h1>
                    <ul className='list-disc md:pl-[30px] pl-[20px] '>
                        {ingredientsList.map(eachItem => (<li key={eachItem} className='md:text-[16px] text-[13px] font-["Roboto"] '>{eachItem}</li>))}
                    </ul>
                </>)
            :
                (<>
                    <h1 className='md:text-[22px] text-[20px] mb-2 font-[600] font-["Roboto"] text-[#3f3f3f] '>Ingredients:</h1>
                    <ul className='list-disc md:pl-[30px] pl-[20px] '>
                        {translatedIngredientsList.map(eachItem => (<li key={eachItem} className='md:text-[16px] text-[13px] font-["Roboto"] '>{eachItem}</li>))}
                    </ul>
                </>)
            }
            {Instructions.includes(TranslatedInstructions) ? 
                (<>
                    <h1 className='md:text-[22px] text-[20px] mb-2 mt-3 font-[600] font-["Roboto"] text-[#3f3f3f] '>Instructions:</h1>
                    <ul className=''>
                        <li className='md:text-[16px] text-[13px] font-["Roboto"] '>{TranslatedInstructions}</li>
                    </ul>
                </>)
            :
                (<>
                    <h1 className='md:text-[22px] text-[20px] mb-2 mt-3 font-[600] font-["Roboto"] text-[#3f3f3f] '>Instructions:</h1>
                    <ul className=''>
                        <li className='md:text-[16px] text-[13px] font-["Roboto"] '>{TranslatedInstructions}</li>
                    </ul>
                    <h1 className='md:text-[22px] text-[20px] mb-2 mt-3 font-[600] font-["Roboto"] text-[#3f3f3f] '>Translated Instructions:</h1>
                    <ul className=''>
                        <li className='md:text-[16px] text-[13px] font-["Roboto"] '>{Instructions}</li>
                    </ul>
                </>)
            }
            <div className='flex items-center my-3 '>
                <p className='md:text-[15px] text-[13px] font-["Roboto"] font-bold mr-2 '>Diet:</p>
                <p className='md:text-[15px] text-[13px] font-["Roboto"] '>{Diet}</p>
            </div>
            <div className='mb-6'>
                <a href={URL} target='_blank' rel="noreferrer" className='text-[12px] text-[white] bg-[#ff6200] px-4 py-[6px] rounded-md font-["Roboto"] '>More Details</a>
            </div>
        </li>
    )
}

export default RecipeItem