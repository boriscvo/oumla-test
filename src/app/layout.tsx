import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { TanstackQueryProvider } from "@/providers/tanstack-query-provider/tanstack-query-provider"
import { Navigation } from "./blocks"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Oumla test app",
  description: "Oumla test app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased darkCustom`}
      >
        <TanstackQueryProvider>
          <Navigation />
          {children}
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
