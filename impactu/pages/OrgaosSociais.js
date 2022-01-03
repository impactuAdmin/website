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
                role: "Responsável Lisboa",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Sara Pereira"],
                role: "Gestora de Impacto Social",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Francisca Vieira de Castro"],
                role: "Gestora de Operações",
                imgSrc: "membros-02.webp"
            },
        ]
    },
    {
        name: "MAG",
        elements: [
            {
                name: ["Luís Archer"],
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
                name: ["Ana Arantes", "e Margarida Ferreira"],
                role: "Social",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Mariana Marques", "e Raquel Alves"],
                role: "Legal",
                imgSrc: "membros-03.webp"
            },
            {
                name: ["Beatriz Machado"],
                role: "Recursos Humanos",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Bruna Martins", "e Martim Moraes Sarmento"],
                role: "Relações Externas",
                imgSrc: "membros-04.webp"
            },
            {
                name: ["Carolina Centeio"],
                role: "Marketing",
                imgSrc: "membros-05.webp"
            },
            {
                name: ["Francisco Durães"],
                role: "Coordenador de Estratégia e Desenvolvimento",
                imgSrc: "membros-02.webp"
            },
            {
                name: ["Beatriz Polidoro"],
                role: "Coordenadora Operacional",
                imgSrc: "membros-02.webp"
            },
        ]
    },
];

const OrgaoSocial = (orgao) => {

    const elementsList = (element) => {

        const names = element.name.map((personName) =>
            <>{personName}<br /></>
        );

        return (
            <div className="column">
                <img src={"/" + element.imgSrc} />
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
            <section className="orgaosociais-box docs">
                <div className='orgaosociais-title docs'>
                    <h3>Orgãos Sociais</h3>
                </div>
            </section>
            {organs.map((organ) => OrgaoSocial(organ))}
        </>
    )
}