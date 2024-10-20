import Hero from "../components/Hero/Hero"
import AboutIntro from "../components/AboutIntro"
import AboutStarted from "../components/AboutStarted"
import Pilars from "../components/Pilars"
import Porto from "../components/Porto"
import Equipa from "../components/Equipa/Equipa"
import RecruitmentNews from "../components/RecruitmentNews"
import { datas } from "../public/data/dados"

const About = () => {
  return (
    <>
      <Hero title={"Quem somos, afinal?"} backgroundImage={"about2.webp"} />
      <section className="about-background">
        <AboutIntro />
        <Pilars />
        <Porto />
        {/* <Equipa /> */}
        <AboutStarted />
        {datas.length === 0 ? null : <RecruitmentNews />}
      </section>
    </>
  )
}

export default About
