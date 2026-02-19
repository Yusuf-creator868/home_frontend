import React from "react";
import renter from "../assets/renter.png"
import realtor from "../assets/realtor.png"
import bus from "../assets/businessman.png"

const ChoosePage = () => {
      return(
            <div className="flex flex-col items-center justify-center mt-60 gap-5">
                  <h1 className="text-2xl font-bold">Your position?</h1>
                   <div className="flex items-center border-2 p-4 w-full max-w-[400px] rounded-2xl cursor-pointer gap-4 hover:shadow-lg transition">
                        <img className="w-10" src={renter} alt="renter" />
                         <h1>Renter/Buyer</h1>
                  </div>

                   <div className="flex items-center border-2 p-4 w-full max-w-[400px] rounded-2xl cursor-pointer gap-4 hover:shadow-lg transition">
                        <img className="w-10" src={realtor} alt="renter" />
                        <h1>Seller</h1>
                   </div>

                  <div className="flex items-center border-2 p-4 w-full max-w-[400px] rounded-2xl cursor-pointer gap-4 hover:shadow-lg transition">
                        <img className="w-10" src={bus} alt="renter" />
                         <h1>Agent</h1>
                   </div>
            </div>
      )
}


export default ChoosePage