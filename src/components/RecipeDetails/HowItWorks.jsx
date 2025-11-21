import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { useState } from 'react'

export const HowItWorks = ({AccordianText}) => {
    const [showAccordian, setShowAccordian] = useState(false)

    const onClickAccordian = () => {
        setShowAccordian(!showAccordian)
    }
    const showAccordianText = !showAccordian ? "hidden" : null


    return (
        <div className='md:w-[60%] w-[95%] border-solid border-[#afafaf] border-[1px] rounded-md py-[8px] px-4 cursor-pointer' >
            <div onClick={onClickAccordian} className='w-[100%] flex justify-between items-center'>
                <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>How it works?</h1>
                {
                    showAccordian ? <BsChevronUp className='text-[#606060] text-[14px]' /> : <BsChevronDown className='text-[#606060] text-[14px]' />
                }
            </div>
            <p className={`${showAccordianText} mt-4 md:text-[15px] text-[13px] font-["Roboto"] text-[#606060]`}>
                Give the expected nutritional values in the respective nutrition input boxes, Each nutrition contains two input boxes,
                the min box refers to minimum nutrition value and max box refers to maximum nutrition value.
                <br />
                <br />
                Ex: Carbs: min - 10, max - 20
                <br />
                <br />
                Note: For best results try to give atleast 4 types of nutritional values, such as carbs, calories, fat, protien, etc..
            </p>
        </div>
    )
}

export const HowItWorksName = ({AccordianText}) => {
    const [showAccordian, setShowAccordian] = useState(false)

    const onClickAccordian = () => {
        setShowAccordian(!showAccordian)
    }
    const showAccordianText = !showAccordian ? "hidden" : null


    return (
        <div className='md:w-[60%] w-[95%] border-solid border-[#afafaf] border-[1px] rounded-md py-[8px] px-4 cursor-pointer' >
            <div onClick={onClickAccordian} className='w-[100%] flex justify-between items-center'>
                <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>How it works?</h1>
                {
                    showAccordian ? <BsChevronUp className='text-[#606060] text-[14px]' /> : <BsChevronDown className='text-[#606060] text-[14px]' />
                }
            </div>
            <p className={`${showAccordianText} mt-4 md:text-[15px] text-[13px] font-["Roboto"] text-[#606060]`}>
            Just like traditional search, simply type the recipe name in the search box. <br />
            Ex: Biryani..
            </p>
        </div>
    )
}

export const HowItWorksIngredients = ({AccordianText}) => {
    const [showAccordian, setShowAccordian] = useState(false)

    const onClickAccordian = () => {
        setShowAccordian(!showAccordian)
    }
    const showAccordianText = !showAccordian ? "hidden" : null


    return (
        <div className='md:w-[60%] w-[95%] border-solid border-[#afafaf] border-[1px] rounded-md py-[8px] px-4 cursor-pointer' >
            <div onClick={onClickAccordian} className='w-[100%] flex justify-between items-center'>
                <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>How it works?</h1>
                {
                    showAccordian ? <BsChevronUp className='text-[#606060] text-[14px]' /> : <BsChevronDown className='text-[#606060] text-[14px]' />
                }
            </div>
            <p className={`${showAccordianText} mt-4 md:text-[15px] text-[13px] font-["Roboto"] text-[#606060]`}>
                Type list of Ingredients in the below search box, separate each Ingredient with comma (,). <br />
                Ex: chicken, oil, salt, water, etc...
            </p>
        </div>
    )
}

export const HowItWorksCuisine = ({AccordianText}) => {
    const [showAccordian, setShowAccordian] = useState(false)

    const onClickAccordian = () => {
        setShowAccordian(!showAccordian)
    }
    const showAccordianText = !showAccordian ? "hidden" : null


    return (
        <div className='md:w-[60%] w-[95%] border-solid border-[#afafaf] border-[1px] rounded-md py-[8px] px-4 cursor-pointer' >
            <div onClick={onClickAccordian} className='w-[100%] flex justify-between items-center'>
                <h1 className='md:text-[15px] text-[13px] font-bold font-["Roboto"] text-[#606060]'>How it works?</h1>
                {
                    showAccordian ? <BsChevronUp className='text-[#606060] text-[14px]' /> : <BsChevronDown className='text-[#606060] text-[14px]' />
                }
            </div>
            <p className={`${showAccordianText} mt-4 md:text-[15px] text-[13px] font-["Roboto"] text-[#606060]`}>
            Just like traditional search, simply type the recipe name in the search box and select a cuisine type from drop down. <br />
            Ex: Biryani..
            </p>
        </div>
    )
}