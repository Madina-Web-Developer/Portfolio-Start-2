import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { IoLogoGoogle, IoLogoLinkedin } from 'react-icons/io5'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
  <>
  
  
  
  
  <div className="mt-[378px] pb-12 bg-gradient-to-r from-[#474747] to-[#222222]">
                <div className="container">
                    <div className="">
                        <div className="">
                            <div className="">


                                <div className=" relative">
                                    <div className="  absolute bottom-[-250px] left-0 mx-16 bg-gradient-to-r from-[#474747] to-[#222222] p-8 flex justify-between ">
                                        <img src="imgs/fimg.png" alt="" className="" />
                                        <div className="">
                                        <h2 className=" text-[46px] text-[#fff] font-semibold font-popins w-[500px]  ">Meet and talk with our best architecture</h2> 
                                        <p className=" text-[18px] font-medium font-popins text-[#c4c4c4] w-[470px] my-9 ">All our teams are professional and competent in their fields and will help you realize your dream building with the excellent result.</p>
                                        <div className=" flex gap-9 flex-row-reverse ">
                                        <Link to='' className=" h-[50px] w-[50px] bg-blue-700 text-white flex items-center justify-center ">
                                        <FaArrowRightLong />
                                        </Link>
                                        <Link to='' className=" h-[50px] w-[50px]  text-white flex items-center justify-center ">
                                        < FaArrowLeftLong/>
                                        </Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className=" flex justify-between items-center gap-16 mt-20 pt-[420px] ">
                                    <div className="">
                                    <h2 className=" text-[#fff] font-popins font-semibold text-[18px] my-[30px]   ">General Project</h2>
                                    <p className=" text-[16px] text-[#c4c4c4] font-popins font-medium w-[600px] mb-[30px]  ">is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.</p>
                                        <div className="flex gap-2">
                                            <Link to='' className=" h-[44px] w-[44px] bg-[#195b81] rounded-full flex items-center justify-center text-white text-[25px] ">
                                            <IoLogoGoogle  />
                                            </Link>
                                            <Link to='' className=" h-[44px] w-[44px] bg-[#195b81] rounded-full flex items-center justify-center text-white text-[25px] ">
                                            <FaTwitter/>
                                            </Link>
                                            <Link to='' className=" h-[44px] w-[44px] bg-[#195b81] rounded-full flex items-center justify-center text-white text-[25px] ">
                                            <FaInstagram  />
                                            </Link>
                                            <Link to='' className=" h-[44px] w-[44px] bg-[#195b81] rounded-full flex items-center justify-center text-white text-[25px] ">
                                            <IoLogoLinkedin />
                                            </Link>

                                        </div>
                                    </div>
                                    <div className=" flex gap-16   ">
                                        <div className=" flex flex-col gap-3 ">
                                            <h2 className=" text-[#fff] font-popins font-bold text-[18px]  ">Company</h2>
                                            <Link to='' className="text-[16px] text-[#fff] font-popins font-normal">About</Link>
                                            <Link to='' className="text-[16px] text-[#fff] font-popins font-normal">How it Works</Link>
                                            <Link to='' className="text-[16px] text-[#fff] font-popins font-normal">Term</Link>
                                            <Link to='' className="text-[16px] text-[#fff] font-popins font-normal">Privacy Policy</Link>
                                        </div>
                                        <div className=" flex flex-col gap-3 ">
                                            <h2 className=" text-[#fff] font-popins font-bold text-[18px]  ">More</h2>
                                            <Link to='' className="text-[16px] text-[#fff] font-popins font-normal">Documentation</Link>
                                            <Link to='' className="text-[16px] text-[#fff] font-popins font-normal">License</Link>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
  
  
  
  
  </>
  )
}

export default Footer