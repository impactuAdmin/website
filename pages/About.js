import PageHead from '../components/PageHead'
import Header from '../components/Header'
import MenuLayover from '../components/MenuLayover'
import AboutIntro from '../components/AboutIntro'
import AboutHero from '../components/AboutHero'
import Pilars from '../components/Pilars'
import Porto from '../components/Porto'

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
            </section>
        </>
    )
}

export default About;