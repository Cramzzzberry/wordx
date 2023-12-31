import './globals.css'
import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'

const notoSerif = Noto_Serif({ 
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSerif.className}>{children}</body>
    </html>
  )
}
