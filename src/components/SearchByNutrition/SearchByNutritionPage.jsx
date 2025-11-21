import {BsSearch} from 'react-icons/bs'
import Switch from '@mui/material/Switch';
import {FcClearFilters} from 'react-icons/fc'
import NavBar from "../HomePage/NavBar"
import { useState } from 'react'
import {MagnifyingGlass, Oval} from 'react-loader-spinner'
import NutritionItem from './NutritionItem'
import {HowItWorks} from '../RecipeDetails/HowItWorks'
import AiRecipeItem from '../AiRecipeGen/AiRecipeItem';

const apiStatusConstants = {
    initial: "INITIAL",
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    notFound: 'NOT_FOUND',
    failure: 'FAILURE'
}

const apiKey = process.env.REACT_APP_API_KEY;

const SearchByNutritionPage = () => {

    const [recipeList, setRecipeList] = useState([])
    const [recipeInfo, setRecipeInfo] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [dataFetched, setDataFetched] = useState(false)
    const [minCarbs, setMinCarbs] = useState("")
    const [maxCarbs, setMaxCarbs] = useState("")
    const [minProtein, setMinProtein] = useState("")
    const [maxProtein, setMaxProtein] = useState("")
    const [minCalories, setMinCalories] = useState("")
    const [maxCalories, setMaxCalories] = useState("")
    const [minFat, setMinFat] = useState("")
    const [maxFat, setMaxFat] = useState("")
    const [minCholesterol, setMinCholesterol] = useState("")
    const [maxCholesterol, setMaxCholesterol] = useState("")
    const [minFiber, setMinFiber] = useState("")
    const [maxFiber, setMaxFiber] = useState("")
    const [minSugar, setMinSugar] = useState("")
    const [maxSugar, setMaxSugar] = useState("")
    const [minVitamin, setMinVitamin] = useState("")
    const [maxVitamin, setMaxVitamin] = useState("")
    const [minIron, setMinIron] = useState("")
    const [maxIron, setMaxIron] = useState("")
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
    const [toggle, setToggle] = useState(false)
    const [language, setLanguage] = useState("English")
    const [circle, setCircle] = useState(false)

    const languageList = [
        "English",
        "Telugu",
        "Hindi",
        "Tamil",
        "Gujarati",
        "Marathi",
        "Malayalam",
        "Kannada",
        "Bengali",
        "Punjabi",
        "Urdu"
    ]

    let optionArr = []

    const onChangeLang = event => {
        setLanguage(event.target.value)
    }

    for(let i=2; i<=5; i++){
        optionArr.push(i)
    }

    const isChecked = () => {
        setApiStatus(apiStatusConstants.initial)
        setToggle(!toggle)
        setCircle(false)
    }

    const onChangeMinCarbs = event => {
        setMinCarbs(event.target.value)
    }

    const onChangeMaxCarbs = event => {
        setMaxCarbs(event.target.value)
    }

    const onChangeMinCalories = event => {
        setMinCalories(event.target.value)
    }

    const onChangeMaxCalories = event => {
        setMaxCalories(event.target.value)
    }

    const onChangeMinFat = event => {
        setMinFat(event.target.value)
    }

    const onChangeMaxFat = event => {
        setMaxFat(event.target.value)
    }

    const onChangeMinProtein = event => {
        setMinProtein(event.target.value)
    }

    const onChangeMaxProtein = event => {
        setMaxProtein(event.target.value)
    }

    const onChangeMinCholesterol = event => {
        setMinCholesterol(event.target.value)
    }

    const onChangeMaxCholesterol = event => {
        setMaxCholesterol(event.target.value)
    }

    const onChangeMinSugar = event => {
        setMinSugar(event.target.value)
    }

    const onChangeMaxSugar = event => {
        setMaxSugar(event.target.value)
    }

    const onChangeMinFiber = event => {
        setMinFiber(event.target.value)
    }

    const onChangeMaxFiber = event => {
        setMaxFiber(event.target.value)
    }

    const onChangeMinVitamin = event => {
        setMinVitamin(event.target.value)
    }

    const onChangeMaxVitamin = event => {
        setMaxVitamin(event.target.value)
    }

    const onChangeMinIron = event => {
        setMinIron(event.target.value)
    }

    const onChangeMaxIron = event => {
        setMaxIron(event.target.value)
    }

    const clearFilters = () => {
        setMinCarbs("")
        setMaxCarbs("")
        setMinProtein("")
        setMaxProtein("")
        setMinCalories("")
        setMaxCalories("")
        setMinFat("")
        setMaxFat("")
        setMinCholesterol("")
        setMaxCholesterol("")
        setMinFiber("")
        setMaxFiber("")
        setMinSugar("")
        setMaxSugar("")
        setMinVitamin("")
        setMaxVitamin("")
        setMinIron("")
        setMaxIron("")
    }

    const searchWithSpoon = async () => {

        setApiStatus(apiStatusConstants.inProgress)

        let url = `https://api.spoonacular.com/recipes/findByNutrients?`
        if(minCarbs !== "" && maxCarbs !== "") {
            url += `minCarbs=${minCarbs}&maxCarbs=${maxCarbs}&`
        }
        if(minProtein !== "" && maxProtein !== "") {
            url += `minProtein=${minProtein}&maxProtein=${maxProtein}&`
        }
        if(minCalories !== "" && maxCalories !== "") {
            url += `minCalories=${minCalories}&maxCalories=${maxCalories}&`
        }
        if(minFat !== "" && maxFat !== "") {
            url += `minFat=${minFat}&maxFat=${maxFat}&`
        }
        if(minCholesterol !== "" && maxCholesterol !== "") {
            url += `minCholesterol=${minCholesterol}&maxCholesterol=${maxCholesterol}&`
        }
        if(minVitamin !== "" && maxVitamin !== "") {
            url += `minVitaminC=${minVitamin}&maxVitaminC=${maxVitamin}&`
        }
        if(minFiber !== "" && maxFiber !== "") {
            url += `minFiber=${minFiber}&maxFiber=${maxFiber}&`
        }
        if(minIron !== "" && maxIron !== "") {
            url += `minIron=${minIron}&maxIron=${maxIron}&`
        }
        if(minSugar !== "" && maxSugar !== "") {
            url += `minSugar=${minSugar}&maxSugar=${maxSugar}&`
        }
        url += `number=1`

        console.log(url)
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'x-api-key': '437a97f1c1454e9d8c2c44d2f248852d'
            },
        }
        const response = await fetch(url, options)
        
        if (response.ok === true) {
            const recipeData = await response.json()
            console.log(recipeData)
            if(recipeData.length === 0) {
                setApiStatus(apiStatusConstants.notFound)
                setCircle(false)
            } else {
                setApiStatus(apiStatusConstants.success)
                setRecipeList(recipeData)
                getRecipeDetails(recipeData[0].id)
            }
        } else {
            setApiStatus(apiStatusConstants.failure)
            setCircle(false)
        }
        
    }

    const getRecipeDetails = async (id) => {
        const url = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'x-api-key': '437a97f1c1454e9d8c2c44d2f248852d'
            },
        }
        const response = await fetch(url, options)
        const recipeData = await response.json()
        if (response.ok === true) {
            const data = recipeData[0]
            const updatedData = {
                steps: data.steps.map(eachItem => eachItem.step)
            }
            setRecipeInfo(updatedData)
            getRecipeIngredients(id)
        } else {
            console.log("error")
        }
    }

    const getRecipeIngredients = async (id) => {
        const url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'x-api-key': '437a97f1c1454e9d8c2c44d2f248852d'
            },
        }
        const response = await fetch(url, options)
        const recipeData = await response.json()
        console.log(recipeData)
        if (response.ok === true) {
           
            const data = recipeData.ingredients
            const updatedData = {
                ingredients: data.map(eachItem => eachItem.name)
            }
            setIngredients(updatedData)
            setDataFetched(true)
            setCircle(false)
        } else {
            setCircle(false)
            console.log("error")
        }
    }


    const searchWithAI = async () => {

        setApiStatus(apiStatusConstants.inProgress)

        let nutriQuery = ""

        if(minCarbs !== "" && maxCarbs !== "") {
            nutriQuery += `minCarbs: ${minCarbs}g & maxCarbs: ${maxCarbs}g,`
        }
        if(minProtein !== "" && maxProtein !== "") {
            nutriQuery += `minProtein: ${minProtein}g & maxProtein: ${maxProtein}g,`
        }
        if(minCalories !== "" && maxCalories !== "") {
            nutriQuery += `minCalories: ${minCalories}kcal & maxCalories: ${maxCalories}kcal,`
        }
        if(minFat !== "" && maxFat !== "") {
            nutriQuery += `minFat: ${minFat}g & maxFat=${maxFat}g,`
        }
        if(minCholesterol !== "" && maxCholesterol !== "") {
            nutriQuery += `minCholesterol: ${minCholesterol}mg & maxCholesterol:${maxCholesterol}mg,`
        }
        if(minVitamin !== "" && maxVitamin !== "") {
            nutriQuery += `minVitaminC: ${minVitamin}mg & maxVitaminC: ${maxVitamin}mg,`
        }
        if(minFiber !== "" && maxFiber !== "") {
            nutriQuery += `minFiber: ${minFiber}g & maxFiber: ${maxFiber}g,`
        }
        if(minIron !== "" && maxIron !== "") {
            nutriQuery += `minIron: ${minIron}mcg & maxIron=${maxIron}mcg,`
        }
        if(minSugar !== "" && maxSugar !== "") {
            nutriQuery += `minSugar: ${minSugar}g & maxSugar: ${maxSugar}g,`
        }

        // const prompt = `
        //     You are a recipe book now or you have a huge collection of recipes including various cuisines and, the recipes include 
        //     title, ingredients, diet, cuisine, time to cook, instructions, nutritional information if possible image link of that 
        //     recipe, now I'm going search with nutritional values, your work is to provide the relevant recipe with title, cuisine, 
        //     no_of_servings, diet, ingredients, nutritional_info(calories, carbohydrates, protein, fat, fiber), time to cook, instructions 
        //     and image link if possible, I will search with nutritional values, every nutritional value can consists of minimun value 
        //     and maximum value, min and max value represents the minimnum and maximum nutritioal value it should contains, and the 
        //     response value should be strictly in between min and max values for example if minCarbs = 10g maxCarbs = 20g, then the 
        //     response value should be in between those minCarbs and maxCarbs such as Carbs = 15. the response recipes in form of json data, 
        //     like title key should title value, ingredient and instruction key should have array of ingredients and instructions, and so on.. 
        //     and also if user specify the response language, then you should give response in that language only like, telugu, hindi, 
        //     tamil etc.. and finally don't sent any messages other than recipe details json object, such as "okay", "sure", "I'm sorry" etc..
        //     if you unable to found any recipe details then give response content as "Error" no other message needed
        // `;

        // const prompt = `
        //     You are now a cookbook with an extensive collection of recipes(preferably indian recipes) spanning various cuisines. 
        //     Each recipe in your collection includes details such as title, ingredients, dietary information, cuisine type, preparation time, 
        //     cooking instructions, nutritional information, and a link to an image(if available) of the recipe.
        //     Your task is to provide relevant recipes(preferably indian recipes) when I search based on specific nutritional values. 
        //     You need to ensure that the recipes you provide strictly match the specified nutritional criteria, falling strictly within the 
        //     minimum and maximum nutritional values set for parameters like calories, carbohydrates, protein, fat, vitamin, iron, 
        //     cholesterol, sugar, and fiber. The response you provide will be in JSON format, with keys such as "title," "cuisine," 
        //     "no_of_servings," "diet," "ingredients(array)," "nutritional_info" (including calories, carbohydrates, protein, fat, 
        //     vitamin, iron, cholesterol, sugar, and fiber), "time_to_cook," "instructions(array)," and an image link (if available).
        //     If the user specifies a preferred language for the response, you should provide the response in that language, such as Telugu, 
        //     Hindi, Tamil, etc. and irrespective of user selected language all the key names in json data should be in english only.
        //     Finally, please refrain from sending any messages other than the recipe details in JSON format. If you cannot find any recipe 
        //     details that match the criteria, simply respond with "Error" without any additional messages.
        // `

        const prompt = `
            You are now a virtual cookbook, boasting an extensive collection of recipes, with a particular penchant for Indian culinary delights. This repository spans various cuisines and is meticulously organized to cater to your culinary cravings.
            Each recipe within your repertoire is thoughtfully curated, featuring essential details such as the recipe's title, ingredients, dietary information, cuisine type, preparation time, cooking instructions, and nutritional information.
            Your primary mission is to serve up recipes, preferably of Indian origin, in response to specific nutritional queries. Your prowess lies in ensuring that the recipes you recommend align strictly with the user's specified nutritional parameters. These parameters encompass vital elements such as calories, carbohydrates, protein, fat, vitamins, iron, cholesterol, sugar, and dietary fiber. 
            When providing responses, you shall do so in JSON format, employing standardized keys such as "title," "cuisine," "no_of_servings," "diet," "ingredients (array)," "nutritional_info" (including detailed breakdowns for calories, carbohydrates, protein, fat, vitamin, iron, cholesterol, sugar, and fiber), "time_to_cook", and "instructions (array)".
            In addition, should the user express a preference for the response in a specific language (e.g., Telugu, Hindi, Tamil, Gujarati, Marathi, Malayalam, Kannada, Bengali, Punjabi, Urdu, etc.), you shall dutifully oblige. However, it is imperative that all key names within the JSON data remain consistently in English, regardless of the chosen response language.
            Lastly, it's essential to maintain a crisp and focused communication style. please refrain from sending any messages other than the recipe details in JSON format. If you cannot find any recipe details that match the criteria, simply respond with "Error" without any additional messages.
        `


        const userQuery = `Nutritional values: [${nutriQuery}], Language: ${language}`;

        
        const apiUrl = "https://api.openai.com/v1/chat/completions"
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [
                {
                  "role": "system",
                  "content": `${prompt}`
                },
                {
                  "role": "user",
                  "content": `${userQuery}`
                }
              ],
              temperature: 0.7,
            }),
          }
        
        const response = await fetch(apiUrl, options)
        if (response.ok === true) {
            const recipeData = await response.json()
            console.log(recipeData)
            if(recipeData.length === 0 || (recipeData.choices[0].message.content === "Error")) {
                setApiStatus(apiStatusConstants.notFound)
                setCircle(false)
            } else {
                const AiRecipeData = JSON.parse(recipeData.choices[0].message.content)
                setApiStatus(apiStatusConstants.success)
                setRecipeList(AiRecipeData)
                setCircle(false)
            }
        } else {
            setApiStatus(apiStatusConstants.failure)
            setCircle(false)
        }

    }

    const onClickSearch = () => {
        if((minCarbs === "" || maxCarbs === "") && (minProtein === "" || maxProtein === "") && (minCalories === "" || maxCalories === "") && (minFat === "" || maxFat === "") && (minCholesterol === "" || maxCholesterol === "") && (minVitamin === "" || maxVitamin === "") && (minFiber === "" || maxFiber === "") && (minIron === "" || maxIron === "") && (minSugar === "" || maxSugar === "")){
            console.log("triggered")
            return
        }
        setCircle(true)
        if (toggle) {
            searchWithAI()

        } else {
            searchWithSpoon()
        }
    }

    const renderSearchResults = () => (
        <div className='w-[100%] md:w-[70%] md:mt-[30px] mt-[15px]'>
            {
                toggle ? <AiRecipeItem recipeList={recipeList} /> :
                (dataFetched && <NutritionItem recipeList={recipeList} ingredients={ingredients} recipeInfo={recipeInfo} />)
            }
        </div>
    )

    const renderInitialStatus = () => (
        <div className='min-h-[65vh] text-center md:min-h-[70vh] flex flex-col items-center justify-center w-[100%]'>
            <img src='/search-recipe-img.jpg' alt='search recipe' className='md:w-[35%] w-[90%]' />
            <p className='md:text-[23px] text-[20px] mt-2 text-[#474747] font-bold font-["Roboto"] '>Search recipes by giving nutritional values</p>
        </div>
    )

    const renderNoResultsFound = () => (
        <div className='min-h-[65vh] text-center md:min-h-[70vh] flex flex-col items-center justify-center w-[100%]'>
            <img src='/no-results-found.jpg' alt='search recipe' className='md:w-[35%] w-[90%]' />
            <p className='md:text-[23px] text-[20px] mt-[-35px] text-[#474747] font-bold font-["Roboto"] '>Oops! No Recipes Found</p>
            <p className='md:text-[14px] text-[12px] mt-1 text-[#7c7c7d] font-["Roboto"] '>Try searching with different nutritional values</p>
        </div>
    )

    const renderFailure = () => (
        <div className='min-h-[65vh] text-center md:min-h-[70vh] flex flex-col items-center justify-center w-[100%]'>
            <img src='/unauthorized-img.jpg' alt='search recipe' className='md:w-[32%] w-[90%]' />
            <p className='md:text-[23px] text-[20px] mt-[0px] text-[#474747] font-bold font-["Roboto"] '>Oops! Something Went Wrong!</p>
            <button type='button' onClick={searchWithSpoon} className='bg-[#e26310] text-[white] text-[13px] rounded px-[15px] mt-[10px] py-[6px] font-[500] font-["Roboto"] '>Search Again</button>
        </div>
    )

    const renderLoader = () => (
        <div className="md:h-[75vh] h-[67vh] flex flex-col items-center justify-center ">
            <MagnifyingGlass
                visible={true}
                height="70"
                width="70"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor = '#c0efff'
                color = '#e26310'
            />
            <p className='text-[16px] font-["Roboto"] text-[#606060]'>Cooking...</p>
        </div>
    )

    const renderAllSections = () => {
        switch (apiStatus) {
            case apiStatusConstants.initial:
                return renderInitialStatus()
            case apiStatusConstants.inProgress:
                return renderLoader()
            case apiStatusConstants.success:
                return renderSearchResults()
            case apiStatusConstants.notFound:
                return renderNoResultsFound()
            case apiStatusConstants.failure:
                return renderFailure()
            default:
                return null
        }
    }

    const AccordianText = `Give the expected nutritional values in the respective nutrition input boxes, Each nutrition contains two input boxes, the min box refers to minimum nutrition value and max box refers to maximum nutrition value. <br /> <br /> Ex: Carbs: min - 20, max - 10 <br /> <br /> Note: For best results try to give atleast 4 types of nutritional values, such as carbs, calories, fat, protien, etc..`

    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    return (
        <>
            <NavBar />
            <div className="w-[100%] min-h-[100vh] md:px-[50px] p-[20px] pt-[90px] flex flex-col items-center ">
                <div className='flex md:flex-row flex-col w-[100%] justify-center items-center md:items-start'>
                    <HowItWorks AccordianText={AccordianText} />
                    <div className='flex flex-row items-center md:ml-3'>
                        <Switch {...label} checked={toggle} onClick={isChecked}  color="warning" id='toggle' label="some" className='z-[-10]' />
                        <label htmlFor='toggle' className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>Ai Search</label>
                    </div>
                </div>
                <div className='flex items-center mt-3 flex-wrap justify-center md:justify-start'>
                    <div className='text-center'>
                        <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>CARBS</h1>
                        <div className='flex items-center'>
                            <input type="number" placeholder="Min" value={minCarbs} onChange={onChangeMinCarbs} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                            <input type="number" placeholder="Max" value={maxCarbs} onChange={onChangeMaxCarbs} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                        </div>
                    </div>
                    <div className='w-[0.5px] h-[80px] border-[0.5px] bg-[#ababab] mx-2'></div>
                    <div className='text-center'>
                        <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>PROTIEN</h1>
                        <div className='flex items-center'>
                            <input type="number" placeholder="Min" value={minProtein} onChange={onChangeMinProtein} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                            <input type="number" placeholder="Max" value={maxProtein} onChange={onChangeMaxProtein} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                        </div>
                    </div>
                    <div className='w-[0.5px] h-[80px] border-[0.5px] bg-[#ababab] mx-2'></div>
                    <div className='text-center'>
                        <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>CALORIES</h1>
                        <div className='flex items-center'>
                            <input type="number" placeholder="Min" value={minCalories} onChange={onChangeMinCalories} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2"  />
                            <input type="number" placeholder="Max" value={maxCalories} onChange={onChangeMaxCalories} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                        </div>
                    </div>
                    <div className='w-[0.5px] h-[80px] border-[0.5px] bg-[#ababab] mx-2'></div>
                    <div className='text-center'>
                        <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>FAT</h1>
                        <div className='flex items-center'>
                            <input type="number" placeholder="Min" value={minFat} onChange={onChangeMinFat} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                            <input type="number" placeholder="Max" value={maxFat} onChange={onChangeMaxFat} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                        </div>
                    </div>
                    <div className='w-[0.5px] h-[80px] border-[0.5px] bg-[#ababab] mx-2'></div>
                    <div className='text-center'>
                        <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>CHOLESTEROL</h1>
                        <div className='flex items-center'>
                            <input type="number" placeholder="Min" value={minCholesterol} onChange={onChangeMinCholesterol} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2"/>
                            <input type="number" placeholder="Max" value={maxCholesterol} onChange={onChangeMaxCholesterol} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2"/>
                        </div>
                    </div>
                    <div className='w-[0.5px] h-[80px] border-[0.5px] bg-[#ababab] mx-2'></div>
                    <div className='text-center'>
                        <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>FIBER</h1>
                        <div className='flex items-center'>
                            <input type="number" placeholder="Min" value={minFiber} onChange={onChangeMinFiber} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                            <input type="number" placeholder="Max" value={maxFiber} onChange={onChangeMaxFiber} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                        </div>
                    </div>
                    <div className='w-[0.5px] h-[80px] border-[0.5px] bg-[#ababab] mx-2'></div>
                    <div className='text-center'>
                        <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>SUGAR</h1>
                        <div className='flex items-center'>
                            <input type="number" placeholder="Min" value={minSugar} onChange={onChangeMinSugar} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                            <input type="number" placeholder="Max" value={maxSugar} onChange={onChangeMaxSugar} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                        </div>
                    </div>
                    <div className='w-[0.5px] h-[80px] border-[0.5px] bg-[#ababab] mx-2'></div>
                    <div className='text-center'>
                        <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>VITAMIN</h1>
                        <div className='flex items-center'>
                            <input type="number" placeholder="Min" value={minVitamin} onChange={onChangeMinVitamin} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                            <input type="number" placeholder="Max" value={maxVitamin} onChange={onChangeMaxVitamin} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                        </div>
                    </div>
                    <div className='w-[0.5px] h-[80px] border-[0.5px] bg-[#ababab] mx-2'></div>
                    <div className='text-center'>
                        <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>IRON</h1>
                        <div className='flex items-center'>
                            <input type="number" placeholder="Min" value={minIron} onChange={onChangeMinIron} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                            <input type="number" placeholder="Max" value={maxIron} onChange={onChangeMaxIron} className="md:w-[40px] w-[35px] h-[30px] text-[13px] border-[1px] border-[solid] border-[gray] rounded-[5px] md:h-[35px] outline-none pl-1 md:text-[15px] font-['Roboto'] m-2" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center w-[100%] '>
                    <div className='flex items-center w-[95%] md:w-auto justify-evenly mt-3 md:mt-auto md:justify-start '>
                        <button type='button' onClick={clearFilters} className='flex items-center cursor-pointer m-2 bg-[white] border-[#e26310] border-solid border-[1px] text-[14px] font-[600] font-["Roboto"] h-[35px] px-[15px] rounded-[6px] text-[#e26310] ' >
                            Clear
                            <FcClearFilters className='text-[15px] text-[white] ml-[3px]' />
                        </button>
                        <button type='button' disabled={circle} onClick={onClickSearch} className='flex items-center justify-center cursor-pointer m-2 bg-[#e26310] text-[14px] font-[500] font-["Roboto"] h-[35px] w-[85px] rounded-[6px] text-[white] ' >
                            {
                                circle ? 
                                (<Oval
                                height={20}
                                width={20}
                                color="#ffffff"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#ffffff"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                                />) :
                                (<span className='flex items-center'>
                                    Search
                                    <BsSearch className='text-[13px] text-[white] ml-[3px]' />
                                </span>)
                            }
                        </button>
                        {
                            toggle &&
                            <select onChange={onChangeLang} className=' bg-transparent md:ml-[8px] ml-2 w-[75px] pl-[5px] text-[15px] border-[1px] border-[solid] border-[gray] rounded-lg h-[35px] outline-none'>
                                {languageList.map(eachItem => (<option key={eachItem} value={eachItem}>{eachItem}</option>))}
                            </select>
                        }
                    </div>
                </div>
                {renderAllSections()}
            </div>
        </>
    )
}

export default SearchByNutritionPage