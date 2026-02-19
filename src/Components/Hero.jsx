import React from "react";
import selfphoto from "../assets/default.avif"

import { GoChevronLeft, GoChevronRight } from "react-icons/go";


export default function Hero() {
      return (
        <div className="max-w-[1200px] mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between border-2 border-black h-auto md:h-[500px]">
    
            {/* Left Text */}
            <div className="flex-1 p-6">
              <h1 className="text-3xl font-bold mb-4">
              Найдите свой следующий дом или разместите объявление о продаже уже сегодня.
              </h1>
    
              <h3 className="text-gray-600 mb-6">
                Search thousands of properties across the country. Whether you're
                buying, selling, or renting, we connect you with verified realtors
                and trusted sellers.
              </h3>
    
              <div className="space-x-4">
                <button className="px-4 py-2 bg-blue-900 text-white rounded-md">
                  Browse
                </button>
                <button className="px-4 py-2 border border-gray-700 rounded-md">
                  List now
                </button>
              </div>
            </div>
    
            {/* Image */}
            <div className="flex-1 h-full flex items-center justify-center bg-gray-400 overflow-hidden">
              <img
                src={selfphoto}
                alt="home"
                className="w-full h-full object-cover"
              />
            </div>
    
          </div>
        </div>
      );
    }