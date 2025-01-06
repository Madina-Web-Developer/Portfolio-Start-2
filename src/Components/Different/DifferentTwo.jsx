import React from 'react'

import { AiOutlineFieldTime } from 'react-icons/ai'
import { CgToolbox } from 'react-icons/cg'
import { IoPricetagOutline, IoShieldCheckmarkOutline } from 'react-icons/io5'

const DifferentTwo = () => {
  return (
    <>
    
    
    <div className="pt-7">
        <div className="container flex justify-between ">
        
        {/* -------------------------------------------------- 1 */}
            <div className="single_Different">
                <div className=" h-[94px] w-[94px] bg-[#2386c07a] flex  items-center justify-center rounded-full animate-bounce hover:animate-none">
                    <div className=" h-[74px] w-[74px] bg-[#2387c0] rounded-full flex items-center justify-center text-white text-[30px] ">
                    <CgToolbox />
                    </div>
                </div>
                <h2 className=" text-[#242527] font-popins font-semibold text-[28px] my-[30px]   ">Experienced</h2>
                <p className=" text-[16px] text-[#c4c4c4] font-popins font-medium w-[240px]  ">Our experience of 25 years of building and making achievements in the world of development</p>
            </div>
        {/* -------------------------------------------------- */}
        {/* -------------------------------------------------- 2 */}
            <div className="single_Different">
                <div className=" h-[94px] w-[94px] bg-[#2386c07a] flex  items-center justify-center rounded-full animate-bounce hover:animate-none">
                    <div className=" h-[74px] w-[74px] bg-[#2387c0] rounded-full flex items-center justify-center text-white text-[30px] ">
                    <IoPricetagOutline  />
                    </div>
                </div>
                <h2 className=" text-[#242527] font-popins font-semibold text-[28px] my-[30px]   ">competitive price</h2>
                <p className=" text-[16px] text-[#c4c4c4] font-popins font-medium w-[240px]  ">The prices we offer you are very competitive without reducing the quality of the company's work in the slightest</p>
            </div>
        {/* -------------------------------------------------- */}
        {/* -------------------------------------------------- 3 */}
            <div className="single_Different">
                <div className=" h-[94px] w-[94px] bg-[#2386c07a] flex  items-center justify-center rounded-full animate-bounce hover:animate-none">
                    <div className=" h-[74px] w-[74px] bg-[#2387c0] rounded-full flex items-center justify-center text-white text-[30px] ">
                    <AiOutlineFieldTime />
                    </div>
                </div>
                <h2 className=" text-[#242527] font-popins font-semibold text-[28px] my-[30px]   ">On Time</h2>
                <p className=" text-[16px] text-[#c4c4c4] font-popins font-medium w-[240px]  ">We prioritize the quality of
                our work and finish it on time</p>
            </div>
        {/* -------------------------------------------------- */}
        {/* -------------------------------------------------- 4 */}
            <div className="single_Different">
                <div className=" h-[94px] w-[94px] bg-[#2386c07a] flex  items-center justify-center rounded-full animate-bounce hover:animate-none  ">
                    <div className=" h-[74px] w-[74px] bg-[#2387c0] rounded-full flex items-center justify-center text-white text-[30px] ">
                    <IoShieldCheckmarkOutline  />
                    </div>
                </div>
                <h2 className=" text-[#242527] font-popins font-semibold text-[28px] my-[30px]   ">Best Materials</h2>
                <p className=" text-[16px] text-[#c4c4c4] font-popins font-medium w-[240px]  ">The material determines the building itself so we recommend that you use the best & quality materials in its class.</p>
            </div>
        {/* -------------------------------------------------- */}
        </div>
    </div>
    
    
    
    </>
  )
}

export default DifferentTwo