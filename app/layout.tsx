import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({ 
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam"
});

export const metadata: Metadata = {
  title: 'TrungTamLuatSuX | Tư Vấn Pháp Lý Thân Thiện',
  description: 'Trung tâm luật sư tư vấn pháp lý chuyên nghiệp, thân thiện. Giải đáp mọi thắc mắc pháp luật của bạn một cách dễ hiểu và nhanh chóng.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
