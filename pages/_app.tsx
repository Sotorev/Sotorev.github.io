import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../styles/globals.css'
const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #1b1f24;
    --secondary: #a77bf3;
    --tertiary: #93f5ec;
    --quaternary: #05AFF2;
    --text-primary: #ccd6f6;
    --text-secondary: #8b949e;
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: all 500ms ease-in-out;
  }
  /* .fade-exit {
    background-color: red;
    opacity: 0.01;
    transform: translateY(0px);
  }
  .fade-exit-active {
    background-color: yellow;
    opacity: 1;
    transform: translateY(20px);
    transition: all 500ms  ease-in-out;
  } */
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: scroll;
    background-color: var(--primary);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Mona Sans", sans-serif;
  }
  section {
	  min-height: 100vh;
    box-sizing: border-box;
    padding-top: 150px;
  }
  @font-face {
    font-family: "Mona Sans";
    src: url("/fonts/Mona-Sans.woff2")
        format("woff2 supports variations"),
      url("/fonts/Mona-Sans.woff2") format("woff2-variations");
    font-weight: 200 900;
    font-stretch: 75% 125%;
  }

`

interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}