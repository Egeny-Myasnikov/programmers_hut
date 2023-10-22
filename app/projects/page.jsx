// import { GlobalWrap } from '@/parts/GlobalWrap'
import { TitleSection } from '../components/UI/TitleSection'
import { GlobalWrap } from '../components/parts/GlobalWrap'
import { HiroBlock } from './Sections/Hiro'
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
