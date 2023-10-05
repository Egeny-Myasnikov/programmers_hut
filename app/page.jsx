// import Image from 'next/image'
import { Footer } from './components/parts/Footer'
import { Header } from './components/parts/Header'
import { Main } from './components/parts/Main'
import { MainWrapper } from './components/parts/MainWrapper'
import Loading from './loading'

export default function Home() {
  return (
    <MainWrapper>
      <Header />
      <Main>
        <h1>Привет!</h1>
      </Main>
      <Footer />
    </MainWrapper>
  )
}
