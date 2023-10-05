// import Image from 'next/image'
import { ProjectCards } from '../components/UI/ProjectCards'
import { Footer } from './../components/parts/Footer'
import { Header } from '../components/parts/Header'
import { Main } from './../components/parts/Main'
import { MainWrapper } from './../components/parts/MainWrapper'
import s from './page.module.css'

export default function Projects() {
  return (
    <MainWrapper>
      <Header />
      <Main>
        <h1 className={s.title}>Проекты</h1>
        <ProjectCards />
      </Main>
      <Footer />
    </MainWrapper>
  )
}
