import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #a77bf37a;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #a77bf3;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #8e53f5;
  }
  :root {
    --primary: #1b1f24;
    --secondary: #a77bf3;
    --tertiary: #93f5ec;
    --text-primary: #ccd6f6;
  }
  body {
    position: relative;
    z-index: 0;
    /* overflow: hidden; */
    background-color: var(--primary);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Mona Sans", sans-serif;
  }
  @font-face {
  font-family: "Mona Sans";
  src: url("/fonts/Mona-Sans.woff2")
      format("woff2 supports variations"),
    url("/fonts/Mona-Sans.woff2") format("woff2-variations");
  font-weight: 200 900;
  font-stretch: 75% 125%;
}

  html {
  scroll-behavior: smooth;
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