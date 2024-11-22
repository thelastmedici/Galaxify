import { DM_Sans, Familjen_Grotesk, Inter } from "next/font/google";

export const dmsans = DM_Sans({
  subsets : ['latin', 'latin-ext'],
  weight : ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display : 'swap',
  style: 'normal'
})

export const grotesk = Familjen_Grotesk({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight : ["400", "500", "600", "700"],
  display : "swap",
  style : "normal"
})

export const inter = Inter({
  subsets : ["latin", "latin-ext", "cyrillic"],
  weight : ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display : 'swap',
  style : 'normal',
})