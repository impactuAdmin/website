import MenuLayover from '../components/MenuLayover'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Stats from '../components/Stats'
import News from '../components/News'
import Script from 'next/script'

const Home = () => {
    return (
        <>
            <MenuLayover/>
            <Hero/>
            <Intro />
            <Stats />
            <News />
            <Script src="./scripts/app.js" />
        </>
    )
}

export default Home;