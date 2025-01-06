import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Meet = () => {
  return (
   <>
   
   <div className=" mt-40">
            <div className="container">
                <div className="">
                    <div className="flex justify-between items-center ">
                        <div className="relative ">
                            <img src="imgs/meet.png" alt="" className="" />
                            <div className=" absolute flex flex-col items-center top-[150px] left-[300px] bg-gradient-to-br from-[#474747] via-[#222222] to-[#222222] p-5  ">
                                <img src="imgs/meetr.png" alt="" className="" />
                                <h2 className="text-white mt-[28px] mb-[13px] font-popins font-semibold ">Dianne Russell</h2>
                                <p className=" font-popins text-[#E5E5E5] w-[233px] text-[14px]   ">More than 20 years of experience in the field architecture and has worked on project up to 100+</p>
                            </div>
                        </div>
                        <div className="">
                        <h2 className=" text-[46px] text-[#242527] font-semibold font-popins w-[500px]  ">Meet and talk with
                        our best architecture</h2> 
                        <p className=" text-[18px] font-medium font-popins text-[#c4c4c4] w-[470px] my-9 ">All our teams are professional and competent in their fields and will help you realize your dream building with the excellent result.</p>
                        <div className="butt flex gap-9">
                            <div className=" h-[64px] w-[196px] bg-gradient-to-r from-cyan-500 to-blue-500  flex items-center justify-center hover:animate-pulse "><Link to='' className=' text-white text-[16px] font-semibold '>See all team</Link>
                            </div>
                            <Link to='' className=' flex items-center gap-3 text-[18px] text-[#242527] font-semibold font-popins hover:text-blue-600  '>How it work <FaArrowRightLong />
                            </Link>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
   
   </>
  )
}

export default Meet