import React from 'react'

const Badge = ({className,badgeName}) => {
  return (
   <div className={`font-DM font-bold text-sm py-3 w-[90px] text-center bg-black text-white ${className}`}>{badgeName}</div>
  )
}

export default Badge
