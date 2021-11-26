import Image from 'next/image'

const Pilars = () => {
    return (
        <section className="about-pillars">
            <div className="about-pillars-wrapper">
                <div className="about-pillars-content">
                    <h1>Regemo-nos <br />
                        por estes pilares</h1>
                </div>
            </div>
            <div className="pilares">
                <div className="column">
                    <Image src='/solidariedade.webp' layout="fixed" width="300" height="300" alt="solidariedade"/>
                    <figcaption>SOLIDARIEDADE</figcaption>
                </div>
                <div className="column">
                    <Image src="/honestidade.webp" layout="fixed" width="300" height="300" alt="honestidade"/>
                    <figcaption>HONESTIDADE</figcaption>
                </div>
                <div className="column">
                    <Image src="/empatia.webp" layout="fixed" width="300" height="300" alt="empatia"/>
                    <figcaption>EMPATIA</figcaption>
                </div>
                <div className="column">
                    <Image src="/compromisso.webp" layout="fixed" width="300" height="300" alt="solidariedade"/>
                    <figcaption>COMPROMISSO</figcaption>
                </div>
            </div>
        </section>
    )
}

export default Pilars;