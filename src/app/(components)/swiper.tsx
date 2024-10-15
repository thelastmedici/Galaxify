"use client"
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperCore } from 'swiper/types'
// import { Zap } from "lucide-react"
// import { CiCreditCard1 } from "react-icons/ci";
// import { IoWalletOutline } from "react-icons/io5";
// import { GoShieldCheck } from "react-icons/go";
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import { josefin, yeseva } from '../font';

// // import required modules
// import { EffectCards, Autoplay } from 'swiper/modules';

// export default function Swipe() {
//   const [ sliderIndex, setSliderIndex ] = React.useState<number>(0);

//   const slideChanger = (swiper : SwiperCore) => {
//     setSliderIndex(swiper.realIndex) // Use realIndex for original slide index 
//   }

//   console.log(sliderIndex)

//   return (
//     <div className="relative grid grid-cols-2 py-20 px-12 gap-6">
//       <div className="">
//         <h1 className={`${yeseva.className} text-left text-4xl`}>
//           Our Product Offers
//         </h1>
//         <div className="flex flex-col gap-3 mt-5">
//           <div className={`flex flex-col gap-5 ${0 === sliderIndex ? 'bg-gray-500 bg-opacity-25' : 'bg-transparent'} rounded-xl p-3 transition-all duration-300`}>
//             <div className={`flex space-x-3 flex-row items-center`}>
//               <Zap />
//               <h1>Swift Transactions</h1>
//             </div>
//             {
//               0 === sliderIndex && (
//                 <div className="">
//                   <p>
//                     Supercharge your financing with swift, reliable and borderless banking.
//                   </p>
//                 </div>
//               )
//             }
//           </div>
//           <div className={`flex flex-col gap-5 ${1 === sliderIndex ? 'bg-gray-500 bg-opacity-25' : 'bg-transparent'} rounded-xl p-3 transition-all duration-300`}>
//             <div className={`flex space-x-3 flex-row items-center`}>
//               <CiCreditCard1 />
//               <h1>Virtual Dollar Card</h1>
//             </div>
//             {
//               1 === sliderIndex && (
//                 <div className="">
//                   <p>
//                     Supercharge your financing with swift, reliable and borderless banking.
//                   </p>
//                 </div>
//               )
//             }
//           </div>
//           <div className={`flex flex-col gap-5 ${2 === sliderIndex ? 'bg-gray-500 bg-opacity-25' : 'bg-transparent'} rounded-xl p-3 transition-all duration-300`}>
//             <div className={`flex space-x-3 flex-row items-center`}>
//               <IoWalletOutline />
//               <h1>Streamlined Bill Payment</h1>
//             </div>
//             {
//               2 === sliderIndex && (
//                 <div className="">
//                   <p>
//                     Supercharge your financing with swift, reliable and borderless banking.
//                   </p>
//                 </div>
//               )
//             }
//           </div>
//           <div className={`flex flex-col gap-5 ${3 === sliderIndex ? 'bg-gray-500 bg-opacity-25' : 'bg-transparent'} rounded-xl p-3 transition-all duration-300`}>
//             <div className={`flex space-x-3 flex-row items-center p-3`}>
//               <GoShieldCheck />
//               <h1>Payment Protected</h1>
//             </div>
//             {
//               3 === sliderIndex && (
//                 <div className="">
//                   <p>
//                     Supercharge your financing with swift, reliable and borderless banking.
//                   </p>
//                 </div>
//               )
//             }
//           </div>
//         </div>
//       </div>
//       <div className="border">
//         <Swiper
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           onSlideChange={slideChanger}
//           effect={'cards'}
//           grabCursor={true}
//           modules={[EffectCards, Autoplay]}
//           className="mySwiper"
//         >
//           <SwiperSlide>Slide 1</SwiperSlide>
//           <SwiperSlide>Slide 2</SwiperSlide>
//           <SwiperSlide>Slide 3</SwiperSlide>
//           <SwiperSlide>Slide 4</SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { Zap } from "lucide-react";
import { CiCreditCard1 } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import { josefin, yeseva } from '../font';
import Image from 'next/image';

export default function Swipe() {
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const slideChanger = (swiper: SwiperCore) => {
    setSliderIndex(swiper.realIndex); // Use realIndex for original slide index
  };

  console.log(sliderIndex);

  return (
    <div className="relative grid grid-cols-1 min-[991px]:grid-cols-2 p-6 sm:py-20 sm:px-12 gap-10 overflow-hidden">
      <div className="">
        <h1 className={`${yeseva.className} text-left text-4xl`}>
          Our Product Offers
        </h1>
        <div className={`flex flex-col gap-6 mt-5 ${ josefin.className }`}>
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`flex flex-col gap-5 rounded-xl p-3 transition-all duration-300 
                ${sliderIndex === index ? 'bg-gray-500 bg-opacity-25' : 'bg-transparent'}`}
            >
              <div className={`flex space-x-3 flex-row items-center p-2 cursor-pointer`}>
                {index === 0 && <Zap />}
                {index === 1 && <CiCreditCard1 />}
                {index === 2 && <IoWalletOutline />}
                {index === 3 && <GoShieldCheck />}
                <h1 className="!font-bold text-lg">{index === 0 ? "Swift Transactions" : index === 1 ? "Virtual Dollar Card" : index === 2 ? "Streamlined Bill Payment" : "Payment Protected"}</h1>
              </div>
              <div
                className={`overflow-hidden transition-transform duration-300 
                  ${sliderIndex === index ? 'max-h-24' : 'max-h-0'}`} // Change max-h-24 to suit your content height
              >
                {sliderIndex === index && (
                  <div className="">
                    <p>
                      Supercharge your financing with swift, reliable, and borderless banking.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end w-full">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={slideChanger}
          effect={'cards'}
          // grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
            src={`/images/Transactions.png`}
            width={300}
            height={300}
            alt="transaction"
            quality={100}
            className='w-full h-full '
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            src={`/images/phonecard.png`}
            width={300}
            height={300}
            alt="transaction"
            quality={100}
            className='w-full h-full '
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            src={`/images/phones.png`}
            width={300}
            height={300}
            alt="transaction"
            quality={100}
            className='w-full h-full '
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            src={`/images/paymentsecured.png`}
            width={300}
            height={300}
            alt="transaction"
            quality={100}
            className='w-full h-full '
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
