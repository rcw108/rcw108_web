import type { Metadata } from 'next'
import { Space_Grotesk, Montserrat } from 'next/font/google'
import './globals.scss'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'


const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap', })
const mont = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-mont' })


export const metadata: Metadata = {
  title: 'RCW108',
  description: 'Star forming region',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mont.variable} ${space.variable}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
