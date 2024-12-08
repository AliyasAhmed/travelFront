// import { appleImg, bagImg, searchImg } from "../utils/index.js"
import { MdTravelExplore } from "react-icons/md";
import {navLists} from '../src/constants/index'
import { appleImg, bagImg, logoImg, searchImg } from '../src/utils'
const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img src={logoImg} alt="apple " width={14} height={18} />

                <div className="flex flex-1 justify-center max-sm:hidden ">
                    {navLists.map((nav, i) => {
                        return (<div className="px-5 text-gray text-sm cursor-pointer hover:text-white transition-all" key={nav}>
                            {nav}
                        </div>)
                    })}
                </div>

                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search" width={18} height={18}/>
                    <img src={bagImg} alt="bag" width={18} height={18}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar