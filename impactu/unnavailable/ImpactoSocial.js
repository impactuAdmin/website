import PageHead from '../components/PageHead'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Departments from '../components/Departments'
import Script from 'next/script'
import Image from 'next/image'

const ImpactoSocial = () => {
    return (
        <>
            <section className="impactosocial-hero-wrapper">
                <div className="impactosocial-hero-content">
                    <div className='impactosocial-title'>
                        <h1>Impacto social</h1>
                    </div>
                </div>
            </section>
            <section className="impactosocial-background reveal">
                <section className="impactosocial-intro-content">
                    <div className="impactosocial-intro-title">
                        <h1>O nosso impacto:</h1>
                        <h2>Social</h2>
                    </div>
                    <div className="impactosocial-intro-title-2">
                        <div className="impactosocial-intro-img">
                            {/* <Image src="/senhora.webp" width="480" height="677" layout="fixed" objectFit="contain"/> */}
                            <img src="/senhora.webp" alt="senhora"/>
                        </div>

                        <div className="impactosocial-intro-text">
                            <h3>A Impac&rsquo;tu é uma associação de Impacto Social, composta por estudantes universitários
                                das Academias do Porto e Lisboa, com a missão de apoiar famílias em situação
                                socioeconómica mais debilitada.
                                <br/>
                                <br/>
                                Enquadrada dentro dos ODS <br/>
                                1 - Erradicar a Pobreza;<br/>
                                4 - Educação de Qualidade;<br/>
                                10 - Reduzir as desigualdades;<br/>
                                11 - Cidades e Comunidades Sustentáveis, a Associação trabalha na resiliência
                                e capacitação das famílias como na redução do nível de pobreza. Guiados pelos
                                objetivo de Inclusão social acreditamos que só conseguiremos criar impacto garantindo
                                a igualdade de oportunidades para todos e redução de desigualdades, sem esquecer que
                                uma dessas garantias será o acesso à habitação digna e serviços básicos.<br/>
                                <br/>

                                Vamos criar impacto?
                            </h3>
                        </div>
                    </div>
                </section>
                <Projects />
                <Departments />
            </section>
            <Footer/>
        </>
    )
}

export default ImpactoSocial;