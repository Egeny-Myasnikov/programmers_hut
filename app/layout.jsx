import './globals.css'
import { Inter } from 'next/font/google'
import { ProjectCardsProvider, ModaWindowProvider } from './providers/ProjectCardsProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Веб разработчик фрилансер Мясников Евгений',
  description: 'Создание сайтов в Ангарске. Веб разработчик фрилансер Мясников Евгений',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ModaWindowProvider>
          <ProjectCardsProvider>
            {children}
          </ProjectCardsProvider>
        </ModaWindowProvider>
      </body>
    </html>
  )
}
