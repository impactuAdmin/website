import Head from 'next/head'
import Header from '../components/Header'
import MenuLayover from '../components/MenuLayover'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Stats from '../components/Stats'
import News from '../components/News'
import Script from 'next/script'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Impac&apos;tu</title>
        <meta name="description" content="Criamos impacto junto daqueles que mais precisam de nós." />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>
      </Head>

      <main>
        <Header/>
        <MenuLayover/>
        <Hero/>
        <Intro />
        <Stats />
        <News />
        <Script src="./scripts/app.js" />
      </main>
    </div>
  )
}
