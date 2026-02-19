import React from "react";
import defaultpic from "../assets/default.avif"

const Join = () => {
      return(
            <div className="flex flex-col items-center max-w-[1200px] mx-auto gap-4 p-20">
                  <h1 className="text-4xl font-bold mx-auto">Start your real estate journey</h1>
                  <p className="text-[15px] mx-auto">Join thousands who've already found their next home or sold theirs</p>
                  <div className="flex gap-10 mb-10">
                        <button className="px-5 py-2 bg-blue-900 text-white">Begin</button>
                        <button className="px-5 py-2 border-2 border-blue-900 text-blue-900">Learn</button>
                  </div>

                  <img className=" mx-auto" src={defaultpic} alt="" />
            </div>
      )
}

export default Join