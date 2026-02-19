import React, { useState, useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { GoChevronRight, GoChevronLeft  } from "react-icons/go";
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
import {MapContainer, Marker, TileLayer, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import {Icon} from "leaflet"
import location from "../assets/placeholder.png"



export default function CardDetailPage() {
    const [home, sethome] = useState([])
    const [indexnum, setindexnum] = useState(0)
    const {id} = useParams()
    const [stars, setstars] = useState(5)
    const scrollRef = useRef(null);
    const scrollRefImage = useRef(null)
    const scrollAmount = 400;
    const scrollImageAmount = 800

    const scroll = (direction) => {
      if(scrollRef.current){
        if(direction === 'left'){
          scrollRef.current.scrollLeft -= scrollAmount;
        }else{
          scrollRef.current.scrollLeft += scrollAmount;
        }
      }
    }

    const scrollImage = (direction) => {
      if(scrollRefImage.current){
        if(direction === 'left'){
          scrollRefImage.current.scrollLeft -= scrollImageAmount;
        }else{
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



    const increase = () => {
      if (home.images.length)
      setindexnum(prev => (prev + 1) % (home.images?.length || 1))
    }

    const decrease = () => {
      setindexnum(prev => (prev - 1 + (home.images?.length || 1)) % (home.images?.length || 1))
    }
    
    


    useEffect(function(){
        api.get(`home/${id}`)
        .then(res => {
            console.log(res.data)
            sethome(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [id])

    const cards = [
      { id: 1, name: 'Djosseff', who: 'Content for card 1', decription: "They are great and all hzfvzdfvelping me, i am super with behavior.", img: self },
      { id: 2, name: 'Djosseff', who: 'Content for card 2', decription: "They are gfreat vv all vhelping me, i am super with behavior.", img: self },
      { id: 3, name: 'Djosseff', who: 'Content for card 3', decription: "They are great anvvfvvvvd all helping me,ffv i am super with behavior.", img: self },
      { id: 5, name: 'Djosseff', who: 'Content for card 5', decription: "They are great and fvlvfvfvvfdfvzdl helpingvdvfdfv me, i am super with behavior.", img: self },
      { id: 6, name: 'Djosseff', who: 'Content for card 6', decription: "They are greafv and all hefzvlping mve, ifvfvadfffd super with behavior.", img: self },
      { id: 7, name: 'Djosseff', who: 'Content for card 7', decription: "They are greafvt and all helping me, i am super with behavior.", img: self },
    ];







    return(
      <div className="">
        <div className="flex max-w-full mx-auto cursor-pointer">

        <div
          onClick={() => scrollImage("left")}
          className="flex items-center cursor-pointer mx-2"
          aria-label="Scroll Left"
          >
            <FaChevronLeft />
          </div>

          {home?.images?.length > 0 && (
          <div
            ref={scrollRefImage}
          className="grid grid-rows-2 grid-flow-col auto-cols-[450px]
            gap-2 overflow-x-auto scroll-smooth scrollbar-hide w-[1500px] mx-auto">
          {home.images.map((img) => (
          <Link key={img.id} to={`/gallary/${img.id}`}>
            <img
              className="border-2 object-cover w-[450px] h-[350px] hover:scale-105 ease-in-out duration-300"
              src={`${MAIN_URL}${img.image}`}
              alt=""
            />
          </Link>
          ))}
        </div>
          )}

        <div
          onClick={() => scrollImage("right")}
          className="flex items-center cursor-pointer mx-2"
          aria-label="Scroll Right">
            <FaChevronRight />
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
                  <span><MdOutlinePriceChange className="size-6"/></span>
                  <h1 className="font-bold"> Price:</h1>
                  </div>
                  <h1 className="text-2xl "><span className="text-indigo-400">${home.price}</span>/Month</h1>
                </div>



              </div><hr className="my-10"/>

              {/* Facilities and description page! */}
              <div className="p-4">
                <h1 className="font-bold">Facilities</h1>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-3">

                  <div className="flex items-center justify-center gap-2 border-2 p-3  rounded-[5px]">
                    <FaBed className="size-6"/>
                    <h1>beds: {home.bedrooms}</h1>
                  </div>
                  <div className="flex items-center justify-center gap-2 border-2 p-3  rounded-[5px]">
                    <FaBath className="size-6"/>
                    <h1>bath: {home.bathrooms}</h1>
                  </div>
                  <div className="flex items-center justify-center gap-2 border-2 p-3  rounded-[5px]">
                    <TfiRulerAlt2 className="size-6"/>
                    <h1>Area: {home.area}m2</h1>
                  </div>
                  <div className="flex items-center justify-center gap-2 border-2 p-3  rounded-[5px]">
                    <GiLevelEndFlag className="size-6"/>
                    <h1>Storey: 7</h1>
                  </div>
                </div>
              </div><hr  className="my-10"/>

              <div className="p-5 mx-auto">
                <h1 className="font-bold mb-8">Description</h1>
                <p className="whitespace-pre-line mb-5">{home.description}</p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-3">

                  {/* Bedrooms */}
                  <div className="p-3">
                    <div className="flex items-center justify-center gap-2 ">
                      <FaBed className="size-6"/>
                      <h1>Bedrooms</h1>
                    </div>
                    <div className="whitespace-pre-line">
                    {home.bedrooms_descrip}
                    </div>
                  </div>

                  <div className="p-3">
                    <div className="flex items-center justify-center gap-2 ">
                      <FaBath className="size-6"/>
                      <h1>Bathrooms</h1>
                    </div>
                    <div className="whitespace-pre-line">
                    {home.bathrooms_descrip}
                    </div>
                  </div>

                  <div className="p-3">
                    <div className="flex items-center justify-center gap-2 ">
                      <MdLiving className="size-6"/>
                      <h1>Livingroom</h1>
                    </div>
                    <div className="whitespace-pre-line">
                    {home.livingroom_descrip}
                    </div>
                  </div>

                  <div className="p-3">
                    <div className="flex items-center justify-center gap-2 ">
                      <FaKitchenSet className="size-6"/>
                      <h1>Kitchen</h1>
                    </div>
                    <div className="whitespace-pre-line">
                    {home.kitchen_descrip}

                    </div>
                  </div>


                </div>

              </div><hr className="my-10"/>

              {/* Map */}

              <div>
                <h1 className="text-2xl font-bold my-5">Map</h1>
                  <MapContainer center={[41.2982, 69.2385 ]} zoom={13}>
                      <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                      />
                      {marks.map(marker=> (<Marker position={marker.geocode} icon={custom}>
                          <Popup>
                            {/* {marks.popUp} */}
                            <h1>Hello</h1>
                          </Popup>
                      </Marker>))}
                  </MapContainer>
              </div>

              

              <hr className="my-10"/>


                
              <h1 className="font-bold ml-5">Reviews</h1> 
              <div className="flex items-center mt-10 w-full mx-auto h-auto">

                {/* Left */}
                <div 
                  onClick={()=> scroll('left')}
                  className=" bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Scroll Left"
                  >
                  <FaChevronLeft/>
                </div>


              
              <div 
                ref={scrollRef}
                className="flex overflow-x-auto scroll-smooth gap-2 scrollbar-hide">
                {/* First card */}

                {cards.map(card => {
                  return(
                <div key={card.id} className="shrink-0 gap-2 border-2 p-5 max-w-74">

                  <img className="rounded-full w-15 h-15" src={card.img} alt="" />

                  <div className="space-y-2">
                    <h1 className="font-bold">{card.name}</h1>
                    <h1 className="text-[15px] text-gray-400">{card.who}</h1>
                    <p className="text-gray-400 max-w-[550px]">{card.decription}</p>
                    <div className="flex">
                    {[...Array(stars)].map((_, i) => (
                          <RiStarSFill key={i}/>
                    ))}
                    </div>
                  </div>
                </div>
                  )
                })}


              </div>


              {/* Right */}
              <div 
                onClick={()=> scroll('right')}
                className=" bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Scroll Right"
              >
                <FaChevronRight/>
              </div>


              </div>



            </div>

          {/* Card of Owner */}
            <div className="w-auto h-[300px] border-2 flex flex-col items-center justify-center p-2 gap-1 lg:sticky lg:top-24 space-y-3">
              <img className="rounded-full w-20 h-20" src={self} alt="" />
              <h1 className="text-2xl font-bold">{home.user}</h1>
              <p className="text-gray-300">AGENT</p>

              {/* Location */}
              <div className="flex gap-2 items-center text-gray-400">
                <SlLocationPin/>
                <h1>Tashkent</h1>
              </div>

              {/* Buttons call message */}
              <div className="flex gap-4">

                {/* Message */}
                <div className="flex items-center bg-indigo-400 text-white w-full p-2 rounded-[5px] gap-2">
                  <LuMessageCircleMore/>
                  <h1>Message</h1>
                </div>

                {/* Call */}
                <div className="flex items-center gap-2 bg-green-500 text-white w-full p-2 rounded-[5px]">
                  <MdOutlinePhoneInTalk/>
                  <h1>Call</h1>
                </div>
              </div>

            </div>

          </div>

        </div>



      </div>
    )
}


{/* <div className="relative rounded-xl overflow-hidden h-64 md:h-80 ">
<img
    src={home.images?.[0] ? `${MAIN_URL}${home.images[indexnum].image}` : "No image"}
    alt="Product"
    className="w-full h-full object-cover"
        />
<button className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold bg-white/70 px-2 rounded cursor-pointer" onClick={decrease}><GoChevronLeft/></button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl font-bold bg-white/70 px-2 rounded cursor-pointer" onClick={increase}><GoChevronRight/></button>
<button className="absolute bottom-3 right-3 bg-white p-1 rounded shadow text-sm"><MdZoomOutMap/></button>
</div>
import React, { useRef } from 'react';

const ScrollingCards = () => {
  const scrollRef = useRef(null);
  const scrollAmount = 300; // Adjust this value based on your card width and desired scroll distance

  const scroll = (direction) => {
    if (scrollRef.current) {
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  // Dummy data for the cards
  const cards = [
    { id: 1, title: 'Card 1', content: 'Content for card 1' },
    { id: 2, title: 'Card 2', content: 'Content for card 2' },
    { id: 3, title: 'Card 3', content: 'Content for card 3' },
    { id: 4, title: 'Card 4', content: 'Content for card 4' },
    { id: 5, title: 'Card 5', content: 'Content for card 5' },
    { id: 6, title: 'Card 6', content: 'Content for card 6' },
    { id: 7, title: 'Card 7', content: 'Content for card 7' },
  ];

  return (
    <div className="relative">
      {/* Left Button */}
//       <button
//         onClick={() => scroll('left')}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         aria-label="Scroll Left"
//       >
//         &lt;
//       </button>

//       {/* Scrolling Container */}
//       <div
//         ref={scrollRef}
//         className="flex overflow-x-auto space-x-4 p-4 scroll-smooth scrollbar-hide"
//         // Hide scrollbar utility (requires custom CSS or a PostCSS plugin for full cross-browser compatibility)
//       >
//         {cards.map((card) => (
//           <div key={card.id} className="flex-shrink-0 w-64 p-4 bg-gray-100 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">{card.title}</h3>
//             <p>{card.content}</p>
//           </div>
//         ))}
//       </div>

//       {/* Right Button */}
//       <button
//         onClick={() => scroll('right')}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         aria-label="Scroll Right"
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default ScrollingCards;








