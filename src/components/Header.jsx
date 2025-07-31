import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchData } from "./Hooks/useFetchData";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuClass = " rounded hover:bg-gray-400"
    // const data = useFetchData();
    const chapters = Object.keys(useFetchData());
    return (
    <header className="ml-[1rem]">
        <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-5 h-5" stroke="currentColor">
                {isOpen ? 
                    <path strokeWidth={3} d="M6 18L18 6M6 6l12 12"/>
                    :
                    <path strokeWidth={3} d="M4 6h16M4 12h16M4 18h16"/>
                }
            </svg>
        </button>
        <nav className={`transition duration-200 bg-gray-300 w-40 rounded ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <menu className={menuClass}>
                <Link to="/" className="">home</Link>
            </menu>
            {chapters.map((chapter,index)=>(
                <menu key={index} className={menuClass}>
                    <Link to={`/${chapter}`}>チャプター{index+1}</Link>
                </menu>
            ))}
        </nav>
    </header>
  )
}
