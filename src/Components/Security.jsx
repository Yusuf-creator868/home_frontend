import React from "react";
import security from "../assets/0001.jpg"
import { FaChevronRight } from "react-icons/fa";

const Security = () => {
      return(
            <div className="flex flex-col justify-center sm:flex-row items-center max-w-[1100px] mx-auto p-4 gap-2 mb-16">
                  <div className="flex flex-col gap-5">
                        <h3 className="text-gray-500 ">Security</h3>
                        <h1 className="text-4xl font-bold mx-auto">Safe transactions from start to finish</h1>
                        <p className="text-gray-500 mx-auto">We protect your money and your privacy. Our secure messaging system keeps all
                              conversations confidential, and our escrow service ensures both parties are protected.
                        </p>
                        <div className="space-x-10">
                              <button className="border-2 px-4 py-2 cursor-pointer">Discover</button>
                              <button className="hover:underline cursor-pointer">Learn</button>
                        </div>
                  </div>
                  <div>
                        <img src={security} alt="security" className="w-[1100px] object-cover" />
                  </div>
            </div>
      )
}

export default Security