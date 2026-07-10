// import React from 'react'
import { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>

      <nav className=" bg text-xl border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-7">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className='flex  items-center justify-between gap-x-8  '> 
            <Link to="/" className="flex items-center space-x-5 rtl:space-x-reverse">
             <span className="self-center lg:text-3xl font-bold whitespace-nowrap text-white md:text-2xl ">START FRAMEWORK
             </span>
           </Link>
           <button   onClick={toggleMenu} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-md text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 " aria-controls="navbar-dropdown" aria-expanded="false">
             <span className="sr-only">Open main menu</span>
             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
           </button>
          </div>
         
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto bg`} id="navbar-dropdown">
            <ul className="flex  flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <NavLink to="/about" className={(x) => x.isActive ? " bgBasic block py-2 px-3 text-white rounded-sm  md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : "block py-2 px-3 text-white rounded-sm  md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>ABOUT</NavLink>
              </li>
              <li>
              <NavLink to="/portfolio" className={(x) => x.isActive ? " bgBasic block py-2 px-3 text-white rounded-sm  md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : "block py-2 px-3 text-white rounded-sm  md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>PORTFOLIO</NavLink>
              </li>
      
              <li>
              <NavLink to="/contact" className={(x) => x.isActive ? " bgBasic block py-2 px-3 text-white rounded-sm  md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : "block py-2 px-3 text-white rounded-sm  md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>CONTACT</NavLink>
              </li>
   
          

            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
