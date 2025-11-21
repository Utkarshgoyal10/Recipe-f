import {RxCross2} from 'react-icons/rx'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

const SideNavBar = () => {
    const {setOpenLogin} = useContext(AuthContext)
    return(
        <nav className="flex items-center mb-[10px]">
            <RxCross2 className='text-[25px] cursor-pointer' onClick={() => setOpenLogin(false)} />
            <p className='text-[#e26310] text-[18px] font-[500] ml-[10px]'>Recipe Rover</p>
        </nav>
    )
}

export default SideNavBar