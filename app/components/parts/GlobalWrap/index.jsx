import { Main } from "next/document"
import { Header } from "../Header"
import { MainWrapper } from "../MainWrapper"
import { Footer } from "../Footer"

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
