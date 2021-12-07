import PageHead from '../components/PageHead'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Script from 'next/script'

export default function Layout({ children }) {
    return (
        <>
            <PageHead/>
            <Header/>
            {children}
            <Script src="./scripts/app.js" />
      </>
    )
  }