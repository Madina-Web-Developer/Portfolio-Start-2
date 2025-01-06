import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <>
    
    <div className="mt-20">
            <div className="container">
            <h2 className=" text-[64px] font-popins text-[#242526] w-[450px] ">Our collection
            best project</h2>
                <div className="">
                    <div className="flex justify-between items-center gap-4">
                {/* --------------------------------------------- */}
                    <div class="group relative overflow-hidden">
                    <img src="imgs/c1.png" alt="Building" class="" />
                    
                    <div class="absolute bottom-0 left-5 w-[240px] bg-white p-4 transform translate-y-full group-hover:translate-y-[-8px] transition-transform duration-300 ">
                        <div className=" flex items-center gap-8 ">
                        <div className="">
                        <h3 class="text-lg font-semibold text-gray-800">Treasury Tower</h3>
                        <p class="text-sm text-gray-500">Project Completed</p>
                        </div> 
                        <Link to='' className=" h-[50px] w-[50px] bg-blue-700 text-white flex items-center justify-center ">
                        <FaArrowRightLong />
                        </Link>
                        </div>
                    </div>
                    </div>
                {/* --------------------------------------------- */}
                {/* --------------------------------------------- */}
                    <div class="group relative overflow-hidden">
                    <img src="imgs/c2.png" alt="Building" class="" />
                    
                    <div class="absolute bottom-0 left-5 w-[240px] bg-white p-4 transform translate-y-full group-hover:translate-y-[-8px] transition-transform duration-300 ">
                        <div className=" flex items-center gap-8 ">
                        <div className="">
                        <h3 class="text-lg font-semibold text-gray-800">Treasury Tower</h3>
                        <p class="text-sm text-gray-500">Project Completed</p>
                        </div> 
                        <Link to='' className=" h-[50px] w-[50px] bg-blue-700 text-white flex items-center justify-center ">
                        <FaArrowRightLong />
                        </Link>
                        </div>
                    </div>
                    </div>
                {/* --------------------------------------------- */}
                {/* --------------------------------------------- */}
                    <div class="group relative overflow-hidden">
                    <img src="imgs/c3.png" alt="Building" class="" />
                    
                    <div class="absolute bottom-0 left-5 w-[240px] bg-white p-4 transform translate-y-full group-hover:translate-y-[-8px] transition-transform duration-300 ">
                        <div className=" flex items-center gap-8 ">
                        <div className="">
                        <h3 class="text-lg font-semibold text-gray-800">Treasury Tower</h3>
                        <p class="text-sm text-gray-500">Project Completed</p>
                        </div> 
                        <Link to='' className=" h-[50px] w-[50px] bg-blue-700 text-white flex items-center justify-center ">
                        <FaArrowRightLong />
                        </Link>
                        </div>
                    </div>
                    </div>
                {/* --------------------------------------------- */}
                {/* --------------------------------------------- */}
                    <div class="group relative overflow-hidden">
                    <img src="imgs/c4.png" alt="Building" class="" />
                    
                    <div class="absolute bottom-0 left-5 w-[240px] bg-white p-4 transform translate-y-full group-hover:translate-y-[-8px] transition-transform duration-300 ">
                        <div className=" flex items-center gap-8 ">
                        <div className="">
                        <h3 class="text-lg font-semibold text-gray-800">Treasury Tower</h3>
                        <p class="text-sm text-gray-500">Project Completed</p>
                        </div> 
                        <Link to='' className=" h-[50px] w-[50px] bg-blue-700 text-white flex items-center justify-center ">
                        <FaArrowRightLong />
                        </Link>
                        </div>
                    </div>
                    </div>
                {/* --------------------------------------------- */}

                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Collection