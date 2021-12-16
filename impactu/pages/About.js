import AboutHero from '../components/AboutHero'
import AboutIntro from '../components/AboutIntro'
import AboutStarted from '../components/AboutStarted'
import Pilars from '../components/Pilars'
import Porto from '../components/Porto'
import RecruitmentNews from '../components/RecruitmentNews'

const About = () => {
    return (
        <>
            <AboutHero />
            <section className="about-background reveal">
                <AboutIntro />
                <Pilars />
                <Porto />
                <AboutStarted/>
                <RecruitmentNews/>
            </section>
        </>
    )
}

export default About;