// import Image from 'next/image'
import { ProjectCards } from '../components/UI/ProjectCards'
import { Footer } from './../components/parts/Footer'
import { Header } from '../components/parts/Header'
import { Main } from './../components/parts/Main'
import { MainWrapper } from './../components/parts/MainWrapper'
import { TitleSection } from '../components/UI/TitleSection'

export default function Projects() {
  return (
    <MainWrapper>
      <Header />
      <Main>
        <TitleSection>Проекты</TitleSection>
        <ProjectCards />
      </Main>
      <Footer />
    </MainWrapper>
  )
}
