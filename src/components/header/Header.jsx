// import React from "react";
// import { NavLink } from 'react-router-dom'
// import { IoHomeOutline, IoBookmarkOutline ,IoSearchOutline  } from "react-icons/io5";
// import { MdOutlineMovie } from "react-icons/md";
// import "./style.css"
// import logo from "@/assets/movietime.svg";
// // import search from "@/assets/search.svg";
// // import tv from "@/assets/tv.svg";
// // import tablet from "@/assets/tablet.svg";
// // import coupon from "@/assets/coupon.svg";
// // import ruFlag from "@/assets/ru.svg";
// // import arrow from "@/assets/arrowdown.svg";
// const Header = () => {
//    return (
//       <header>
//          <div className="py-4 px-6 flex justify-between items-center mx-auto max-h-20  lg:gap-[150px] md:gap-[80px] container">
//             <NavLink to={"/"}>
//                 <div className="flex-shrink-0">
//                       <img className="cursor-pointer" src={logo} alt="MovieTime Logo" />
//                 </div>
//             </NavLink>
//             <ul className="flex justify-center items-center gap-12">
//                   <li>
//                       <NavLink className={"flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1]"} to={"/"}>
//                         <IoHomeOutline className='text-2xl'/>
//                         <span>Home</span>
//                       </NavLink>
//                   </li>
//                   <li>
//                       <NavLink className={"flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1]"} to={"/movies"}>
//                         <MdOutlineMovie className='text-2xl'/>
//                         <span>Movies</span>
//                       </NavLink>
//                   </li>
//                   <li>
//                       <NavLink className={"flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1]"} to={"/saved"}>
//                         <IoBookmarkOutline className='text-2xl'/>
//                         <span>Saved</span>
//                       </NavLink>
//                   </li>
//                   <li>
//                       <NavLink className={"flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1]"} to={"/search"}>
//                         <IoSearchOutline  className='text-2xl'/>
//                         <span>Search</span>
//                       </NavLink>
//                   </li>
//             </ul>
//             <button className=" px-[60px] py-[16px] rounded-[12px] text-[#FFFFFF] text-[16px] text-weight-[500] bg-primary cursor-pointer">Sign In</button>
//          </div>
//       </header>
//       );
// };

// export default React.memo(Header);




import React, { useState, useRef } from "react";
import { NavLink } from 'react-router-dom';
import { IoHomeOutline, IoBookmarkOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import "./style.css";
import logo from "@/assets/movietime.svg";

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const menuRef = useRef(null);

   return (
      <header>
         <div className="py-4 px-6 flex justify-between items-center mx-auto max-h-20 lg:gap-[150px] md:gap-[80px] container relative">
            <NavLink to={"/"}>
               <div className="flex-shrink-0">
                  <img className="cursor-pointer" src={logo} alt="MovieTime Logo" />
               </div>
            </NavLink>

            <ul
               ref={menuRef}
               className={`flex gap-12 justify-center items-center transition-all duration-500 ease-in-out 
                  max-[750px]:fixed max-[750px]:top-0 max-[750px]:left-1/2 max-[750px]:-translate-x-1/2 max-[750px]:w-full max-[750px]:flex-col max-[750px]:bg-black max-[750px]:py-5 z-10000
                  ${isMenuOpen ? "max-[750px]:translate-y-0" : "max-[750px]:-translate-y-full"}
               `}
            >
               <li>
                  <NavLink
                     onClick={() => setIsMenuOpen(false)}
                     className="flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1] max-[750px]:flex-row gap-2.5"
                     to={"/"}
                  >
                     <IoHomeOutline className='text-2xl' />
                     <span>Home</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     onClick={() => setIsMenuOpen(false)}
                     className="flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1] max-[750px]:flex-row gap-2.5"
                     to={"/movies"}
                  >
                     <MdOutlineMovie className='text-2xl' />
                     <span>Movies</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     onClick={() => setIsMenuOpen(false)}
                     className="flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1] max-[750px]:flex-row gap-2.5"
                     to={"/saved"}
                  >
                     <IoBookmarkOutline className='text-2xl' />
                     <span>Saved</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     onClick={() => setIsMenuOpen(false)}
                     className="flex flex-col items-center header-link text-[13px] font-[500] text-[#A1A1A1] max-[750px]:flex-row gap-2.5"
                     to={"/search"}
                  >
                     <IoSearchOutline className='text-2xl' />
                     <span>Search</span>
                  </NavLink>
               </li>
               <li className="hidden max-[750px]:block">
                  <button className="px-[60px] py-[16px] rounded-[12px] text-[#FFFFFF] text-[16px] text-weight-[500] bg-primary cursor-pointer">
                     Sign In
                  </button>
               </li>
            </ul>

            <button className="cursor-pointer px-[60px] py-[16px] rounded-[12px] text-[#FFFFFF] text-[16px] text-weight-[500] bg-primary max-[750px]:hidden">
               Sign In
            </button>

            <div
               className="hidden max-[750px]:flex flex-col gap-1 cursor-pointer z-10001"
               onClick={() => setIsMenuOpen((prev) => !prev)}
            >
               <div className="w-8 h-1 bg-white rounded"></div>
               <div className="w-8 h-1 bg-white rounded"></div>
               <div className="w-8 h-1 bg-white rounded"></div>
            </div>
         </div>
      </header>
   );
};

export default React.memo(Header);
