import { MyProvider } from './components/MyProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Веб разработчик фрилансер Мясников Евгений',
  description: 'Создание сайтов в Ангарске. Веб разработчик фрилансер Мясников Евгений',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <MyProvider>
          {children}
        </MyProvider>
      </body>
    </html>
  )
}
