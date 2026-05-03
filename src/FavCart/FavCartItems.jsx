import { useState } from "react";
import { MAIN_URL } from "../api";
import { Navigate } from "react-router-dom";



const FavCartItem = ({ item, onDelete }) => {

 


  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl flex items-center justify-between mb-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
        {/* Image + Info */}
        <div className="flex items-center">
          <img
            src={`${item.homes.first_image}`}
            alt={item.homes.name}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="ml-4">
            <h6 className="text-lg font-semibold text-gray-800">{item.homes.name}</h6>
            <p className="text-gray-500">${item.homes.price}</p>
          </div>
        </div>

        {/* Quantity + Remove */}
        <div className="flex items-center space-x-3">
          <button className="px-3 py-1 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition cursor-pointer"
            onClick={() => onDelete(item.id)}
           >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavCartItem;