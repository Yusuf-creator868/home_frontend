import React from "react";
import listing from "../assets/002.png"
import homelocation from "../assets/003.jpg"
import realtors from "../assets/004.jpg"
import { FaChevronRight } from "react-icons/fa";


const Features = () => {
      return(
            <div className="max-w-[1400px] mx-auto px-10 mb-20">

                  <div className="flex flex-col justify-center items-center gap-2 mb-10">
                        <h3 className="text-gray-400">Features</h3>
                        <h1 className="text-4xl font-bold">Everything you need</h1>
                        <h2 className="text-gray-400">We built this platform to make real estate simple and transparent.</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

                        <div className="flex flex-col justify-start max-w-[300px] w-full mx-auto h-[500px] border-3">
                              <div className="w-full h-80">
                                    <img src={listing} alt="" 
                                          className="w-full h-[300px] object-cover"
                                    />
                              </div>

                              <div className="flex flex-col gap-1 mx-5">
                                    <h3 className="font-bold text-[12px]">Listing</h3>
                                    <h1 className="text-2xl font-bold">List your property in minutes</h1><br />
                                    <h2 className="text-[12px] ">Upload photos, set your price, and reach buyers instantly.</h2>
                                    <div className="flex items-center gap-5">
                                          <h2>Learn</h2>
                                          <button><FaChevronRight/></button>
                                    </div>
                              </div>
                        </div>

                        <div className="flex flex-col justify-start max-w-[300px] w-full mx-auto h-[500px] border-3">
                              <div className="w-full h-80">
                                    <img src={homelocation} alt="" 
                                          className="w-full h-[300px] object-cover"
                                    />
                              </div>

                              <div className="flex flex-col gap-1 mx-5">
                                    <h3 className="font-bold text-[12px]">Searching</h3>
                                    <h1 className="text-2xl font-bold">Find your dream home easily</h1><br />
                                    <h2 className="text-[12px] ">Filter by location, price, and features to narrow your search.</h2>
                                    <div className="flex items-center gap-5">
                                          <h2>Learn</h2>
                                          <button><FaChevronRight/></button>
                                    </div>
                              </div>
                        </div>
                        
                        <div className="flex flex-col justify-start max-w-[300px] w-full mx-auto h-[500px] border-3">
                              <div className="w-full h-80">
                                    <img src={realtors} alt="" 
                                          className="w-full h-[300px] object-cover"
                                    />
                              </div>

                              <div className="flex flex-col gap-1 mx-5">
                                    <h3 className="font-bold text-[12px]">Verified</h3>
                                    <h1 className="text-2xl font-bold">Work with trusted realtors</h1><br />
                                    <h2 className="text-[12px] ">All agents on our platform are verified and licensed professionals.</h2>
                                    <div className="flex items-center gap-5">
                                          <h2>Learn</h2>
                                          <button><FaChevronRight/></button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Features