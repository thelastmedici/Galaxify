import Hero from "./(components)/hero";
import PaymentSection from "./(components)/paymentsection";
import Swipe from "./(components)/swiper";
import ImgGrid from "./(components)/ui/imggrid";
import { dmsans } from "./font";

export default function Home() {
  return (
    <div className="mt-20">
      <div className="w-full h-screen flex items-center justify-center">
        <Hero />
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <h1 className={`text-customBlack text-center dark:text-lavender text-4xl md:!text-6xl font-light ${dmsans.className}`}>Supercharge your financing with swift, reliable and borderless banking</h1>
      </div>
      <ImgGrid />
      <Swipe />
      <PaymentSection />
    </div>
  );
}
