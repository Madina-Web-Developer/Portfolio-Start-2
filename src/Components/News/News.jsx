import React, { useState } from 'react'



    const News = () => {
        const [Read, ShowRead] = useState(false);
    
        const HandleReadMore = () => {
            ShowRead(!Read);
        };
    
        return (
            <div className="mt-20">
                <div className="container">
                    <div className="">
                        <h2 className="text-[64px] font-popins text-[#242526] w-[800px]">
                            News & Update
                        </h2>
                        <div className="flex justify-between">
                            {/* News Item */}
                            <div className="w-[366px]">
                                <img src="imgs/n1.png" alt="" className="" />
                                <div className="ml-[10] flex items-center gap-4">
                                    <h2 className="text-[28px] font-semibold font-popins text-[#242527] w-[30px]">
                                        12 <span className=""></span>
                                    </h2>
                                    <h2 className="text-[16px] font-semibold font-popins text-[#242527] w-[250px]">
                                        Elements of Building
                                    </h2>
                                </div>
                                <div className="p-4">
                                <div className=" p-4 ">
                            <p className={`text-[#c4c4c4] ${
                                Read ? "" : "line-clamp-6"}`}>
                                Epoxy paint and epoxy floor contractor. Have you heard the two terms?
                                And what does that have to do with the construction of existing
                                buildings? Epoxy itself is included in the type of resin used in many
                                modern constructions Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, eveniet mollitia! ...
                            </p>
                            <button className="mt-2 text-blue-500 hover:underline" onClick={HandleReadMore} >
                                {Read ? "Read less" : "Read more"}
                            </button>
                            </div>
                    
                                    
                                </div>
                            </div>


                            <div className=" w-[366px] ">
                        <img src="imgs/n2.png" alt="" className="" />
                        <div className="ml-[1%] flex items-center gap-4">
                            <h2 className=" text-[28px] font-semibold font-popins text-[#242527] w-[30px]  ">12 <span className=' text-[18px]'>Jan</span></h2>
                            <h2 className=" text-[16px] font-semibold font-popins text-[#242527] w-[250px]  ">5 Right Steps in Warehouse Planning and Construction</h2>
                        </div>
                            <div className=" p-4 ">
                            <p className={`text-[#c4c4c4] ${
                                Read ? "" : "line-clamp-6"}`}>
                                Epoxy paint and epoxy floor contractor. Have you heard the two terms?
                                And what does that have to do with the construction of existing
                                buildings? Epoxy itself is included in the type of resin used in many
                                modern constructions Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, eveniet mollitia! ...
                            </p>
                            <button className="mt-2 text-blue-500 hover:underline" onClick={HandleReadMore} >
                                {Read ? "Read less" : "Read more"}
                            </button>
                            </div>
                        
                    </div>



                    <div className=" w-[366px] ">
                        <img src="imgs/n3.png" alt="" className="" />
                        <div className="ml-[1%] flex items-center gap-4">
                            <h2 className=" text-[28px] font-semibold font-popins text-[#242527] w-[30px]  ">12 <span className=' text-[18px]'>Jan</span></h2>
                            <h2 className=" text-[16px] font-semibold font-popins text-[#242527] w-[250px]  ">The Right Solution to Build a Sturdy Type 45 House</h2>
                        </div>
                            <div className=" p-4 ">
                            <p className={`text-[#c4c4c4] ${
                                Read ? "" : "line-clamp-3"}`}>
                                Epoxy paint and epoxy floor contractor. Have you heard the two terms?
                                And what does that have to do with the construction of existing
                                buildings? Epoxy itself is included in the type of resin used in many
                                modern constructions Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, eveniet mollitia! ...
                            </p>
                            <button className="mt-2 text-blue-500 hover:underline" onClick={HandleReadMore} >
                                {Read? "Read less" : "Read more"}
                            </button>
                            </div>
                        
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    export default News;
    