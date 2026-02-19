import React from "react";
import selfimg from "../assets/self.jpg"


const Sayscards = () => {
      return(
            <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="flex flex-col items-center gap-3 max-w-[300px] border-2 p-3">
                        <h1>Logo</h1>
                        <h1 className="font-bold text-center">I sold my hose in two weeks. The platform made it painless.</h1>
                        <img className="w-[80px] h-[80px] rounded-full" src={selfimg} alt="photo"/>
                        <h1>Roy Chen</h1>
                        <h2>Seller, San Francisco</h2>
                  </div>
                  <div className="flex flex-col items-center gap-3 max-w-[300px] border-2 p-3">
                        <h1>Logo</h1>
                        <h1 className="font-bold text-center">I sold my hose in two weeks. The platform made it painless.</h1>
                        <img className="w-[80px] h-[80px] rounded-full" src={selfimg} alt="photo"/>
                        <h1>Roy Chen</h1>
                        <h2>Seller, San Francisco</h2>
                  </div>
                  <div className="flex flex-col items-center gap-3 max-w-[300px] border-2 p-3">
                        <h1>Logo</h1>
                        <h1 className="font-bold text-center">I sold my hose in two weeks. The platform made it painless.</h1>
                        <img className="w-[80px] h-[80px] rounded-full" src={selfimg} alt="photo"/>
                        <h1>Roy Chen</h1>
                        <h2>Seller, San Francisco</h2>
                  </div>
            </div>

      )
}

export default Sayscards