import './globals.css'
import vazirFont from '@/constants/vazirFont'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`${vazirFont.variable} font-sans`}>{children}</body>
    </html>
  )
}
