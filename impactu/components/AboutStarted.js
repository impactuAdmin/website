
const phases = [
    {
        imsgSrc: "/ideia.webp",
        alt: "Grupo de amigos",
        width: "200",
        height: "127",
        title: "A IDEIA",
        description: "Em 2018, um grupo de amigos juntou-se com\nvontade de ajudar e de fazer a diferença no\ncentro histórico do Porto."
    },
    {
        imsgSrc: "/ideia2.webp",
        alt: "Grupo de amigos",
        width: "200",
        height: "145",
        title: "DEPOIS",
        description: "Surgiu a impac’tu, com a missão\nde criar impacto social em famílias carenciadas."
    }
];

const AboutStarted = () => {
    const listItems = phases.map((phase) =>
    <div key={phase.title}>
        <img src={phase.imsgSrc} alt={phase.alt}/>
        <h3>
            <strong>{phase.title}</strong><br />
        </h3>
        <p>
            {phase.description}
        </p>
    </div>
    );

    return (
        <section className="about-comecou">
            <h1>Como tudo começou</h1>
            <div className="horizontal-scroll-wrapper">
                <div className="horizontal-scroll-content">
                    {listItems}
                </div>
            </div>
        </section>
    )
}

export default AboutStarted;