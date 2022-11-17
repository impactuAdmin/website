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
                    <h3>A Impac&rsquo;tu é uma associação sem fins lucrativos, constituída por jovens do Porto e de Lisboa, cuja missão é apoiar e capacitar pessoas e famílias em situação vulnerável, para a sua inserção social.<br />
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

