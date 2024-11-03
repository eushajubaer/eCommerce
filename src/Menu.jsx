import React from 'react'

const Menu = ({className,menuName}) => {
  return (
    <ul>
      <li className={`text-sm font-DM text-menuColor hover:font-bold hover:text-menuColorH ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu
