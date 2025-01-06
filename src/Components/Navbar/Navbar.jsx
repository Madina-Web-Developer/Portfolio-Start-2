import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
   <>
   
   <div className=" absolute top-4 left-0 w-full z-50  ">
            <div className="container">
                <div className="">
                    <div className="flex items-center gap-6 sm:gap-9 md:gap-0 justify-between">
                        <img src="imgs/logo.png" alt="" className=" h-[30px] md:h-[66px] " />
                        <div className="menus">
                            <ul>
                                <li className=""><Link className=' hover:text-white transition-all duration-[.2s] '>Home</Link></li>
                                <li className=""><Link className=' hover:text-white transition-all duration-[.2s] '>Services</Link></li>
                                <li className=""><Link className=' hover:text-white transition-all duration-[.2s] '>Find a Team</Link></li>
                                <li className=""><Link className=' hover:text-white transition-all duration-[.2s] '>About Us</Link></li>
                                <li className=""><Link className=' hover:text-white transition-all duration-[.2s] '>Articles</Link></li>
                                <li className=""><Link className=' hover:text-white transition-all duration-[.2s] '>Portofolio</Link></li>
                                <li className=""><Link className=' hover:text-white transition-all duration-[.2s] '>Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
   
   
   </>
  )
}

export default Navbar