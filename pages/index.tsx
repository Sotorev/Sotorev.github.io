import styled from 'styled-components'
import Head from 'next/head'
import Navbar from './Navbar'
import Hero from './Hero '

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const StyledMain = styled.main`
  @media screen and (max-width: 1024px) {
      padding: 0px 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 0px 25px;
  }
  
  max-width: 1600px;
  padding: 0px 150px;
  height: 300vh;
  position: relative;
  section {
    margin: 0 auto;
    max-width: 1000px;
  }
`
const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 1;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Manuel Soto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/manrev.ico" />
      </Head>
      <StyledHeader>
        <Navbar />
      </StyledHeader>
      <StyledMain>
        <Hero />
      </StyledMain>
    </>
  )
}