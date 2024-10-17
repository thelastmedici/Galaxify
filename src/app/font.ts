import { Yeseva_One, Josefin_Sans, DM_Sans } from "next/font/google";
import localFont from "next/font/local";


export const yeseva = Yeseva_One({
  subsets : ['latin', 'latin-ext', "cyrillic"],
  weight : ['400'],
  display : "swap",
  style : 'normal'
})

export const josefin = Josefin_Sans({
  subsets : [ 'latin', 'latin-ext' ],
  weight : ['100', '200', '300', '400', '500', '600', '700'],
  display : 'swap',
  style : 'normal'
})

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