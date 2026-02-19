import React, { useEffect, useState } from "react";
import { apiurl } from "../api";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { MdLiving } from "react-icons/md";

export default function AddPost() {
  const [form, setForm] = useState({
    district: "",
    description: "",
    price: "",
    bedrooms: "",
    bedrooms_descrip: "",
    bathrooms: "",
    bathrooms_descrip: "",
    livingroom_descrip: "",
    kitchen_descrip: "",
    area: "",
    rooms: "",
  });

  const [images, setImages] = useState([]);
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


  const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("district", form.district);
        formData.append("description", form.description);
        formData.append("bedrooms", form.bedrooms);
        formData.append("bedrooms_descrip", form.bedrooms_descrip);
        formData.append("bathrooms", form.bathrooms);
        formData.append("bathrooms_descrip", form.bathrooms_descrip);
        formData.append("livingroom_descrip", form.livingroom_descrip);
        formData.append("kitchen_descrip", form.kitchen_descrip);
        formData.append("area", form.area);
        formData.append("rooms", form.rooms);
        formData.append("price", form.price);
        formData.append("city", city);

    // append each image separately
        images.forEach((file) => {
        formData.append("images", file); // must match `request.FILES.getlist("images")` in Django
    });

  
         apiurl.post("rent/", formData, {
          withCredentials: true
         })
         alert("Home created successfully")
         setForm({ district: "", description: "", price: "" });
         setImages([]);




}





  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // handle image upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };





  return (
    // <div className="flex justify-center items-center bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl max-w-[1000px] mx-auto p-5 border my-10 border-blue-900"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Add New Rent Home
        </h2>

        <div className="mb-4">
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

        {/* Name */}
        <div className="mb-4">
          <label className="block text-blue-900 font-semibold mb-2">
            District:
          </label>
          <input
            type="text"
            name="district"
            value={form.district}
            onChange={handleChange}
            placeholder="Enter district name"
            className="w-full border border-blue-900 disabled rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
        </div>

        {/* Hook */}
        <div className="mb-4">
          <label className="block text-blue-900 font-semibold mb-2">
            Rooms:
          </label>
          <input
            type="number"
            name="rooms"
            value={form.rooms}
            onChange={handleChange}
            placeholder="Enter no. rooms"
            className="w-full border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
        </div>



    {/* Bedroom */}
      <div className="mb-4">
        <label className="block text-blue-900 font-semibold mb-2">
        Bedrooms:
        </label>
        <input
          type="number"
          name="bedrooms"
          value={form.bedrooms}
          onChange={handleChange}
          placeholder="Enter no. bedrooms"
          className="w-full border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
          required
        />
      </div>

      {/* bathrooms */}
      <div className="mb-4">
        <label className="block text-blue-900 font-semibold mb-2">
        Bathrooms:
        </label>
        <input
          type="number"
          name="bathrooms"
          value={form.bathrooms}
          onChange={handleChange}
          placeholder="Enter no. bathrooms"
          className="w-full border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
          required
        />
      </div>


      {/* area */}
      <div className="mb-4">
        <label className="block text-blue-900 font-semibold mb-2">
        Area: m2
        </label>
        <input
          type="number"
          name="area"
          value={form.area}
          onChange={handleChange}
          placeholder="Enter area"
          className="w-full border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
          required
        />
      </div>

      




        {/* Description */}
        <div className="mb-4">
          <label className="block text-blue-900 font-semibold mb-2">
            Description:
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter description"
            rows="4"
            className="w-full border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          ></textarea>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-3">
        
                          {/* Bedrooms */}
                          <div className="p-3 flex flex-col items-center">
                            <div className="flex items-center justify-center gap-2 ">
                              <FaBed className="size-6"/>
                              <h1>Bedrooms</h1>
                            </div>
                            <div className="whitespace-pre-line">
                            <textarea
                                name="bedrooms_descrip"
                                value={form.bedrooms_descrip}
                                onChange={handleChange}
                                placeholder="Enter description"
                                rows="4"
                                className="max-w-[200px] border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                required
                            ></textarea>
                            </div>
                          </div>
        
                          <div className="p-3 flex flex-col items-center">
                            <div className="flex items-center justify-center gap-2 ">
                              <FaBath className="size-6"/>
                              <h1>Bathrooms</h1>
                            </div>
                            <div className="whitespace-pre-line">
                            <textarea
                                name="bathrooms_descrip"
                                value={form.bathrooms_descrip}
                                onChange={handleChange}
                                placeholder="Enter description"
                                rows="4"
                                className="max-w-[200px] border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                required
                            ></textarea> 
                            </div>
                          </div>
        
                          <div className="p-3 flex flex-col items-center">
                            <div className="flex items-center justify-center gap-2 ">
                              <MdLiving className="size-6"/>
                              <h1>Livingroom</h1>
                            </div>
                            <div className="whitespace-pre-line">
                            <textarea
                                name="livingroom_descrip"
                                value={form.livingroom_descrip}
                                onChange={handleChange}
                                placeholder="Enter description"
                                rows="4"
                                className="max-w-[200px] border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                required
                            ></textarea>
                            </div>
                          </div>
        
                          <div className="p-3 flex flex-col items-center">
                            <div className="flex items-center justify-center gap-2 ">
                              <FaKitchenSet className="size-6"/>
                              <h1>Kitchen</h1>
                            </div>
                            <div className="whitespace-pre-line">
                            <textarea
                                name="kitchen_descrip"
                                value={form.kitchen_descrip}
                                onChange={handleChange}
                                placeholder="Enter description"
                                rows="4"
                                className="max-w-[200px] border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                required
                            ></textarea>
        
                            </div>
                          </div>
</div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-blue-900 font-semibold mb-2">
            Price:
          </label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full border border-blue-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
        </div>

        {/* Images */}
        <div className="mb-4">
          <label className="block text-blue-900 font-semibold mb-2">
            Images:
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full border border-blue-900 rounded-lg px-3 py-2 bg-white focus:outline-none"
          />
          <div className="flex flex-wrap gap-3 mt-3">
            {images.length > 0 &&
              images.map((img, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="w-20 h-20 object-cover rounded-lg border border-blue-900"
                />
              ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-900 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Create Post
        </button>
      </form>
    // </div>
  );
}