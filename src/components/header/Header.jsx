import React from "react";
import { NavLink } from 'react-router-dom'
import { IoHomeOutline, IoBookmarkOutline ,IoSearchOutline  } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import "./style.css"
import logo from "@/assets/movietime.svg";
// import search from "@/assets/search.svg";
// import tv from "@/assets/tv.svg";
// import tablet from "@/assets/tablet.svg";
// import coupon from "@/assets/coupon.svg";
// import ruFlag from "@/assets/ru.svg";
// import arrow from "@/assets/arrowdown.svg";
const Header = () => {
   return (
      <header>
         <div className="py-4 px-6 flex justify-between items-center mx-auto max-h-20  lg:gap-[150px] md:gap-[80px] container">
            <div className="flex-shrink-0">
                  <img src={logo} alt="MovieTime Logo" />
            </div>
            <ul className="flex justify-center items-center gap-12">
                  <li>
                      <NavLink className={"flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1]"} to={"/"}>
                        <IoHomeOutline className='text-2xl'/>
                        <span>Home</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink className={"flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1]"} to={"/movies"}>
                        <MdOutlineMovie className='text-2xl'/>
                        <span>Movies</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink className={"flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1]"} to={"/saved"}>
                        <IoBookmarkOutline className='text-2xl'/>
                        <span>Saved</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink className={"flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1]"} to={"/search"}>
                        <IoSearchOutline  className='text-2xl'/>
                        <span>Search</span>
                      </NavLink>
                  </li>
            </ul>
            <button className=" px-[60px] py-[16px] rounded-[12px] text-[#FFFFFF] text-[16px] text-weight-[500] bg-primary cursor-pointer">Sign In</button>
         </div>
      </header>
      );
};

export default React.memo(Header);
