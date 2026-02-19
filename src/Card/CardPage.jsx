import { useEffect, useState } from "react";
import Card from "./Card";
import api from "../api";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";


export default function CardPage() {
  const [data, setdata] = useState([])
  const [onloadeddata, setoldata] = useState([]) 


  useEffect(() => {
    api.get("home/")
    .then(res =>{
      console.log(res.data)
      const info = res.data
      const oldinfo = info.filter(itemsall => itemsall.is_old === true)
      const newinfo = info.filter(itemsall => itemsall.is_old === false)


      setoldata(oldinfo)
      setdata(newinfo)
    })
    .catch(err => {
      console.log(err.message)
    })

  }, [])

 
  return (
    
    <div className="max-w-[1400px] mx-auto px-4 p-6 mb-15">

      <div className="flex justify-between mx-5 mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">Listings</h1>
          <h3 className="text-gray-600">Handpicked properties that match buyers and renters are looking for right now.</h3>
        </div>

        <button>View all</button>
      </div>


    <div className="flex justify-between items-center space-x-2">

      <div className="text-3xl"><CiCircleChevLeft/></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (

          <Card key={index} item = {item} />

        ))}
      </div>
      <div className="text-3xl"><CiCircleChevRight/></div>
    </div>



      <h1 className="text-center my-6">Old data</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {onloadeddata.map((item, index) => (

          <Card key={index} item = {item}/>

        ))}
      </div>

    </div>
  );
}