import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {BsFillMoonFill} from "react-icons/bs"
import {useAppDispatch, useAppSelector} from "../../Hook";
import {getLanguage} from "../../store/Reducers/MovieSlice";

const Header = ({handleColor,handle}: any) => {
    const [value, setValue] = useState('')
    const [language, setLanguage] = useState('')
    const {lang} = useAppSelector(state => state.movie)
    const nav = useNavigate()
    const dispatch = useAppDispatch()
    const HandleClick = () => {
        nav(`/search-result/${value}`)
        setValue("")
    }
 const hadleDown = (e:any) => {
        if (e.key === "Enter") {
            nav(`/search-result/${value}`)
            setValue("")
        }
}
    const handleChange = (e:React.ChangeEvent<any>) => {
        setLanguage(e.target.value)
        console.log(e.target.value)
    }
    useEffect(() => {
        dispatch(getLanguage(language))
    },[language])
    console.log("Lang", lang)
    return (
        <header className={handle ? 'bg-black text-white rounded-2xl' : "bg-white text-black"}>
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to={'/'} className="border-black flex items-center">
                        <img className={handle ? 'rounded-3xl ' : "rounded-3xl "}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTje-lO1BEZoyiCGsbPrPDkfWrFKZyTpkHs3Hym2ELOAqniUp22B7pzYvUg5O2LOYjkUfU&usqp=CAU" width={80}
                             alt=""/>
                    </NavLink>
                    <button onClick={() => handleColor(handle)}>
                        <BsFillMoonFill className={handle ?'text-white' : "'text-black'"}/>
                    </button>

                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input value={value} onKeyDown={hadleDown} onChange={event => setValue(event.target.value)} type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                <button onClick={HandleClick} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                         id="mobile-menu    -2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to={'/Rated'}
                                   aria-current="page">Rated</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Popular'}>Popular</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Film'}>Film</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Basket'}>Basket</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Favorite'}>Favorite</NavLink>
                            </li>
                        </ul>
                    </div>
                    <select className='select' onChange={e => handleChange(e)} defaultValue={value}>
                        <option value="en-US">en</option>
                        <option value="ru-RU">ru</option>
                        <option value="fr-FR">fr</option>
                        <option value="kgz-KGZ">kgz</option>
                    </select>
                </div>
            </nav>
        </header>
    );
};

export default Header;