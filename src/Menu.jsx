import React from 'react'

const Menu = ({className,menuName}) => {
  return (
    <ul>
      <li className={`text-[14px] font-DM  ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu
