import Head from 'next/head'
import Nav from 'src/components/Nav'
import { ThemeProvider } from 'theme-ui'
import theme from 'theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta
          name='description'
          content='JavaScript Best - online JavaScript course reviews - find your best JavaScript online courses'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://javascriptbest.com' />
        <meta
          property='og:title'
          content='JavaScriptBest - online JS course reviews'
        />
        <meta
          property='og:image'
          content='https://javascriptbest.com/images/javascriptbest-main.jpg'
        />
        <meta
          property='og:description'
          content='Share your favourite JavaScript online courses!'
        />
        <meta property='og:site_name' content='JavaScriptBest' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <link rel='stylesheet' href='/dist/style.css' />
        <title>Welcome to JS Best</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
