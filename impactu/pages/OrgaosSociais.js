const organs = [
    {
        name: "Direção",
        elements: [
            {
                name: ["Filipe Ribeiro"],
                role: "Presidente",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Matilde Borges"],
                role: "Vice-Presidente",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Margarida Santos"],
                role: "Tesoureira",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Sofia Santos"],
                role: "Vogal",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Sara Pereira"],
                role: "Vogal",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Manuel Menezes"],
                role: "Vogal",
                imgSrc: "membros-02.webp"
            },
        ]
    },
    {
        name: "MAG",
        elements: [
            {
                name: ["Filipe Ribeiro"],
                role: "Presidente",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Tomás Taipa"],
                role: "Secretário",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Camila Queiroz"],
                role: "Secretária",
                imgSrc: "membros-02.webp"
            },
        ]
    },
    {
        name: "Conselho Fiscal",
        elements: [
            {
                name: ["Rita Lima"],
                role: "Presidente",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Catarina Best"],
                role: "Relatora",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Luís Paiva"],
                role: "Relator",
                imgSrc: "membros-02.webp"
            },
        ]
    },
    {
        name: "Coordenadores",
        elements: [
            {
                name: ["Ana Abrantes", "e Margarida Pereira"],
                role: "Social",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Francisca Vieira de Castro"],
                role: "Recursos Humanos",
                imgSrc: "membros-03.webp"
            },
            {
                name: ["Manuel Menezes", "e Bruna Martins"],
                role: "Relações Externas",
                imgSrc: "membros-04.webp"
            },
            {
                name: ["Carolina Centeio"],
                role: "Marketing",
                imgSrc: "membros-05.webp"
            },
        ]
    },
];

const OrgaoSocial = (orgao) => {

    const elementsList = (element) => {

        const names = element.name.map((personName) => 
            <>{personName}<br/></>
        );

        return (
            <div className="column">
                <img src={"/" + element.imgSrc}/>
                <h2>{names}
                    <strong>{element.role}</strong>
                </h2>
            </div>
        )
    }

    return (
        <section className="orgaosociais">
            <div className="orgaosociais-wrapper">
                <div className="orgaosociais-content">
                    <h1>{orgao.name}</h1>
                </div>
                <div className="pilares">
                    {
                        orgao.elements.map((element) => elementsList(element))
                    }
                </div>
            </div>
        </section>
    )
}

export default function OrgaosSociais() {
    return (
      < >
            <section className="orgaosociais-box">
                <div className='orgaosociais-title'>
                    <h3>Orgãos Sociais</h3>
                </div>
            </section>
            {organs.map((organ)=> OrgaoSocial(organ))}
      </>
    )
  }