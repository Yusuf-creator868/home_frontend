import React, { useState, useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { MdZoomOutMap } from "react-icons/md";
import { Link, useParams } from 'react-router-dom'
import { BsShare } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import homes from "../assets/default.avif"
import self from "../assets/self.jpg"
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdOutlineBalcony } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { GiLevelEndFlag } from "react-icons/gi";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";
import api from "../api";
import { MdLiving } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
import { MAIN_URL } from "../api";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import location from "../assets/placeholder.png"



export default function CardDetailPage() {
  const [home, sethome] = useState([])
  const [indexnum, setindexnum] = useState(0)
  const { id } = useParams()
  const [stars, setstars] = useState(5)
  const scrollRef = useRef(null);
  const scrollRefImage = useRef(null)
  const scrollAmount = 400;
  const scrollImageAmount = 800
  // const totalImages = home.images.length;

  const scroll = (direction) => {
    if (scrollRef.current) {
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  }

  const scrollImage = (direction) => {
    if (scrollRefImage.current) {
      if (direction === 'left') {
        scrollRefImage.current.scrollLeft -= scrollImageAmount;
      } else {
        scrollRefImage.current.scrollLeft += scrollImageAmount;
      }
    }
  }

  const marks = [
    {
      geocode: [41.18, 69.16],
      popUp: "Hello Tashken city"
    },
    {
      geocode: [41.311286, 69.279755],
      popUp: "Hello Amir Temur square"
    },
    {
      geocode: [41.325224, 69.240328],
      popUp: "Hello Chorsu"
    },

  ]

  const custom = new Icon({
    iconUrl: location,
    iconSize: [30, 30]
  })






  useEffect(function () {
    api.get(`home/${id}`)
      .then(res => {
        console.log(res.data)
        console.log(res.data.user.id)

        sethome(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [id])


  const MessageChat = async () => {
    try {

      const res = await api.post(
        "private_conversation",
        { user_id: home.user },
        { withCredentials: true }
      );


    } catch (err) {
      console.log(err.message);
    }
  };


  const cards = [
    { id: 1, name: 'Djosseff', who: 'Content for card 1', decription: "They are great and all hzfvzdfvelping me, i am super with behavior.", img: self },
    { id: 2, name: 'Djosseff', who: 'Content for card 2', decription: "They are gfreat vv all vhelping me, i am super with behavior.", img: self },
    { id: 3, name: 'Djosseff', who: 'Content for card 3', decription: "They are great anvvfvvvvd all helping me,ffv i am super with behavior.", img: self },
    { id: 5, name: 'Djosseff', who: 'Content for card 5', decription: "They are great and fvlvfvfvvfdfvzdl helpingvdvfdfv me, i am super with behavior.", img: self },
    { id: 6, name: 'Djosseff', who: 'Content for card 6', decription: "They are greafv and all hefzvlping mve, ifvfvadfffd super with behavior.", img: self },
    { id: 7, name: 'Djosseff', who: 'Content for card 7', decription: "They are greafvt and all helping me, i am super with behavior.", img: self },
  ];







  return (
    <div className="mt-10 p-3">

      <div className="relative">

        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 
                  md:left-[38%] md:top-[90%] md:translate-x-0
                  bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
          View all {home?.images?.length} photos
        </div>

        <div className="grid 
                  grid-cols-1 grid-rows-auto
                  sm:grid-cols-2 sm:grid-rows-2
                  lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-2
                  gap-2 w-full max-w-[1300px] mx-auto">

          {home?.images?.slice(0, 5).map((img, index) => (
            <Link
              key={img.id}
              to={`/gallary/${img.id}`}
              className={`
          ${index === 0 ? "sm:col-span-2 sm:row-span-1 lg:row-span-2 lg:col-span-1" : ""}
        `}
            >
              <img
                src={`${img.image}`}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </Link>
          ))}
        </div>

      </div>



      <div className="max-w-[1400px]  mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Info page */}
          <div className="">

            {/* Name, Price Page! */}
            <div className="flex justify-between items-center p-4">

              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Apartment</h1>
                <h1 className="text-3xl font-bold">{home.district}</h1>
                <h1>{home.rooms} rooms</h1>
                <p className="text-gray-400">posted:{home.created_at}</p>
              </div>

              <div>
                <div className="flex gap-2">
                  <span><MdOutlinePriceChange className="size-6" /></span>
                  <h1 className="font-bold"> Price:</h1>
                </div>
                <h1 className="text-2xl "><span className="text-indigo-400">${home.price}</span>/Month</h1>
              </div>



            </div><hr className="my-10" />

            {/* Facilities and description page! */}
            <div className="p-4">
              <h1 className="font-bold">Facilities</h1>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-3">

                <div className="flex items-center justify-center gap-2 border-2 p-3  rounded-[5px]">
                  <FaBed className="size-6" />
                  <h1>beds: {home.bedrooms}</h1>
                </div>
                <div className="flex items-center justify-center gap-2 border-2 p-3  rounded-[5px]">
                  <FaBath className="size-6" />
                  <h1>bath: {home.bathrooms}</h1>
                </div>
                <div className="flex items-center justify-center gap-2 border-2 p-3  rounded-[5px]">
                  <TfiRulerAlt2 className="size-6" />
                  <h1>Area: {home.area}m2</h1>
                </div>
                <div className="flex items-center justify-center gap-2 border-2 p-3  rounded-[5px]">
                  <GiLevelEndFlag className="size-6" />
                  <h1>Storey: 7</h1>
                </div>
              </div>
            </div><hr className="my-10" />

            <div className="p-5 mx-auto">
              <h1 className="font-bold mb-8">Description</h1>
              <p className="whitespace-pre-line mb-5">{home.description}</p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-3">

                {/* Bedrooms */}
                <div className="p-3">
                  <div className="flex items-center justify-center gap-2 ">
                    <FaBed className="size-6" />
                    <h1>Bedrooms</h1>
                  </div>
                  <div className="whitespace-pre-line">
                    {home.bedrooms_descrip}
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex items-center justify-center gap-2 ">
                    <FaBath className="size-6" />
                    <h1>Bathrooms</h1>
                  </div>
                  <div className="whitespace-pre-line">
                    {home.bathrooms_descrip}
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex items-center justify-center gap-2 ">
                    <MdLiving className="size-6" />
                    <h1>Livingroom</h1>
                  </div>
                  <div className="whitespace-pre-line">
                    {home.livingroom_descrip}
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex items-center justify-center gap-2 ">
                    <FaKitchenSet className="size-6" />
                    <h1>Kitchen</h1>
                  </div>
                  <div className="whitespace-pre-line">
                    {home.kitchen_descrip}

                  </div>
                </div>


              </div>

            </div><hr className="my-10" />

            {/* Map */}

            <div>
              <h1 className="text-2xl font-bold my-5">Map</h1>
              <MapContainer
                center={[41.2982, 69.2385]}
                zoom={13}
                style={{ height: '400px', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {marks.map(marker => (<Marker position={marker.geocode} icon={custom}>
                  <Popup>
                    {/* {marks.popUp} */}
                    <h1>Hello</h1>
                  </Popup>
                </Marker>))}
              </MapContainer>
            </div>



          </div>

          {/* Card of Owner */}
          <div className="w-auto h-[300px] border-2 flex flex-col items-center justify-center p-2 gap-1 lg:sticky lg:top-24 space-y-3">
            <img className="rounded-full w-20 h-20" src={self} alt="" />
            <h1 className="text-2xl font-bold">{home.username}</h1>
            <p className="text-gray-300">AGENT</p>

            {/* Location */}
            <div className="flex gap-2 items-center text-gray-400">
              <SlLocationPin />
              <h1>Tashkent</h1>
            </div>

            {/* Buttons call message */}
            <div className="flex gap-4">

              {/* Message */}
              <button onClick={MessageChat} className="flex items-center bg-indigo-400 cursor-pointer text-white w-full p-2 rounded-[5px] gap-2">
                <LuMessageCircleMore />
                <h1>Message</h1>
              </button>

              {/* Call */}
              <div className="flex items-center gap-2 bg-green-500 text-white w-full p-2 rounded-[5px]">
                <MdOutlinePhoneInTalk />
                <h1>Call</h1>
              </div>
            </div>

          </div>

        </div>

      </div>



    </div>
  )
}






