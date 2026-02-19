import { AiOutlineClose } from "react-icons/ai";
import self from '../assets/self.jpg'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import { MAIN_URL } from "../api";
import { useNavigate } from "react-router-dom";



const Galary = () => {
      const scrollRef = useRef(null);
      const { id } = useParams();
      const navigate = useNavigate();
    
      const [images, setImages] = useState(null); // object
      const [index, setIndex] = useState(0);      // number
    
      useEffect(() => {
        api.get(`get_gallary/${id}`)
          .then(res => {
            setImages(res.data);
            setIndex(0); // reset when new gallery loads
          })
          .catch(err => {
            console.log(err.message);
          });
      }, [id]);
    
      const click = (dir) => {
        if (!images?.images?.length) return;
    
        setIndex((prev) => {
          const len = images.images.length;
          if (dir === "left") {
            return prev === 0 ? len - 1 : prev - 1;
          } else {
            return prev === len - 1 ? 0 : prev + 1;
          }
        });
      };
    
      return (
        <div className="bg-blue-950 w-screen h-screen text-white p-[50px] max-w-full mx-auto my-auto">
          <div className="flex items-start justify-between">
            <h1 className="text-2xl font-bold">{images?.name}</h1>
            <AiOutlineClose className="size-8 cursor-pointer" onClick={() => navigate(-1)}/>
          </div>
    
          <div className="flex items-center justify-center mt-5">
            <div className="flex items-center sm:gap-5">
              <div onClick={() => click("left")} className="cursor-pointer ">
                <FaChevronLeft />
              </div>
    
              <div className="max-w-[900px] min-w-[380px] mx-auto">
                  <img
                        src={`${MAIN_URL}${images?.images?.[index]?.image}`}
                        className=" w-full h-full object-cover"
                        alt=""
                  />
            </div>
    
              <div onClick={() => click("right")} className="cursor-pointer">
                <FaChevronRight />
              </div>
            </div>
          </div>
    
          {/* Thumbnails (still static in your code) */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth gap-2 max-w-[900px] mx-auto mt-10 scrollbar-hide"
          >
            {images?.images?.map((img, i) => (
              <div
                key={img.id}
                onClick={() => setIndex(i)}
                className="w-[100px] h-[100px] border-2 shrink-0 cursor-pointer"
              >
                <img
                  className="w-full h-full object-cover "
                  src={`${MAIN_URL}${img.image}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Galary;
    