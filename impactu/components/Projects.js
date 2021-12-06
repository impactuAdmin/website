import Link from 'next/link'

const projects = [
    {
        link: "https://www.instagram.com/p/CIMJGPjnItZ/",
        imgSrc: "/presente.webp",
        projectName: "Partilha o teu Presente",
        year: "2020"
    },
    {
        link: "https://www.instagram.com/p/B_FKUkdnQMs/",
        imgSrc: "/bagosdouro.webp",
        projectName: "Partilha o teu Presente",
        year: "2020"
    },
    {
        link: "https://www.instagram.com/p/B9sLvjjHUHW/",
        imgSrc: "/portaimpactu.webp",
        projectName: "Partilha o teu Presente",
        year: "2020"
    },
    {
        link: "https://www.instagram.com/p/CDZl9t4n1qP/",
        imgSrc: "/pesca.webp",
        projectName: "Partilha o teu Presente",
        year: "2020"
    },
    {
        link: "https://www.instagram.com/p/CMdPBmNnlR6/",
        imgSrc: "/jornadas.webp",
        projectName: "Partilha o teu Presente",
        year: "2020"
    },
    {
        link: "https://www.instagram.com/p/CNlKAV1n8Nc/",
        imgSrc: "/atequando.webp",
        projectName: "Partilha o teu Presente",
        year: "2020"
    },
];

const Projects = () => {
    const projectList = projects.map((project) => 
        <div className="column-projetos" key={project.imgSrc}>
            <Link href={project.link}>
                <a>
                    <img src={project.imgSrc} style={{width: "100%"}}/>
                </a>
            </Link>
            <p>{project.projectName}<br/>{project.year}</p>
        </div>
    );
    return (
        <section className="section-projetos">
            <div className="section-projetos-content">
                <h1>Projetos Impac&rsquo;tu</h1>
            </div>
            <div className="projetos">
                {projectList}
            </div>
                    
        </section>
    )
}

export default Projects;