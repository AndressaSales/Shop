import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { MdShoppingCart } from "react-icons/md";
import { useContext, useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import NavbarResponsive from "./navbarResponsive";
import { Shopcontext } from "../Context/ShopContext";

export default function Navbar(){

    const [menu, setMenu] = useState(false)

    const toogleMenu = ()=>{
        setMenu(!menu)
    }

    const {totalcartItems} = useContext(Shopcontext)

    return(
        <div className="bg-[#fff] px-4 fixed w-full z-50 shadow-sm top-0 shadow-[#ccc]">
            <div className="max-w-7xl mx-auto py-2 flex px-5 justify-between items-center">
                <Link to='/'>
                    <img src={logo} alt="logo" className="md:w-24 w-20" />
                </Link>

                <div className="flex items-center gap-5">
                    <nav className="hidden md:block">
                        <ul className="flex items-center font-semibold text-xl gap-7">
                            <Link className="hover:text-[#f00]" to='/'><li>Home</li></Link>
                            <Link className="hover:text-[#f00]" to='/mens'><li>Homens</li></Link>
                            <Link className="hover:text-[#f00]" to='/womens'><li>Mulheres</li></Link>
                            <Link className="hover:text-[#f00]" to='/kids'><li>Kids</li></Link>
                            <Link to='/login'><button className="bg-[#f00] text-[#fff] px-4 rounded-[10px] py-1 hover:bg-transparent hover:text-[#f00]">Login</button></Link>
                         </ul>
                    </nav>
                    <Link className="relative w-10" to='/cart'>
                        <MdShoppingCart size={25} />
                        <div className="bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-[#fff]">{totalcartItems()}</div>
                    </Link>

                    {
                        menu ? (
                            <HiMenuAlt1 onClick={toogleMenu} className="cursor-pointer transition-all md:hidden" size={30} />
                        ) : (
                            <HiMenuAlt3 className="cursor-pointer transition-all md:hidden" onClick={toogleMenu} size={30} />
                        )
                    }
                </div>
            </div>
            <NavbarResponsive menu={menu} setMenu={setMenu} />
        </div>
    )
}