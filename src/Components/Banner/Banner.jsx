import React from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
  return (
    <>
    
    <div className="">
            <div className="">
                <div className="">
                    <div className=" relative ">
                            <img src="imgs/banbg.png" alt="banbg" className=" w-full h-screen
                             " />
                        <div className="absolute md:top-[135px] top-[80px] left-0 w-full flex ">
                        {/* ------------------------------ */}
                            <div className=" container relative">
                                <h2 className=" text-[64px] font-popins text-white w-[650px] ">We Provide Architectural design and Construction</h2>
                                <p className=" text-[18px] text-[#c4c4c4] font-popins w-[570px] mt-[24px] mb-[40px] ">​More than 100 building and housing projects that we have built. The building owner chose us over other contractors in Jakarta, because our work is different</p>
                                  <div className=" h-[64px] w-[196px] bg-gradient-to-r from-cyan-500 to-blue-500  flex items-center justify-center hover:animate-pulse ">
                                        <Link to='' className=' text-white text-[16px] font-semibold '>Discover More</Link>
                                  </div>
                                  <div className=" flex gap-16 mt-7 ">
                            {/* --------------------------------- */}
                                    <div className="single_count">
                                        <div className=" flex items-center ">
                                        <CountUp end={300}  duration={5} className='text-white text-[36px] font-popins font-bold'  /><FaPlus className='text-[#2387c0] text-[26px] font-popins font-bold' />
                                        </div>
                                        <p className=' text-[18px] font-popins font-semibold text-[#c4c4c4] w-[10px]  ' >Happy Client</p>
                                    </div>
                            {/* --------------------------------- */}
                                    <div className="single_count">
                                        <div className=" flex items-center ">
                                        <CountUp end={900}  duration={5} className='text-white text-[36px] font-popins font-bold'  /><FaPlus className='text-[#2387c0] text-[26px] font-popins font-bold' />
                                        </div>
                                        <p className=' text-[18px] font-popins font-semibold text-[#c4c4c4] w-[10px]  ' >Amazing Projects</p>
                                    </div>
                            {/* --------------------------------- */}
                                    <div className="single_count">
                                        <div className=" flex items-center ">
                                        <CountUp end={20}  duration={5} className='text-white text-[36px] font-popins font-bold'  /><FaPlus className='text-[#2387c0] text-[26px] font-popins font-bold' />
                                        </div>
                                        <p className=' text-[18px] font-popins font-semibold text-[#c4c4c4] w-[10px]  ' >Awards Winning</p>
                                    </div>
                                  </div>
                                {/*  */}
                            </div>
                        <div className=" w-[600px] absolute bottom-[0] right-0 flex flex-col-reverse ">       
                    <div className="  flex gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-500 items-center p-8 ">
                        <div className="">
                            <p className="font-popins font-medium text-[18px] text-[white]">General</p>
                            <h2 className=" font-popins font-semibold text-[24px] text-[white] ">Project</h2>
                        </div>
                        <div className=""><img src="imgs/25y.png" alt="" className=" " /></div>
                        <p className=" font-popins font-normal text-[14px] text-white w-[296px] ">As a trusted general project that has been
operating for 25 years, our commitment is
always to prioritize our client satisfaction</p>
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

export default Banner