import { Yeseva_One, Josefin_Sans } from "next/font/google";

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