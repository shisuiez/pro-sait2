import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansKr = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
})

const AnimatedNav = dynamic(() => import('../components/AnimatedNav'), { ssr: false });

export const metadata: Metadata = {
  title: 'CareerGlobal - Your Global Career Path',
  description: 'Find your perfect international career path with CareerGlobal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSansKr.variable} font-sans`}>
        <AnimatedNav />
        {children}
      </body>
    </html>
  )
} 