
const Pilars = () => {
    return (
        <section className="about-pillars">
            <div className="about-pillars-wrapper reveal">
                <div className="about-pillars-content">
                    <h1>Regemo-nos por estes pilares</h1>
                </div>
            </div>
            <div className="pilares reveal">
                <div className="column">
                    <img src='/solidariedade.webp' alt="solidariedade" />
                    <figcaption>SOLIDARIEDADE</figcaption>
                </div>
                <div className="column">
                    <img src="/honestidade.webp" alt="honestidade" />
                    <figcaption>HONESTIDADE</figcaption>
                </div>
                <div className="column">
                    <img src="/empatia.webp" alt="empatia" />
                    <figcaption>EMPATIA</figcaption>
                </div>
                <div className="column">
                    <img src="/compromisso.webp" alt="solidariedade" />
                    <figcaption>COMPROMISSO</figcaption>
                </div>
            </div>
        </section>
    )
}

export default Pilars;