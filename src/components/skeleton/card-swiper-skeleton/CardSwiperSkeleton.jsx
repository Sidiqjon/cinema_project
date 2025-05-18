import React from 'react';
import './CardSwiperSkeleton.css';

const CardSwiperSkeleton = ({ count = 4 }) => {
  return (
    <div className="card-skeleton container mx-auto mb-5">
      <div className="card-skeleton-wrapper">
        {Array(count).fill("").map((_, index) => (
          <div key={index} className="card-skeleton-item">
            <div className="card-skeleton-img skeleton-animate" />
            <div className="card-skeleton-title skeleton-animate" />
            <div className="card-skeleton-meta skeleton-animate" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSwiperSkeleton;
