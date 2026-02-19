import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MAIN_URL } from "../api";
import { Link } from "react-router-dom";
import { MdAddHomeWork } from "react-icons/md";
import api from "../api";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { GiLevelEndFlag } from "react-icons/gi";


export default function Card({item}) {
  const fav_code = localStorage.getItem("fav_code")
  const [fav, setFav] = useState(false);

    const new_item = {fav_code: fav_code, home_id: item.id}


      function add_Item(){
        api.post("add_items/", new_item)
        .then(res => {
            console.log(res.data)
            setFav(true)
            
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    useEffect(()=>{
      if(item.id){
        api.get(`product_in_cart?fav_code=${fav_code}&home_id=${item.id}`)
        .then(res => {
          setFav(res.data.product_in_cart)
        })
        .catch(err => {
          console.log(err.message)
        })
      }

    }, [fav_code, item.id])
  

  return (
   <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer max-w-[300px] w-full mx-auto">
          <button
             onClick={add_Item}
             className="absolute top-8 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
             disabled = {fav}>
            {fav ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-600" />}
          </button>

        <Link to={`/homedetail/${item.id}`}>
          <div className="flex flex-row gap-4 items-center ml-3 inset-shadow-lime-50"><MdAddHomeWork/> <p>{item.created_at}</p></div>

          <div className="w-full h-56 bg-gray-100 overflow-hidden mt-2"> 
            <img
              src={`${MAIN_URL}${item.first_image}`}
              alt={name}
              className="w-full h-full object-cover"/>
          </div>

          <div className="p-4 flex flex-col gap-2">

            <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{item.district}</h3>
            <p className="text-xs text-gray-500 line-clamp-2">{item.rooms} rooms</p>
            </div>
            <div className="flex items-center justify-center gap-5 px-2">
            
                              <div className="flex items-center justify-center w-20 gap-2 border-2 border-gray-500 text-gray-500 p-1 rounded-[5px]">
                                <FaBed className="size-5"/>
                                <h1>2</h1>
                              </div>
                              <div className="flex items-center justify-center w-20 gap-2 border-2 border-gray-500 text-gray-500 p-1 rounded-[5px]">
                                <FaBath className="size-5"/>
                                <h1>3</h1>
                              </div>
                              <div className="flex items-center justify-center w-20 gap-2 border-2 border-gray-500 text-gray-500 p-1 rounded-[5px]">
                                <TfiRulerAlt2 className="size-5"/>
                                <h1>100</h1>
                              </div>
                              <div className="flex items-center justify-center w-20 gap-2 border-2 border-gray-500 text-gray-500 p-1 rounded-[5px]">
                                <GiLevelEndFlag className="size-5"/>
                                <h1>7</h1>
                              </div>
                </div>

            <div className="flex items-center justify-between">
              <h1>Price:</h1>
              <span className="text-lg font-bold text-green-600">{item.price}$</span>
            </div>
          </div>
        </Link>

    </div>
  );
}

