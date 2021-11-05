import Image from 'next/image'

const AboutIntro = () => {
    return (
        <section className="about-intro-content">
            <div className="about-intro-title">
                <h1>Uma família, <br />
                    unida pelo mesmo objetivo.</h1>
                <h2>Ajudar</h2>

                <h3><Image src='/pipo.webp' alt='news' layout='fill'/> A Impac’tu é uma associação sem fins lucrativos,
                    <br />
                    composto por jovens universitários da Academia do Porto, <br />
                    que tem como missão acompanhar e apoiar pessoas e famílias <br />
                    que se encontram em condições socioeconómicas debilitadas <br />
                    para a criação de impacto social.
                </h3>
            </div>
        </section>
    )
}

export default AboutIntro;

