import React from "react";
import { NavLink } from "react-router-dom";  
import logo from "@/assets/movietime.svg";
import search from "@/assets/search.svg";
import tv from "@/assets/tv.svg";
import tablet from "@/assets/tablet.svg";
import coupon from "@/assets/coupon.svg";
import ruFlag from "@/assets/ru.svg";
import arrow from "@/assets/arrowdown.svg";
const Header = () => {
   return (
      <header>
         <div className="py-4 flex justify-center items-center mx-auto max-h-20 gap-[160px] container">
            <div className="flex-1">
                  <img src={logo} alt="MovieTime Logo" />
            </div>
            <ul className="md:flex hidden justify-center items-center gap-12">
                  <li className="flex flex-col items-center  justify-center text-[#C61F1F]">
                     <img src={tv} alt="Tv" />
                     <p>Афиша</p>
                  </li>
                  <li className="flex flex-col items-center  justify-center text-[#A1A1A1]">
                     <img src={tablet} alt="Tablet" />
                     <p>Сеансы</p>
                  </li>
                  <li className="flex flex-col items-center  justify-center text-[#A1A1A1]">
                     <img src={coupon} alt="Coupon" />
                     <p>Билеты</p>
                  </li>
                  <li className="flex flex-col items-center  justify-center text-[#A1A1A1]">
                     <img src={search} alt="Search" />
                     <p>Поиск</p>
                  </li>
            </ul>
            <div className="flex justify-center items-center gap-5">
               <div className="flex items-center justify-center bg-[#1D1D1D80] backdrop-filter-blur-[30px] rounded-[12px] px-9 py-4 gap-2">
                  <img src={ruFlag} alt="Russian Flag" />
                  <p className="text-[14px] text-weight-[500] ">Ру</p>
                  <img src={arrow} alt="Arrow" />
               </div>
               <div>
                  <button className="px-[66px] py-[18px] rounded-[12px] text-[#FFFFFF] text-[16px] text-weight-[500] bg-primary cursor-pointer">Войти</button>
               </div>
            </div>
         </div>
      </header>);
};

export default React.memo(Header);
