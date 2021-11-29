import {MdOutlineHome, MdCalendarToday, MdSearch, MdArrowDropDown} from "react-icons/md";
import {GiHamburgerMenu} from "react-icons/gi";

const Navhar = () => {

    return (
        <>
            <nav className="flex w-full h-12 px-5 items-center border-b justify-between fixed z-20" style={{backgroundColor: "white"}}>

                <h2 className="text-2xl font-semibold">Cheers.</h2>

                <div className="w-1/4 lg:block md:block sm:hidden h-full items-center justify-center p-2">
                    <div className="w-full h-full bg-white border rounded-full pl-3 flex pt-1 pr-1 pb-1">
                        <input className="w-full bg-transparent h-full focus:outline-none text-sm"
                            placeholder="Search"/>
                        <div className="bg-white w-8 h-full rounded-full cursor-pointer hover:bg-gray-200 flex items-center justify-center">
                            <MdSearch size={20}/>
                        </div>
                    </div>
                </div>

                <ul className="lg:flex md:flex sm:hidden justify-start w-1/4 h-full">
                    <li className="w-1/6 border-b-4 border-black h-full flex items-center justify-center cursor-pointer hover:bg-white">
                        <MdOutlineHome size={24}/>
                    </li>
                    <li className="w-1/6 h-full flex items-center justify-center border-b-4 border-transparent cursor-pointer hover:bg-white">
                        <MdCalendarToday size={19}/>
                    </li>
                </ul>

                <div className="items-center lg:flex md:flex sm:hidden">
                    <div className="rounded-full h-8 w-8 bg-black mr-2">
                        <span>
                            <i></i>
                        </span>
                    </div>
                    <p className="text-sm">Username</p>
                    <div className="flex items-center">
                        <div className="ml-3 w-6 h-6 cursor-pointer rounded-full hover:bg-gray-200">
                            <MdArrowDropDown size={24}/>
                        </div>
                    </div>
                </div>

                <div className="lg:hidden md:hidden sm:block">
                    <GiHamburgerMenu size={24}/>
                </div>
                
            </nav>
        </>
    )
}

export default Navhar;