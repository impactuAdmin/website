const organs = [
    {
        name: "Direção",
        elements: [
            {
                name: ["Filipe Ribeiro"],
                role: "Presidente",
                imgSrc: "membros-02.png"
            },
            {
                name: ["Matilde Borges"],
                role: "Vice-Presidente",
                imgSrc: "membros-02.png"
            },
            {
                name: ["Margarida Santos"],
                role: "Tesoureira",
                imgSrc: "membros-02.png"
            },
            {
                name: ["Sofia Santos"],
                role: "Vogal",
                imgSrc: "membros-02.png"
            },
            {
                name: ["Sara Pereira"],
                role: "Vogal",
                imgSrc: "membros-02.png"
            },
            {
                name: ["Manuel Menezes"],
                role: "Vogal",
                imgSrc: "membros-02.png"
            },
        ]
    },
    {
        name: "MAG",
        elements: [
            {
                name: ["Filipe Ribeiro"],
                role: "Presidente",
                imgSrc: "membros-02.png"
            },
            {
                name: ["Tomás Taipa"],
                role: "Secretário",
                imgSrc: "membros-02.png"
            },
            {
                name: ["Camila Queiroz"],
                role: "Secretária",
                imgSrc: "membros-02.png"
            },
        ]
    },
    {
        name: "Conselho Fiscal",
        elements: [
            {
                name: ["Rita Lima"],
                role: "Presidente",
                imgSrc: "membros-02.png"
            },
            {
                name: ["Catarina Best"],
                role: "Relatora",
                imgSrc: "membros-02.png"
            },
            {
                name: ["Luís Paiva"],
                role: "Relator",
                imgSrc: "membros-02.png"
            },
        ]
    },
    {
        name: "Coordenadores",
        elements: [
            {
                name: ["Ana Abrantes", "e Margarida Pereira"],
                role: "Social",
                imgSrc: "membros-02.png"
            },
            {
                name: ["Francisca Vieira de Castro"],
                role: "Recursos Humanos",
                imgSrc: "membros-03.png"
            },
            {
                name: ["Manuel Menezes", "e Bruna Martins"],
                role: "Relações Externas",
                imgSrc: "membros-04.png"
            },
            {
                name: ["Carolina Centeio"],
                role: "Marketing",
                imgSrc: "membros-05.png"
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