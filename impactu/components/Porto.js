import Image from 'next/image'

const Porto = () => {
    return (
        <section className="about-porto">
            <div className="about-porto-content">
                <div className="about-porto-content-top">
                    <h2>Onde?</h2>
                </div>
                <div className="about-porto-content-bottom">
                    <div className="teste">
                        <Image src="/porto.webp" alt="Rio Douro" layout="fixed" width="360" height="540"/>
                    </div>
                    <div className="about-porto-content-bottom-text">
                        <h1>A nossa área de ação</h1>
                        <h3>
                            A Impac’tu é uma associação de estudantes do Porto, sem fins lucrativos, que ajuda pessoas e
                            famílias carenciadas na sua área de ação. Vamos criar impacto? Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Porto;