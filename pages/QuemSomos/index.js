import Hero from '../../components/Hero/Hero'
import AboutIntro from '../../components/AboutIntro/AboutIntro'
import AboutStarted from '../../components/AboutStarted/AboutStarted'
import Pilars from '../../components/Pilars/Pilars'
import Porto from '../../components/Porto/Porto'
import RecruitmentNews from '../../components/RecruitmentNews'
import { datas } from '../../public/data/dados'
import styles from './QuemSomos.module.css'

const About = () => {
  return (
    <>
      <Hero title={'Quem somos, afinal?'} backgroundImage={'about2.webp'} />
      <section className={styles['about-background']}>
        <AboutIntro />
        <Pilars />
        <Porto />
        <AboutStarted />
        {datas.length === 0 ? null : <RecruitmentNews />}
      </section>
    </>
  )
}

export default About
