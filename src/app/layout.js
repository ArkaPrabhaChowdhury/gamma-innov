import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:
    "Gamma Innovations - Empowering Businesses with Transformative Technology Solutions",
  description:
  "Gamma Innovations is dedicated to empowering businesses with innovative app and website development solutions that drive growth and propel businesses forward in the digital landscape. Discover our tailored services today!",
  keywords: [
    "Gamma Innovations",
    "web development",
    "app development",
    "software development",
    "digital marketing",
    "tech consultancy",
  ],
  metadataBase: new URL('https://www.gammainnovations.com'),
  alternates:{
    canonical: '/',
  },
  openGraph: {
    title:'Gamma Innovations - Software Development Solutions',
    description: "Gamma Innovations is dedicated to empowering businesses with innovative app and website development solutions that drive growth and propel businesses forward in the digital landscape. Discover our tailored services today!",
    url: 'https://www.gammainnovations.com',
    type: 'website',
    siteName: 'Gamma Innovations',
    images: '/gamma.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
