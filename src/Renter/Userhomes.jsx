import React, { useEffect, useState } from "react";
import api from "../api";
import { MAIN_URL } from "../api";

function Userhomes({posts}){

  const [userhome, setuserhome] = useState(null)

  useEffect(()=>{
    setuserhome(posts)
  }, [posts])

  function onDelete(id){
    api.delete(`userdelethome/${id}`, {withCredentials:true})
    .then(res => {
      setuserhome(null)
    })
  }
if (!userhome) return null


    
    return(
         <div className="w-full max-w-4xl flex items-center justify-between mb-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                        {/* Image + Info */}
                        <div className="flex items-center">
                          <img
                            src={`${MAIN_URL}${userhome.first_image}`}
                            alt={userhome.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="ml-4">
                            <h6 className="text-lg font-semibold text-gray-800">{userhome.name}</h6>
                            <p className="text-gray-500">${userhome.price}</p>
                          </div>
                        </div>
                
                        {/* Quantity + Remove */}
                        <div className="flex items-center space-x-3">
                          <button className="px-3 py-1 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition cursor-pointer"
                            onClick={() => onDelete(userhome.id)}
                           >
                            Remove
                          </button>
                        </div>
                      </div>
    )
}

export default Userhomes