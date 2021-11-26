import Image from 'next/image'

const AboutIntro = () => {
    return (
        <section className="about-intro-content">
            <div className="about-intro-title">
                <h1>Uma família, <br />
                    unida pelo mesmo objetivo:</h1>
                <h2>Ajudar</h2>
            </div>
            <div className="about-intro-title-2">
                <div className="about-intro-img">
                    <Image src='/pipo.webp' alt='news' width="417" height="625" layout='intrinsic'/>
                </div>
                <div className="about-intro-text">
                    <h3>A Impac’tu é uma associação sem fins lucrativos, composta por jovens universitários da Academia
                        do Porto, que tem como missão acompanhar e apoiar pessoas e famílias que se encontram em
                        condições socioeconómicas debilitadas, para a criação de impacto social.
                        Os nossos objetivos são: <br/> <br/>
                        • Integração na comunidade e combate à solidão <br/>
                        • Inclusão social <br/>
                        • Combate à pobreza <br/>
                        • Empoderamento para autonomia familiar <br/>
                        • Apoio habitacional <br/>
                        • Apoio no aumento da literacia jurídica
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default AboutIntro;

