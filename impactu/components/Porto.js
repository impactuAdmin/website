import Image from 'next/image'

const Porto = () => {
    return (
        <section className="about-porto">
            <div className="about-porto-content">
                <h1>Porquê nas cidades</h1>
                <h2>Porto e <br/>Lisboa?</h2>
                <h3><Image src="/porto.webp" alt="Rio Douro" layout="fill"/>
                    A Impac’tu é uma associação de estudantes do Porto, <br />
                    sem fins lucrativos, que ajuda pessoas e famílias <br />
                    carenciadas na sua área de ação. Vamos criar impacto?<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed pellentesque turpis non ultrices congue. Sed ac rutrum leo. <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed pellentesque turpis non ultrices congue. Sed ac rutrum leo. </h3>
            </div>
        </section>
    )
}

export default Porto;