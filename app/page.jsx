// import Image from 'next/image'
import { MyForm } from './components/UI/MyForm'
import { Footer } from './components/parts/Footer'
import { Header } from './components/parts/Header'
import { Main } from './components/parts/Main'
import { MainWrapper } from './components/parts/MainWrapper'

export default function Home() {
  return (
    <MainWrapper>
      <Header />
      <Main>
        <h1>Привет!</h1>
        <MyForm />
      </Main>
      <Footer />
    </MainWrapper>
  )
}
