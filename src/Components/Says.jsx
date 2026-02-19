import React from "react";
import Sayscards from "./SaysCards";

const Says = () => {
      return(
            <div className="max-w-[1200px] mx-auto mb-15">
                  <div className="flex flex-col items-center gap-3 mb-5">
                        <h1 className="text-3xl font-bold">What others say</h1>
                        <p>Real stories from people who found their place</p>
                  </div>
                  <div>
                        <Sayscards/>
                  </div>
            </div>
      )
}

export default Says