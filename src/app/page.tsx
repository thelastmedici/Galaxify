import Hero from "./(components)/hero";
import PaymentSection from "./(components)/paymentsection";
import ImgGrid from "./(components)/ui/imggrid";
import { josefin } from "./font";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <Hero />
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <h1 className={`text-customBlack text-center dark:text-lavender !text-6xl font-light ${josefin.className}`}>Supercharge your financing with swift, reliable and borderless banking</h1>
      </div>
      <ImgGrid />
      <PaymentSection />
    </>
  );
}
