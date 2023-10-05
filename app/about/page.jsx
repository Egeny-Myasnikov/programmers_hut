// import Image from 'next/image'
import { Footer } from '../components/parts/Footer'
import { Header } from '../components/parts/Header'
import { Main } from '../components/parts/Main'
import { MainWrapper } from '../components/parts/MainWrapper'

export default function About() {
  return (
    <MainWrapper>
      <Header />
      <Main>
        <h1>About me</h1>
      </Main>
      <Footer />
    </MainWrapper>
  )
}
