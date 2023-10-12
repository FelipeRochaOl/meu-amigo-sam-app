import { Roboto } from "next/font/google";

export const robotoLight = Roboto({
  display: 'swap',
  weight: ['300'],
  subsets: ['latin'],
  variable: '--font-roboto-light'
})
export const robotoBold = Roboto({
  display: 'swap',
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-roboto-bold'
})
export const roboto = Roboto({
  display: 'swap',
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-roboto-normal'
})