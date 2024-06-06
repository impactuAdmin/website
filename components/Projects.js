import Link from "next/link"

const projects = [
  {
    link: "https://www.instagram.com/p/CZzQrEeIc1r/",
    imgSrc: "/escolas.jpg",
    projectName: `Escolas de Impac'tu`,
    year: "2022-2024",
  },
  {
    link: "https://www.instagram.com/p/Czw3mxDohox/",
    imgSrc: "/voz.webp",
    projectName: "Dá a tua voz",
    year: "2023",
  },
  {
    link: "https://www.instagram.com/p/CuXjymnous0/",
    imgSrc: "/ser.webp",
    projectName: "Projeto Ser",
    year: "2023",
  },
  {
    link: "https://open.spotify.com/show/5ZlORAFGvV1JvxYoRP6gtk?si=j10iOG9uS6anHmjcjFovmA",
    imgSrc: "/podcast.jpg",
    projectName: "Podcast Vestir a Camisola",
    year: "2023",
  },
  {
    link: "https://www.instagram.com/p/CnAd22dte4S/",
    imgSrc: "/bairro.jpg",
    projectName: "Bairro Feliz",
    year: "2022",
  },
  {
    link: "https://www.instagram.com/p/ChNpmQpI7oX/",
    imgSrc: "/pesca.webp",
    projectName: "Mãos à Pesca",
    year: "2020-2022",
  },
  {
    link: "https://www.instagram.com/p/CdJSaDjI5Eu/",
    imgSrc: "/novavida.jpg",
    projectName: "Dá-me uma nova vida",
    year: "2022",
  },
  {
    link: "https://www.instagram.com/p/CNlKAV1n8Nc/",
    imgSrc: "/atequando.webp",
    projectName: "Até Quando?",
    year: "2020",
  },
  {
    link: "https://www.instagram.com/p/CMdPBmNnlR6/",
    imgSrc: "/jornadas.webp",
    projectName: "Jornadas de Direito e impacto social",
    year: "2021",
  },
  {
    link: "https://www.instagram.com/p/CIMJGPjnItZ/",
    imgSrc: "/presente.webp",
    projectName: "Partilha o teu Presente",
    year: "2020",
  },
  {
    link: "https://www.instagram.com/p/B_FKUkdnQMs/",
    imgSrc: "/bagosdouro.webp",
    projectName: "Educação D'ouro",
    year: "2020",
  },
  {
    link: "https://www.instagram.com/p/B9sLvjjHUHW/",
    imgSrc: "/portaimpactu.webp",
    projectName: "Porta de Impacto",
    year: "2020",
  },
]

const Projects = () => {
  // const sortProjectsByYear = () => {
  //   projects.forEach((project) => {
  //     project.year = String(project.year)

  //     project.year.includes("-")
  //       ? (project.year = parseInt(project.year.split("-")[1]))
  //       : (project.year = parseInt(project.year))
  //   })

  //   projects.sort((a, b) => b.year - a.year)
  // }
  // sortProjectsByYear()

  return (
    <section id="projetos" className="section-projetos">
      <div className="section-projetos-content reveal">
        <h1>Projetos Impac&rsquo;tu</h1>
      </div>
      <div className="projetos reveal">
        {projects.map((project) => (
          <div className="column-projetos" key={project.imgSrc}>
            <Link href={project.link}>
              <a target="_blank">
                <img src={project.imgSrc} style={{ width: "100%" }} />
              </a>
            </Link>
            <p>
              {project.projectName}
              <br />
              {project.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
