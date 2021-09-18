import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import MenuLayover from '../components/MenuLayover'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Impac'tu</title>
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
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
