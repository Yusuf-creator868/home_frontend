import React, { useEffect, useState } from "react";
import self from "../assets/self.jpg"
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { apiurl } from "../api";

const ProfilePage = () => {
      const [stars, setstars] = useState(4)
      const [userifo, setuserinfo] = useState([])

      useEffect(()=>{
            apiurl.get('get_my_profile', {withCredentials: true})
            .then(res => {
                  setuserinfo(res.data)
                  console.log(res.data)
            })
            .catch(err => {
                  console.log(err.message)
            })
      }, [])

      return(
            <div className="px-10">
                  <h1 className="text-2xl font-bold ml-10 mb-3">Profile</h1>
                  <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        className="hidden"
                        />

                  <label
                        for="imageUpload"
                        className="block w-full h-48 bg-gray-200 rounded-xl cursor-pointer bg-cover bg-center"
                        id="imagePreview"
                        ></label>

                  <div className="flex items-center gap-10 ml-10 -mt-7">
                        <div className="w-36 h-36 p-1 rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500">
                              <img className="w-full h-full rounded-full object-cover border-none" src={self} alt="self" />
                        </div>
                        <div className="space-y-2 mt-5">
                              <h1 className="text-2xl font-bold">{userifo.name_user}</h1>
                              <div className="flex items-center gap-5">
                                  <span className="text-blue-500"><IoHomeSharp/></span>
                                  <p>{userifo.city}</p>
                              </div>
                        <div className="flex items-center gap-5 text-gray-400">
                              <span><FiPhone/></span>
                              <h1>{userifo.phone_number}</h1>
                              <span><MdOutlineMailOutline/></span>
                              <h1>realtor@gmail.com</h1>
                        </div>

                        </div>

                        <div className="mt-5">
                              <h1 className="text-2xl font-bold">Social Media</h1>
                              <div className="grid grid-cols-2 gap-5">
                                    <div className="flex items-center gap-2">
                                          <h1><FaTelegramPlane/></h1>
                                          <a href="">Telegram</a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                          <IoLogoInstagram/>
                                          <a href="">Instagram</a>
                                    </div>

                              </div>
                        </div>



                        <div className="mt-5">
                              <h1 className="text-2xl font-bold">Rating</h1>
                              <div className="flex items-center gap-3">
                                    <h1>{stars}/5</h1>
                                    {[...Array(stars)].map((_, i) => (
                                          <RiStarSFill key={i}/>
                                    ))}

                              </div>
                        </div>
                  </div>

                  <div className="flex items-center gap-20">
                        <div className="max-w-[700px] p-5 mt-5">
                              <h1 className="text-3xl font-bold mb-3">About me</h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, pariatur atque. Illum ipsa odit doloribus quisquam quo perferendis, explicabo, omnis voluptatibus libero eius ex nisi animi incidunt recusandae cumque enim!</p>
                        </div>
                        
                        <div className="bg-gray-200 p-5 rounded-[10px] space-y-2">
                              <h1><span className="text-2xl font-bold mr-2">2</span> Closed Sales</h1><hr />
                              <h1><span className="text-2xl font-bold mr-2">$44M</span> Total Value</h1><hr />
                              <h1><span className="text-2xl font-bold mr-2">$339.5K - $1.5M</span> Price Range</h1><hr />
                              <h1><span className="text-2xl font-bold mr-2">$646.9K</span> Average Price</h1><hr />
                        </div>
                  </div>

                  <div className="max-w-[800px] p-5 mt-5">
                        <h1 className="text-3xl font-bold">Reviews</h1>

                        <div className="p-4 grid grid-cols-2 gap-5">
                              <div className="max-w-[350px] w-full bg-gray-200 rounded-[10px] p-5">
                                    <div className="flex items-center gap-3">
                                          <img className="w-15 h-15 rounded-full object-cover" src={self} alt="" />
                                          <div className="">
                                                <h1 className="text-2xl">Name</h1>
                                                <h3 className="text-[15px] text-gray-500">Homeowner</h3>
                                          </div>
                                          <h1 className="text-blue-500 ml-20"><RiStarSFill size={30}/></h1>
                                    </div>
                                    <p className="mt-3 max-w-[400px]">Lorem ipsum dfv f f d vc ddzfd  f ddddddddddddddddddddddsdvd f dfvfd fd dfvdf dsdccsccacca dccccscc cscscsccdcsvs  fddddddv  dolor sit amet consecteturjknnnjjjjjddddddd adipisicihujhbng elit. Quinklka nisi aperiam nihil temporibus ut accusamus aliquid dignissimos libero, maxime dolorem quod reprehenderit facilis eum non repellendus sapiente, reiciendis ad aspernatur?</p>
                              </div>


                              <div className="max-w-[350px] w-full bg-gray-200 rounded-2xl p-5">
                                    <div className="flex items-center gap-3">
                                          <img className="w-15 h-15 rounded-full object-cover" src={self} alt="" />
                                          <div className="">
                                                <h1 className="text-2xl">Name</h1>
                                                <h3 className="text-[15px] text-gray-500">Homeowner</h3>
                                          </div>
                                          <h1 className="text-blue-500 ml-20"><RiStarSFill size={30}/></h1>
                                    </div>
                                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi aperiam nihil temporibus ut accusamus aliquid dignissimos libero, maxime dolorem quod reprehenderit facilis eum non repellendus sapiente, reiciendis ad aspernatur?</p>
                              </div>
                        </div>

                  </div>
            </div>
      )
}

export default ProfilePage