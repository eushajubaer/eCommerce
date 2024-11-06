import React from 'react'
import { GrLinkPrevious } from "react-icons/gr";

const NextArrow = (props) => {
    const { className,style,onClick } = props;
  return (
    <div
    className={`bg-ArrowColor inline-block p-5 rounded-full text-white absolute top-36 left-2 z-20 ${className}`}
   
    onClick={onClick}
  ><GrLinkPrevious /></div>
  )
}

export default NextArrow
