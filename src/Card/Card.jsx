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
import { CiLocationOn } from "react-icons/ci";
import { IoBed } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Card({ item }) {
  const fav_code = localStorage.getItem("fav_code")
  const [fav, setFav] = useState(false);

  const new_item = { fav_code: fav_code, home_id: item.id }


  function add_Item() {
    api.post("add_items/", new_item)
      .then(res => {
        console.log(res.data)
        setFav(true)

      })
      .catch(err => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    if (item.id) {
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
    <div className="relative bg-white rounded-[10px] p-3 shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer max-w-[350px] w-full mx-auto">
      <button
        onClick={add_Item}
        className="absolute top-2 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        disabled={fav}>
        {fav ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-600" />}
      </button>

      <Link to={`/homedetail/${item.id}`}>
        <div className="flex flex-row gap-4 items-center ml-3 inset-shadow-lime-50"><MdAddHomeWork /> <p>{item.created_at}</p></div>

        <div className="w-full h-56 bg-gray-100 overflow-hidden mt-2">
          <img
            src={`${item.first_image}`}
            alt={name}
            className="w-full h-full object-cover rounded-[10px]" />
        </div>

        <div className="py-3 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <CiLocationOn />
             <h1 className="text-[13px]">Tashkent, UZB</h1> 
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-[22px] font-semibold text-blue-900 line-clamp-2">{item.district}</h3>
            <p className="text-xs text-gray-500 line-clamp-2">{item.rooms} rooms</p>
          </div>

          <div className="flex items-center justify-between gap-3">

            <div className="flex items-center justify-center gap-2">
              <IoBed />
              <h1 className="text-[12px]">2 Bed Room</h1>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaBath  />
              <h1 className="text-[12px]">3 Bath</h1>
            </div>
            <div className="flex items-center justify-center gap-2">
              <TfiRulerAlt2 />
              <h1 className="text-[12px]">100 SQ FT</h1>
            </div>
            
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[21px] font-bold text-green-600">{item.price}$</span>
            <div className="flex items-center gap-2 py-1 px-3 text-white bg-blue-950 rounded-[10px]">
              <h1>View Details</h1>
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </Link>

    </div>
  );
}

