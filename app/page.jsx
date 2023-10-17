// import Image from 'next/image'
import { HiroBlock } from './Sections/Hiro'
import { TitleSection } from './components/UI/TitleSection'

import { Footer } from './components/parts/Footer'
import { Header } from './components/parts/Header'
import { Main } from './components/parts/Main'
import { MainWrapper } from './components/parts/MainWrapper'

export default function Home() {
  return (
    <MainWrapper>
      <Header />
      <Main>
        <TitleSection>Далеко-далеко </TitleSection>
        <HiroBlock />
      </Main>
      <Footer />
    </MainWrapper>
  )
}
