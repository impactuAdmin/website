import PageHead from '../components/PageHead'
import Header from '../components/Header'
import MenuLayover from '../components/MenuLayover'
import AboutIntro from '../components/AboutIntro'
import AboutHero from '../components/AboutHero'
import Pilars from '../components/Pilars'
import Porto from '../components/Porto'
import AboutStarted from '../components/AboutStarted'
import RecruitmentNews from '../components/RecruitmentNews'
import Footer from '../components/Footer'
import Script from 'next/script'

const About = () => {
    return (
        <>
            <PageHead/>
            <Header/>
            <MenuLayover/>
            <AboutHero />
            <section className="about-background reveal">
                <AboutIntro />
                <Pilars />
                <Porto />
                <AboutStarted/>
                <RecruitmentNews/>
            </section>
            <Footer/>
            <Script src="./scripts/app.js" />
        </>
    )
}

export default About;