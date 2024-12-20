"use client"

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { dmsans } from '../font';
import { confettiToggler } from '../store/uiSlice';
import ConfettiParticle from './confettiparticle';


const SuccessModal = () => {
  const dispatch = useDispatch();
  const confetti = useSelector((state:RootState) => state.ui.confettiSwitch);


  React.useEffect(() => {
    if (confetti) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },[ confetti ])
  
  return (
    <>
    {
      confetti && (
        <div className='fixed bg-black bg-opacity-90 h-screen w-full flex items-center justify-center z-[10000] top-0 left-0 !text-customBlack px-3'>
          <ConfettiParticle />
          <div className={`${dmsans.className}  w-full max-w-[40rem] p-6 rounded-lg !text-lavender gap-6 flex flex-col text-center items-center bg-[#59595999]/25 backdrop-blur-[10px] relative !-z-10`}>
            <span className='text-base font-semibold'>
              🎉 Yay!!!!!
            </span>

            <h1 className="text-6xl font-bold tracking-tight !text-lavender">
              Thanks for Joining
            </h1>

            <p className="!text-lavender text-lg">
              You&apos;re all set! We&apos;ll keep you updated with the latest news and notify you as soon as we launch. Stay tuned!
            </p>

            <button 
            onClick={() => dispatch(confettiToggler(false))}
            className="px-4 py-2 bg-darkViolet text-lavender w-fit focus:outline-none rounded-md">
              Close Popup
            </button>
          </div>
        </div>
      )
    }
    </>
  )
}

export default SuccessModal
