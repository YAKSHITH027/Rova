import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ToastProvider from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'
import { ThemeProvider } from '@/components/providers/themeprovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rova',
  description: 'Learn from courses or Post your courses',
  openGraph: {
    images: 'https://i.ibb.co/PhNpQWV/Screenshot-156.png',
    title: 'Rova',
    description: 'Learn from courses or Post your courses',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ConfettiProvider />
        <ToastProvider />
        <ThemeProvider attribute='class' defaultTheme='dark'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
