import Header from '../components/Header'
import PageHead from '../components/PageHead'
import Home from './Home'

export default function App() {
  return (
    <div >
      <PageHead/>

      <main>
        <Header/>
        <Home/>
      </main>
    </div>
  )
}
