import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarResponsive({menu, setMenu}){
    return(
        <div className={`${menu ? "left-0" : "left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-[#fff] px-8 pb-16 text-[#000] md:hidden rounded-r-xl shadow-md`}>
           <div>
              <div className="flex items-center justify-start gap-3">
                  <FaUserCircle size={50} />
                  <div>
                    <h1>Olá User</h1>
                    <h1 className="text-sm text-slate-500">User Premium</h1>
                  </div>
              </div>
              <nav className="mt-12">
                <ul className="flex flex-col space-y-4 text-xl text-[#f00]">
                    <Link to='/'><li onClick={() => setMenu(false)}>Home</li></Link>
                    <Link to='/mens'><li onClick={() => setMenu(false)}>Homens</li></Link>
                    <Link to='/womens'><li onClick={() => setMenu(false)}>Mulheres</li></Link>
                    <Link to='/kids'><li onClick={() => setMenu(false)}>Kids</li></Link>
                    <Link to='/login'><li onClick={() => setMenu(false)}>Login</li></Link>
                </ul>
              </nav>
           </div>
           <div>
                <h1>Seja Bem-vindo ❤️</h1>
           </div>
        </div>
    )
}