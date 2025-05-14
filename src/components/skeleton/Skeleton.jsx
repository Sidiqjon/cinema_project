import React from 'react'
import './style.css'
const Skeleton = ({ count }) => {
  return (
    <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2'>
      {
        Array(count).fill("").map((_, index) => (
          <div key={index} className='skeleton__item'>
            <div className='skeleton__image skeleton__animation'></div>
            <div className='skeleton__line skeleton__animation'></div>
            <div className='skeleton__line skeleton__animation'></div>
          </div>
        ))
      }
    </div>
  )
}

export default Skeleton
