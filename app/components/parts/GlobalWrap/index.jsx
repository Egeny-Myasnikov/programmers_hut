import { MainWrapper } from '@/parts/MainWrapper'
import { Footer } from "@/parts/Footer"
import { Header } from "@/parts/Header"
import { Main } from '@/parts/Main'

export const GlobalWrap = ({ children }) => {
    return (
        <MainWrapper>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </MainWrapper>

    )
}
