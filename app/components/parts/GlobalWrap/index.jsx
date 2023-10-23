import { Header } from "../Header"
import { MainWrapper } from "../MainWrapper"
import { Footer } from "../Footer"
import { Main } from "../Main"

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
