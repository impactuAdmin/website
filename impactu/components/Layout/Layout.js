import PageHead from '../PageHead'
import Header from '../Header'
import Footer from '../Footer'
import Script from 'next/script'

export default function Layout({ children }) {
    return (
        <>
            <PageHead/>
            <Header/>
            {children}
            <Footer />
            <Script src="./scripts/app.js" />
      </>
    )
  }