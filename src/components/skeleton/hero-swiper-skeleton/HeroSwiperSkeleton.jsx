import React from 'react';
import './HeroSwiperSkeleton.css';

const HeroSwiperSkeleton = () => {
  return (
    <div className="hero-skeleton mx-auto">
      <div className="skeleton-hero-image skeleton-animate" />
      <div className="skeleton-hero-title skeleton-animate" />
      <div className="skeleton-hero-meta skeleton-animate" />
      {/* <div className="skeleton-hero-button skeleton-animate" /> */}
    </div>
  );
};

export default HeroSwiperSkeleton;
