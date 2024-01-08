import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ToastProvider from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rova',
  description: 'The best LMS Application',
  openGraph: {
    images:
      'https://rova-ykuv-b3rum02cg-yakshith027.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Febeafa62-6622-4676-8c89-7a8fe4f3065b-62jdjh.jpg&w=1920&q=75',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ConfettiProvider />

          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
