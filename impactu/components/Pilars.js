import Image from 'next/image'

const Pilars = () => {
    return (
        <section className="about-pillars">
            <div className="about-pillars-content">
                <h1>Regemo-nos <br />
                    por estes pilares</h1>
            </div>
            <div className="pilares">
                <div className="column">
                    <Image src='/solidariedade.webp' layout="fill" alt="solidariedade"/>
                    <h2>SOLIDARIEDADE</h2>
                </div>
                <div className="column">
                    <Image src="/honestidade.webp" layout="fill" alt="honestidade"/>
                    <h2>HONESTIDADE</h2>
                </div>
                <div className="column">
                    <Image src="/empatia.webp" layout="fill" alt="empatia"/>
                    <h2>EMPATIA</h2>
                </div>
                <div className="column">
                    <Image src="/compromisso.webp" layout="fill" alt="solidariedade"/>
                    <h2>COMPROMISSO</h2>
                </div>
            </div>
        </section>
    )
}

export default Pilars;