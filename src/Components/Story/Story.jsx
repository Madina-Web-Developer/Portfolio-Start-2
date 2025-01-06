import React from 'react'
import { Link } from 'react-router-dom'

const Story = () => {
  return (
    <>
    
    <div className="mt-24">
        <div className="container">
            <div className="">
                <div className="flex items-center justify-between">
                    <div className="">
                    <h2 className=" text-[64px] font-popins text-[#242526] w-[400px]  ">Our Story
                    Who we are</h2>
                                <p className=" text-[18px] text-[#c4c4c4] font-popins w-[570px] mt-[24px] mb-[40px] ">Established in 1992, PT. Wahana Cipta operates as a General Contracting company with a footprint that we have planted throughout Indonesia. Initially, we focused on construction in the field of residential housing development in Jakarta.  As the company grows, now we are present as a reliable...</p>
                                  <div className=" h-[64px] w-[196px] bg-gradient-to-r from-cyan-500 to-blue-500  flex items-center justify-center hover:animate-pulse ">
                                        <Link to='' className=' text-white text-[16px] font-semibold '>See More</Link>
                                  </div>
                    </div>
                    <img src="imgs/story.png" alt="" className="" />
                </div>
            </div>
        </div>
    </div>
    
    


    
    
    </>
  )
}

export default Story