import React from "react";
import logo from "@/assets/movietime.svg";
import appstore from "@/assets/appstore.svg";
import googleplay from "@/assets/playmarket.svg";
import file from "@/assets/file.svg";
import add from "@/assets/add.svg";
import faq from "@/assets/faq.svg";
import phone from "@/assets/phone.svg";
import film from "@/assets/film.svg";
import theatre from "@/assets/theatre.svg";
import concert from "@/assets/concert.svg";
import sport from "@/assets/sport.svg";
import instagram from "@/assets/instagram.svg";
import facebook from "@/assets/facebook.svg";
import youtube from "@/assets/youtube.svg";

const Footer = () => {
   return (
   <footer>
      <div className="mx-auto p-8 bg-[#111111] rounded-[12px] grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-8 container">
         <div className="flex flex-col gap-12">
            <img className="w-[120px]" src={logo} alt="Logo" />
            <div className="flex flex-col gap-2">
               <img className="w-[150px]" src={googleplay} alt="Google Play" />
               <img className="w-[150px]" src={appstore} alt="App Store" />
            </div>
         </div>
         <div>
            <h2 className="text-[#FFFFFF] text-[16px] text-weight-[500] mb-5">О нас</h2>
            <ul className="flex flex-col gap-5 text-[#A1A1A1]">
               <li className="flex cursor-pointer gap-1.5">
                  <img src={file} alt="" />
                  <a href="#">Публичная оферта</a>
               </li>
               <li className="flex gap-1.5">
                  <img src={add} alt="" />
                  <a href="#">Реклама</a>
               </li>
               <li className="flex gap-1.5">
                  <img src={faq} alt="" />
                  <a href="#">F.A.Q</a>
               </li>
               <li className="flex gap-1.5">
                  <img src={phone} alt="" />
                  <a href="#">Контакты</a>
               </li>
            </ul>
         </div>
         <div>
            <h2 className="text-[#FFFFFF] text-[16px] text-weight-[500] mb-5">Категории</h2>
            <ul className="flex flex-col gap-5 text-[#A1A1A1]">
               <li className="flex cursor-pointer gap-1.5">
                  <img src={film} alt="" />
                  <a href="#">Кино</a>
               </li>
               <li className="flex gap-1.5">
                  <img src={theatre} alt="" />
                  <a href="#">Театр</a>
               </li>
               <li className="flex gap-1.5">
                  <img src={concert} alt="" />
                  <a href="#">Концерты</a>
               </li>
               <li className="flex gap-1.5">
                  <img src={sport} alt="" />
                  <a href="#">Спорт</a>
               </li>
            </ul>
         </div>
         <div className="flex flex-col gap-14">
            <div className="flex-1">
               <h2 className="text-[#FFFFFF] text-[16px] text-weight-[500] mb-5">Связаться с нами</h2>
               <p className="text-primary">+998 (95) 897-33-38</p>
            </div>
            <div>
               <p className="text-[#FFFFFF] text-[16px] text-weight-[500] mb-5">Социальные сети</p>
               <div className="flex gap-5">
                  <img src={instagram} alt="Instagram"/>
                  <img src={facebook} alt="Facebook"/>
                  <img src={youtube} alt="Youtube"/>
               </div>
            </div>
         </div>
      </div>
   </footer>);
};

export default React.memo(Footer);
