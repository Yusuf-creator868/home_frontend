import CardPage from "../Card/CardPage";
import { randomValue } from "../RandomCartCode";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero"
import Features from "./Features";
import Growth from "./Growth";
import Security from "./Security";
import Faq from "./Faq";
import Says from "./Says";
import Join from "./Join";

export default function Home() {

  useEffect(()=>{
    if(localStorage.getItem("fav_code") === null){
      localStorage.setItem("fav_code", randomValue)
    }
  }, [])


  return (
    <div className="flex flex-col mt-20 gap-6 max-w-[1400px] mx-auto bg-[#f5f5f5]">
      {/* Search bar */}

      <Navbar/>
      <Hero/>
      {/* Cards grid */}
      <CardPage />
      <Features/>
      <Growth/>
      <Security/>
      <Faq/>
      <Says/>
      <Join/>

    </div>
  )}