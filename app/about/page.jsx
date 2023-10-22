// import Image from 'next/image'
import { TitleSection } from '@/UI/TitleSection'
import { GlobalWrap } from '@/parts/GlobalWrap'

export const metadata = {
  title: 'Обо мне. Веб разработчик фрилансер Мясников Евгений',
  description: 'Создание сайтов в Ангарске. Веб разработчик фрилансер Мясников Евгений',
}

export default function About() {
  return (
    <GlobalWrap>
      <TitleSection>Обо мне</TitleSection>
    </GlobalWrap>
  )
}
