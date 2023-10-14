// import Image from 'next/image'
import { HiroBlock } from './Sections/Hiro'
import { CSelect } from './components/UI/CSelect'
import { MyButton } from './components/UI/MyButton'
import { MyField } from './components/UI/MyField'
import { MyForm } from './components/UI/MyForm'
// import { MySelect } from './components/UI/MySelect'
import { Footer } from './components/parts/Footer'
import { Header } from './components/parts/Header'
import { Main } from './components/parts/Main'
import { MainWrapper } from './components/parts/MainWrapper'

export default function Home() {
  const options = ['Лендинг', 'Интернет магазин', 'Каталог', 'Одностраничный сайт']
  return (
    <MainWrapper>
      <Header />
      <Main>

        <HiroBlock />


        {/*  */}
        <MyForm >
          <MyField placeholder='Text' type='text' />
          <MyField placeholder='Text 2' type='text' />
          <CSelect options={options} defaultText='Выбрать' />
          <MyField labelText='Пароль' placeholder='Password' type='password' />
          <MyButton>Кнопка</MyButton>
        </MyForm>
        {/*  */}



      </Main>
      <Footer />
    </MainWrapper>
  )
}
