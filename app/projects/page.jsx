import { GlobalWrap } from '@/parts/GlobalWrap'
import { HiroBlock } from './Sections/Hiro'
import { TitleSection } from '@/UI/TitleSection'
export const metadata = {
  title: 'Проекты. Портфолио. Веб разработчик фрилансер Мясников Евгений',
  description: 'Создание сайтов в Ангарске. Веб разработчик фрилансер Мясников Евгений',
}
export default function Projects() {
  return (
    <GlobalWrap>
      <TitleSection>Проекты</TitleSection>
      <HiroBlock />
    </GlobalWrap>

  )
}
