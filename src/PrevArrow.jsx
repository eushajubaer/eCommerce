import React from 'react'
import { GrLinkNext } from "react-icons/gr";

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
    className={`bg-ArrowColor inline-block p-5 rounded-full text-white absolute right-2 top-36 z-10   ${className}`}
   
    onClick={onClick}
  ><GrLinkNext /></div>
  )
}

export default PrevArrow
