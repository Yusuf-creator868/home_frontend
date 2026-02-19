import axios from "axios";
import React, { useState } from "react";
import { apiurl } from "../api";

const ReanterBuyer = () => {


      const [form, setForm] = useState({
            name_user: "",
            phone_number: "",
      })
      const [city, setCity] = useState("")
      const [choice, setchoice] = useState([
            { value: "TASHKENT", display: "Tashkent"},
            { value: "SAMARKAND", display: "Samarkand"},
            { value: "BUKHARA", display: "Bukhara"},
            { value: "NUKUS", display: "Nukus"},
            { value: "ANDIJAN", display: "Andijan"},
            { value: "NAMANGAN", display: "Namangan"},
            { value: "FERGANA", display: "Fergana"},
            { value: "KOKAND", display: "Kokand"},
            { value: "KARSHI", display: "Karshi"},
            { value: "NAVOIY", display: "Navoiy"},
            { value: "TERMIZ", display: "Termiz"},
            { value: "JIZZAH", display: "Jizzah"},
      ])

      const handleChange = (event) => {
            const {name, value} = event.target;
            setForm({...form, [name]: value})
      }

      const handleSubmit = (event) => {
            event.preventDefault();
            apiurl.post("create_profile/", {city: city, name_user: form.name_user, phone_number: form.phone_number},
                  {withCredentials:true,
                        headers: {
                              "Content-Type": "application/json",
                          },
                  }
            )
            setForm({name_user: "", phone_number: ""})
            setCity([])
      }



      return(
      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-35">
            <div className="flex flex-col items-start gap-5 border-2 border-blue-900 p-10 w-full max-w-[400px] mx-auto">
                  <div>
                        <label className="block text-blue-900 font-semibold mb-2">
                              Name:
                         </label>
                         <input
                              type="text"
                              name="name_user"
                              placeholder="Name"
                              onChange={handleChange}
                              value={form.name_user || ""}
                              className="w-full border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                              required
                        />
                  </div>

                  <div>
                        <label className="block text-blue-900 font-semibold mb-2">
                              Phone:
                         </label>
                        <div className="flex gap-2">
                         <h1 className="border border-blue-900 rounded-lg px-3 py-2">+998</h1>
                         <input
                              type="number"
                              name="phone_number"
                              placeholder="Phone"
                              onChange={handleChange}
                              value={form.phone_number || ""}
                              step="1"
                              className="max-w-[200px] border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                              required
                        />     
                        </div>  
                  </div>
            <div>
                        <label className="block text-blue-900 font-semibold mb-2">
                              City:
                         </label>
                  <select 
                  name="city" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border p-2 rounded cursor-pointer overflow-y-auto">
                        {choice.map(choices => {
                              return(
                                    <option key={choices.value} value={choices.value}>{choices.display}</option>
                              )
                        })}
                  </select>   
            </div>   
            <button type="submit" className="p-3 cursor-pointer border-2 bg-blue-900 text-white hover:bg-white border-blue-900 hover:text-blue-900">Submit</button>

            </div>
      </form>
      )
}

export default ReanterBuyer



// https://onlinetestpad.com/i3j3wphagkedc