import {BsSearch} from 'react-icons/bs'
import Switch from '@mui/material/Switch';
import NavBar from "../HomePage/NavBar"
import {MagnifyingGlass, Oval} from 'react-loader-spinner'
import RecipeItem from '../SearchByRecipeName/RecipeItem'
import { useState } from 'react'
import Cookies from 'js-cookie'
import AiRecipeItem from '../AiRecipeGen/AiRecipeItem';
import { HowItWorksCuisine } from '../RecipeDetails/HowItWorks';

const apiStatusConstants = {
    initial: "INITIAL",
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    notFound: 'NOT_FOUND',
    failure: 'FAILURE'
}

const apiKey = process.env.REACT_APP_API_KEY;


const SearchByCuisinePage = () => {

    const cuisineList = [
        'Indian', 'South Indian Recipes', 'Andhra', 'Udupi', 'Mexican', 'Bengali Recipes', 'Punjabi', 'Chettinad',
        'Tamil Nadu', 'Maharashtrian Recipes', 'North Indian Recipes', 'Italian Recipes', 'Thai', 'Chinese',
        'Kerala Recipes', 'Gujarati Recipes?', 'Rajasthani', 'Asian', 'Middle Eastern', 'European', 'Kashmiri',
        'Karnataka', 'Lucknowi', 'Hyderabadi', 'Arab', 'Assamese', 'Bihari', 'Himachal', 'Cantonese', 'North East India Recipes',
        'Mughlai', 'Japanese', 'Mangalorean', 'Vietnamese', 'British', 'Greek', 'Nepalese', 'Oriya Recipes', 'French',
        'Indo Chinese', 'Sri Lankan', 'Haryana', 'Uttar Pradesh', 'Malvani', 'Indonesian', 'African', 'Korean', 'American',
        'Pakistani', 'Caribbean', 'Uttarakhand-North Kumaon', 'World Breakfast', 'Malaysian', 'Jewish', 'Burmese',
        'Afghan', 'Jharkhand', 'Nagaland'
    ]

    const aiCuisineList = [
        "Indian" ,
        'Andhra' ,
        'Telangana' ,
        'Tamil' ,
        'Kerala' ,
        'Punjabi' ,
        'Kashmiri' ,
        'Rajasthani' ,
        'Himachali' ,
        'Bengali' ,
        'Assamese' ,
        'Manipuri' ,
        "Gujarati" ,
        "Maharashtrian" ,
        'Chhattisgarhi' ,
        "Meghalayan" ,
        'Mizoram' ,
        "Arunachali" ,
        "Sikkimese" ,
        "Tripuri" ,
        "Italian" ,
        "Chinese" ,
        "Thai" ,
        "Japanese" ,
        "French" ,
        "Mexican" ,
        "Spanish" ,
        "Korean" ,
        "Greek" ,
        "Turkish" ,
        "Vietnamese" ,
        "Lebanese" ,
        "German" ,
        "Filipino" ,
        "Mediterranean" ,
        "Caribbean" ,
        "European" ,
        "Moroccan" ,
        "Russian" ,
        "Pakistani" ,
        "Australian" ,
        "Portuguese" ,
        "Peruvian"
    ]

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
        "Urdu",
        "Manipuri"
    ]

    const [recipeList, setRecipeList] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [cuisine, setCuisine] = useState("Indian")
    const [limit, setLimit] = useState(1)
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
    const [toggle, setToggle] = useState(false)
    const [language, setLanguage] = useState("English")
    const [circle, setCircle] = useState(false)

    const isChecked = () => {
        setApiStatus(apiStatusConstants.initial)
        setToggle(!toggle)
        setCircle(false)
    }

    const onChangeLang = event => {
        setLanguage(event.target.value)
    }


    let optionArr = []
    for(let i=2; i<=10; i++){
        optionArr.push(i)
    }

    const onChangeSearchInput = event => {
        setSearchInput(event.target.value)
    }

    const onChangeCuisine = event => {
        setCuisine(event.target.value)
    }

    const onChangeLimit = event => {
        setLimit(parseInt(event.target.value))
    }

    const onPressEnter = event => {
        if(event.key === "Enter"){
            onClickSearch()
        }
    }

    const searchRecipeDetails = async () => {
        if (searchInput === "") {
            return
        }
        setApiStatus(apiStatusConstants.inProgress)

        const jwtToken = Cookies.get("jwtToken")
        const query = `search_q=${searchInput}&cuisineType=${cuisine}&Limit=${limit}`
        // const url = `http://localhost:5000/cuisine/?${query}`
        const url = `https://reicpe-rover-backend.onrender.com/cuisine/?${query}`
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${jwtToken}`
            },
        }
        const response = await fetch(url, options)

        if (response.ok === true) {
            const recipeData = await response.json()
            if(recipeData.length === 0 ) {
                setApiStatus(apiStatusConstants.notFound)
                setCircle(false)
            } else if(toggle) {
                if(recipeData.choices[0].message.content === "Error") {
                    setApiStatus(apiStatusConstants.notFound)
                    setCircle(false)
                }
            } else {
                setApiStatus(apiStatusConstants.success)
                setRecipeList(recipeData)
                setCircle(false)
            }
        } else {
            setApiStatus(apiStatusConstants.failure)
            setCircle(false)
        }
    }


    const searchWithAI = async () => {

        setApiStatus(apiStatusConstants.inProgress)

        const prompt = `
            You are a recipe book now or you have a huge collection of recipes including various cuisines most preferably 
            Indian cuisines and, the recipes include title, ingredients, diet, cuisine, time to cook, instructions, nutritional 
            information if possible image link of that recipe, now I'm going search with recipe name(keyword search) along with 
            its cuisine, your work is to provide the relevant recipe (preferably Indian recipe) with title, cuisine, no_of_servings, 
            diet, ingredients, nutritional_info(calories, carbohydrates, protein, fat, fiber), time to cook, instructions and 
            image link if possible, I will search with both recipe name and cuisine. the response recipes in form of json data,
            even though user specifies certain lanugage, you should always give response in json format only and key name of the 
            json should be in english, only values should be in user specified language, 
            like title key should have title value, ingredient and instruction key should have array of ingredients and instructions, 
            and so on.. and also if user specify the response language, then you should give response in that language only like, 
            telugu, hindi, tamil etc.. if user searches with other than (recipe name(keyword) and cuisine) or if you unable to found any recipe 
            details then give response in english content as "Error" irrespective of user specified language, no other message needed.
        `;

        // const userQuery = `Ingredients: oil, water, mirchi powder, potatoes, tomatoes, pulses, salt, chilli, curry leaves, coriander, mustard seeds, Language: English`;
        const userQuery = `Recipe name: ${searchInput}, Cuisine: ${cuisine}, Language: ${language}`;
        
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
                console.log(JSON.parse(recipeData.choices[0].message.content))
                const AiRecipeData = JSON.parse(recipeData.choices[0].message.content)
                setApiStatus(apiStatusConstants.success)
                setRecipeList(AiRecipeData)
                setCircle(false)
            }
        } else {
            setApiStatus(apiStatusConstants.failure)
        }

    }

    const onClickSearch = () => {
        if (searchInput === ""){
            return
        }
        setCircle(true)
        if (toggle) {
            searchWithAI()
            console.log("Ai")
        } else {
            searchRecipeDetails()
            console.log("db")
        }
    }

    const renderSearchResults = () => (
        <ul className='w-[100%] md:w-[70%] md:mt-[50px] mt-[20px] '>
            {toggle ? <AiRecipeItem recipeList={recipeList} /> :
            recipeList.map(eachItem => <RecipeItem key={eachItem.Srno} recipeDetails={eachItem} /> )}
        </ul>
    )

    const renderInitialStatus = () => (
        <div className='min-h-[65vh] text-center md:min-h-[70vh] flex flex-col items-center justify-center w-[100%]'>
            <img src='/search-recipe-img.jpg' alt='search recipe' className='md:w-[35%] w-[90%]' />
            <p className='md:text-[23px] text-[20px] mt-2 text-[#474747] font-bold font-["Roboto"] '>Search recipes by their name and specific cuisine</p>
        </div>
    )

    const renderNoResultsFound = () => (
        <div className='min-h-[65vh] text-center md:min-h-[70vh] flex flex-col items-center justify-center w-[100%]'>
            <img src='/no-results-found.jpg' alt='search recipe' className='md:w-[35%] w-[90%]' />
            <p className='md:text-[23px] text-[20px] mt-[-35px] text-[#474747] font-bold font-["Roboto"] '>Oops! No Recipes Found</p>
            <p className='md:text-[14px] text-[12px] mt-1 text-[#7c7c7d] font-["Roboto"] '>Try searching with different name or cuisine</p>
        </div>
    )

    const renderFailure = () => (
        <div className='min-h-[65vh] text-center md:min-h-[70vh] flex flex-col items-center justify-center w-[100%]'>
            <img src='/unauthorized-img.jpg' alt='search recipe' className='md:w-[32%] w-[90%]' />
            <p className='md:text-[23px] text-[20px] mt-[0px] text-[#474747] font-bold font-["Roboto"] '>Oops! Something Went Wrong!</p>
            <button type='button' onClick={onClickSearch} className='bg-[#e26310] text-[white] text-[13px] rounded px-[15px] mt-[10px] py-[6px] font-[500] font-["Roboto"] '>Search Again</button>
        </div>
    )

    const renderLoader = () => (
        <div className="md:h-[75vh] h-[67vh] flex items-center flex-col justify-center ">
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

    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    return (
        <>
            <NavBar />
            <div className="w-[100%] min-h-[100vh] md:px-[50px] p-[20px] pt-[100px] flex flex-col items-center ">
                <HowItWorksCuisine />
                <div className='flex flex-col md:flex-row items-center justify-center w-[100%] '>
                    <div className="md:w-[50%] w-[95%] mt-4 md:mt-5 flex items-center border-[1px] border-[solid] border-[gray] rounded-lg h-[35px]">
                        <input type="search" placeholder="Search by name & cuisine" value={searchInput} onChange={onChangeSearchInput} onKeyDown={onPressEnter} className="w-[100%] border-0 outline-none pl-3 text-[15px] font-['Roboto'] " />
                        <button onClick={onClickSearch} disabled={circle} className="border-0 p-0 bg-[transparent] outline-none " type="button">
                            {
                                circle ? 
                                (<div className='mx-4'>
                                    <Oval
                                    height={18}
                                    width={18}
                                    color="darkgray"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#ffffff"
                                    strokeWidth={2}
                                    strokeWidthSecondary={5}
                                    />
                                </div>)
                                :
                                <BsSearch className='text-[18px] mx-4 text-[darkgray]' />
                            }
                        </button>
                    </div>
                    <div className='flex items-center w-[95%] md:w-auto justify-evenly mt-3 md:mt-auto md:justify-start '>
                        <select onChange={onChangeCuisine} className='bg-transparent w-[80px] pl-[5px] text-[15px] border-[1px] border-[solid] border-[gray] rounded-lg md:mx-5 mx-0 h-[35px] outline-none'>
                            <option value="">Cuisine</option>
                            {
                                !toggle ?
                                cuisineList.map(eachItem => (<option key={eachItem} value={eachItem}>{eachItem}</option>))
                                :
                                aiCuisineList.map(eachItem => (<option key={eachItem} value={eachItem}>{eachItem}</option>))
                            }
                        </select>
                        { 
                            !toggle && 
                            <select onChange={onChangeLimit} className='bg-transparent w-[65px] pl-[5px] text-[15px] border-[1px] border-[solid] border-[gray] rounded-lg h-[35px] outline-none'>
                                <option value={1}>Limit</option>
                                {optionArr.map(eachItem => <option key={eachItem} value={eachItem} >{eachItem}</option>)}
                            </select>
                        }
                        {
                            toggle &&
                            <select onChange={onChangeLang} className='bg-transparent w-[75px] pl-[5px] text-[15px] border-[1px] border-[solid] border-[gray] rounded-lg h-[35px] outline-none'>
                                {languageList.map(eachItem => (<option key={eachItem} value={eachItem}>{eachItem}</option>))}
                            </select>
                        }
                        <div className='flex flex-row items-center md:ml-3'>
                            <Switch {...label} checked={toggle} onClick={isChecked} id='toggle'  color="warning" label="some" />
                            <label className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]' htmlFor='toggle' >Ai Search</label>
                        </div>
                    </div>
                </div>
                {renderAllSections()}
            </div>
        </>
    )
}

export default SearchByCuisinePage