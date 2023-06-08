import PageHead from '../PageHead'
import Header from '../Header/Header'
import Footer from '../Footer'
import Script from 'next/script'
import { datas } from '../../public/data/dados'

export default function Layout({ children }) {
  return (
    <>
      <PageHead />
      <Header datasDeRecrutamento={datas} />
      {children}
      <Footer datasDeRecrutamento={datas} />
      <Script src="./scripts/app.js" />
    </>
  )
}
