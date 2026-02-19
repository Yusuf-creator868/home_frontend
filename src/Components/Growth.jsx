import React from "react";
import activelistind from '../assets/0005.png'
import agents from "../assets/0007.jpg"
import transactions from "../assets/0006.png"

const Growth = () => {
      return(
            <div className="max-w-[1100px] mx-auto px-10 mb-20">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-20">

                        <div className="flex flex-col gap-7">
                              <h3>Growth</h3>
                              <h1 className="text-3xl font-bold mx-auto">Real numbers from real transactions</h1>
                        </div>

                        <div className="flex flex-col gap-10">
                              <h3 className="text-gray-500 mx-auto">Our platform has become the trusted choice for buyers, sellers, and renters nationwide. 
                                    We process thousands of transactions every month and continue to grows.
                              </h3>
                              <div className="flex gap-5">
                                    <button className="px-5 py-2 border-2 ">Explore</button>
                                    <button>Learn</button>
                              </div>
                        </div>

                  </div>


                        {/* here cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}



{/* RIGHT GRID (2x2 CARDS) */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">

              <div className="border-2 p-6 flex flex-col justify-between h-[200px]">
                <h1 className="text-5xl font-bold">50K+</h1>
                <div>
                  <h2 className="font-bold">Active listings</h2>
                  <p className="text-sm text-gray-500">Properties available for sale and rent.</p>
                </div>
              </div>

                <div className=" h-[200px] flex items-center justify-center bg-gray-100">
                  <img src={agents} alt="real estate" className="w-full h-[200px] object-cover"/>
                </div>

                  <div className="border-2 p-6 flex flex-col justify-between h-[200px]">
                   <h1 className="text-5xl font-bold">12K+</h1>
                  <div>
                    <h2 className="font-bold">Transactions closed</h2>
                    <p className="text-sm text-gray-500">Successful deals this year.</p>
                  </div>
                </div>
                
                <div className="h-[200px] flex items-center justify-center bg-gray-100">
                <img src={activelistind} alt="listing" className="w-full h-[200px] object-cover"/>
                </div>

              <div className="border-2 p-6 flex flex-col justify-between h-[200px]">
                <h1 className="text-5xl font-bold">8K+</h1>
                <div>
                  <h2 className="font-bold">Verified agents</h2>
                  <p className="text-sm text-gray-500">Licensed professionals ready to help.</p>
                </div>
              </div>

                  <div className="h-[200px] flex items-center justify-center bg-gray-100">
                    <img src={transactions} alt="transactions" className="w-full h-[200px] object-cover" />
                  </div>

                </div>
              </div>

          // </div>
      )
}

export default Growth