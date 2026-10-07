import { Link, NavLink } from "react-router";
import { useNavigate } from "react-router";
import { useState} from "react";
import { Search, TextAlignJustify, X } from "lucide-react"
import { useAuthContext } from "../context/authcontext";
function Header() {
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);
    const { user, setUser } = useAuthContext()
    function handelClick() {
        return setIsOpen(!isOpen)
    }
    function handelLog() {
        setUser(null)
        navigate("/login")
        localStorage.removeItem("user")
    }
    return (
        <header className="flex justify-between bg-[#010101] text-neutral-50 items-baseline w-full px-4 py-2.5 sm:px-8 lg:py-3.5 lg:px-15 relative">

            <div className="flex lg:gap-13 sm:gap-6 items-baseline ">
                <Link to="/" className="font-plex sm:text-3xl text-2xl font-semibold">Movie<span className="text-[#CF900C]">e</span></Link>
                <NavLink to="/genre/drama" className={({ isActive }) => `text-lg hidden sm:flex hover:text-[#CF900C] ${isActive ? "text-[#CF900C]" : "text-neutral-300"}`}>Drama</NavLink>
                <NavLink to="/genre/Comedy" className={({ isActive }) => `text-lg hidden sm:flex hover:text-[#CF900C] ${isActive ? "text-[#CF900C]" : "text-neutral-300"}`}>Comedy</NavLink>
                <NavLink to="/genre/Action" className={({ isActive }) => `text-lg hidden sm:flex hover:text-[#CF900C] ${isActive ? "text-[#CF900C]" : "text-neutral-300"}`}>Action</NavLink>
            </div>
            <div className="sm:flex sm:gap-4 hidden items-center">
                <NavLink to="/search" className={({ isActive }) => `sm:flex ${isActive ? "text-[#CF900C]" : "text-neutral-50"}`}><Search className="sm:size-5 text-neutral-300  hover:text-[#CF900C]" strokeWidth={3} /></NavLink>
                <span>Hello {user.name}</span>
                <button onClick={handelLog} className="text-base bg-[#CF900C] px-5 pt-1 pb-2 rounded-full text-black  hover:text-neutral-50">Logout</button>

            </div>
            <button onClick={handelClick} className="text-[#CF900C] self-center sm:hidden">
                {isOpen ? (<X className="size-5.5 rounded-sm" />) : (<TextAlignJustify className="size-5.5 rounded-sm" />)}
            </button>
            {
                isOpen && (
                    <div className=" absolute top-14 right-4 z-1 bg-[#CF900C] sm:hidden  flex flex-col text-left pl-2 pr-2.5 py-2.5 rounded-md gap-2">
                        <button className="text-sm text-zinc-900 font-medium ">Sing in</button>
                        <NavLink to="/search" className={({ isActive }) => ` flex text-sm items-baseline font-medium pl-1.5 ${isActive ? "text-[#CF900C]" : "text-zinc-900"}`}>Search</NavLink>
                        <NavLink to="/genre/drama" className={({ isActive }) => `text-sm  font-medium hover:text-[#CF900C] pl-1.5 ${isActive ? "text-zinc-50" : "text-zinc-900"}`}>Drama</NavLink>
                        <NavLink to="/genre/Comedy" className={({ isActive }) => `text-sm font-medium hover:text-[#CF900C] pl-1.5 ${isActive ? "text-zinc-50" : "text-zinc-900"}`}>Comedy</NavLink>
                        <NavLink to="/genre/Action" className={({ isActive }) => `text-sm font-medium hover:text-[#CF900C] pl-1.5 ${isActive ? "text-zinc-50" : "text-zinc-900"}`}>Action</NavLink>
                    </div>
                )
            }

        </header >
    )
};
export default Header;