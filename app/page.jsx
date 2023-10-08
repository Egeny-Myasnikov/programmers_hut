// import Image from 'next/image'
import { MyButton } from './components/UI/MyButton'
import { MyField } from './components/UI/MyField'
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
        <MyForm >
          <MyField placeholder='Text' type='text' />
          <MyField placeholder='Text 2' type='text' />
          <MyField placeholder='Number' type='number' />
          <MyField labelText='Пароль' placeholder='Password' type='password' />
          <MyButton>Кнопка</MyButton>
        </MyForm>
      </Main>
      <Footer />
    </MainWrapper>
  )
}
