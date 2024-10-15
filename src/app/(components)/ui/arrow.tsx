"use client"

import { RootState } from '@/app/store';
import React from 'react'
import { useSelector } from 'react-redux';

const Arrow = () => {
  const [ arrowColor, setArrowColor ] = React.useState("")
  const theme1 = useSelector((state:RootState) => state.ui.theme)

  React.useEffect(() => {
    setArrowColor(theme1 === "light" ? "#000000" : "#fff");
  }, [theme1])

  return (
    <svg width="80px" height="80px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, -1, 0, 0)">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>

      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

      <g id="SVGRepo_iconCarrier"> <path d="M35 262C160.529 140.938 328.006 207.285 361 215.518" stroke={arrowColor} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/> <path d="M343.69 143C355.23 190.289 361 214.681 361 216.177C361 218.421 327.488 234.13 312 258" stroke={arrowColor} stroke-opacity="1" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/> </g>

    </svg>
  )
}

export default Arrow
