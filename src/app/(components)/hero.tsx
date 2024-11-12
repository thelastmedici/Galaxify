// import React from 'react'
// import { dmsans, grotesk} from '../font'
// import Link from 'next/link'
// // import InputBox from './input'

// const Hero = () => {
//   return (
//     <section className="w-full max-w-7xl mx-auto px-3">
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
//         <div className="">
//           <div className='flex flex-col gap-6 items-center'>
//             <h1 
//             className={`${ grotesk.className } text-center min-[400px]:text-[80px] text-[60px] sm:text-[80px] md:text-[144px] tracking-wider leading-tight font-bold text-gradient`}>
//               Galaxy
//               <span 
//               className='capitalize'>
//                 Fi
//               </span>
//             </h1>
//             <p 
//             className={`text-center text-4xl ${dmsans.className}`}
//             >
//               Your all in one app
//             </p>
//             {/* <h1 className={`${grotesk.className} text-center text-3xl tracking-wider mt-4 !text-darkViolet will-change-auto`}>
//               Join the Waitlist
//             </h1> */}
//             <div className="text-center w-full !mt-4">
//               <Link 
//               className="py-2 px-4 rounded-md bg-darkViolet text-lavender text-xl !w-full !mt-5"
//               href="/waitlist">
//                 Join Waitlist
//               </Link>
//             </div>
//             <div className="flex flex-row gap-3 smgap-6 mt-6">
//               <Link href="#">
//                 <img src="/images/googleplay.png" alt="googleplay"/>
//               </Link>
//               <Link href="#">
//                 <img src="/images/appstore.png" alt="appstore"/>
//               </Link>
//             </div>
//           </div>
//           {/* <InputBox 
//           arrow={true}
//           key={1}
//           className='max-w-lg mx-auto mt-10'
//           /> */}
//         </div>

//         <div className="flex justify-end items-center w-fit flex-1">
//           <img src="/images/picture3.jpg" alt="picture"  className="w-[500] h-[500] object-cover object-top rounded-md"/>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

import React from 'react';
import { dmsans, grotesk } from '../font';
import Link from 'next/link';
// import InputBox from './input';

const Hero = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h1 
            className={`${grotesk.className} text-[60px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[120px] leading-tight font-bold text-gradient tracking-tight`}>
            Galaxy<span className="capitalize">Fi</span>
          </h1>
          <p 
            className={`text-2xl sm:text-3xl md:text-4xl ${dmsans.className}`}
          >
            Your all-in-one app
          </p>
          {/* <h1 className={`${grotesk.className} text-2xl sm:text-3xl tracking-wider mt-4 !text-darkViolet will-change-auto`}>
              Join the Waitlist
          </h1> */}
          <div className="w-full md:w-auto">
            <Link 
              className="inline-block py-2 px-6 rounded-md bg-darkViolet text-lavender text-lg md:text-xl mt-4"
              href="/waitlist"
            >
              Join Waitlist
            </Link>
          </div>
          <div className="flex gap-2 sm:gap-4 mt-6">
            <Link href="#">
              <img src="/images/googleplay.png" alt="googleplay" className=""/>
            </Link>
            <Link href="#">
              <img src="/images/appstore.png" alt="appstore" className=""/>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src="/images/picture3.jpg" alt="picture" className="w-[380px] sm:w-[460px] md:w-[500px] lg:w-[600px] h-auto object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
