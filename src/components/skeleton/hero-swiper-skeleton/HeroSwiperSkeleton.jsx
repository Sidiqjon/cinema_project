import React from "react";
import "./HeroSwiperSkeleton.css";

export default function HeroSwiperSkeleton() {
  return (
    <div className="hero_swiper mx-auto">
      <div className="skeleton-main-wrapper">
        <div className="skeleton-main-img shimmer"></div>
      </div>

      <div className="thumb-controls flex items-center justify-center mt-2">
        <div className="skeleton-btn shimmer"></div>
        <div className="mySwiper skeleton-thumbs">
          {[...Array(4)].map((_, index) => (
            <div className="skeleton-thumb shimmer" key={index}></div>
          ))}
        </div>
        <div className="skeleton-btn shimmer"></div>
      </div>
    </div>
  );
}
