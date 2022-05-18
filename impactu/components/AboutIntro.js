const AboutIntro = () => {
    return (
        <section className="about-intro-content reveal">
            <div className="about-intro-title">
                <h1 style={{ textAlign: "left" }}>Uma família,<br />
                    unida pelo mesmo objetivo</h1>
                <h2>Ajudar</h2>
            </div>
            <div className="about-intro-title-2">
                <div className="about-intro-img">
                    <img src='/pipo.webp' alt='pipo' />
                </div>
                <div className="about-intro-text">
                    <h3>A Impac&rsquo;tu é uma associação sem fins lucrativos, composta por jovens universitários da Academia
                        do Porto, que tem como missão acompanhar e apoiar pessoas e famílias que se encontram em
                        condições socioeconómicas debilitadas, para a criação de impacto social. <br />
                        <br />
                        <strong>Os nossos objetivos são:</strong> <br />
                        • Erradicação da pobreza <br />
                        • Educação de qualidade <br />
                        • Redução das desigualdades <br />
                        • Cidades e comunidades sustentáveis
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default AboutIntro;

