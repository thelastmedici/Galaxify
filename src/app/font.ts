import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const dmsans = DM_Sans({
  subsets : ['latin', 'latin-ext'],
  weight : ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display : 'swap',
  style: 'normal'
})

export const sofia = localFont({
  src: "./fonts/SofiaProRegular.otf",
  // variable: "--font-geist-sans",
  weight: "400, 700",
  display : 'swap',
});