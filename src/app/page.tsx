import Hero from "./(components)/hero";
import PaymentSection from "./(components)/paymentsection";
import Swipe from "./(components)/swiper";
import ImgGrid from "./(components)/ui/imggrid";
import { dmsans } from "./font";

export default function Home() {
  return (
    <div className="">
      <div className="w-full min-h-screen flex items-center justify-center my-[4.5rem]">
        <Hero />
      </div>
      <div className="w-full max-w-5xl mx-auto my-10">
        <h1 className={`text-center text-lavender text-3xl md:!text-4xl font-light ${dmsans.className}`}>
          Unlock a new era of financial innovation with a platform built to elevate your financial management
        </h1>
      </div>
      <ImgGrid />
      <Swipe />
      <PaymentSection />
    </div>
  );
}
