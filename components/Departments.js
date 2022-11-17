
const departments = [
    {
        department: "Social",
        imgSrc: "/social.webp",
        membersNumber: 22,
        description: "Estar no terreno e no contacto direto com as famílias que apoiamos são as palavras-chave\n\
                        deste departamento.\nOs membros do Social são responsáveis pelo acompanhamento dos \
                        casos da Associação."
    },
    {
        department: "Legal",
        imgSrc: "/juridico.webp",
        membersNumber: 8,
        description: "Constituído por estudantes de Direito, procura dar apoio às famílias apoiadas pela \
                    Impac´tu numa vertente diferente, mas sem nunca perder a proximidade junto daqueles \
                    que procuramos criar impacto!"
    },
    {
        department: "Marketing",
        imgSrc: "/marketing.webp",
        membersNumber: 7,
        description: "É aqui que nasce tudo o que vês da Impac’tu. Não só têm a função de comunicar e divulgar\
                        através das nossas redes como dão forma a todos os projetos e campanhas que chegam até\
                        ti!"
    },
    {
        department: "Relações Externas",
        imgSrc: "/externas.webp",
        membersNumber: 7,
        description: "Comunicar e trabalhar com outras associações e parceiros para alcançar os nossos\
                        objetivos,\
                        competindo a este departamento colmatar necessidades identificadas através das atuais\
                        e novas parcerias da Associação."
    },
    {
        department: "Recursos Humanos",
        imgSrc: "/recursoshumanos.webp",
        membersNumber: 7,
        description: "Alicerçado em três áreas principais de atuação: a gestão interna da associação,\
                        a receção de novos casos que chegam até nós e ainda pelos\
                        recrutamentos semestrais para novos membros."
    },
    {
        department: "Impac'tu 2022",
        imgSrc: "/logo-simples.webp",
        membersNumber: 57,
        description: "Somos no total 57 membros divididos entre Porto e Lisboa\
                        com a ambição em tornar estas duas cidades repletas de famílias\
                        capazes e independentes. Uma equipa composta por responsabilidade\
                        e inovação na intervenção social para criar um ano inesquecível para\
                        as pessoas apoiadas pela Impac'tu."
    },
];

const Departments = () => {

    const departmentsList = departments.map((department) =>
        <div className="column-card-departamento reveal" key={department.department}>
            <div className="card-departamento">
                <img src={department.imgSrc} alt={department.department} />
                <h3><strong>{department.department}</strong></h3>
                <h4>{department.membersNumber} membros</h4>
                <br />
                <hr />
                <br />
                <p>
                    {department.description}
                </p>
            </div>
        </div>
    );

    return (
        <section className="departamentos">
            <div className="departamentos-content reveal">
                <h1>Departamentos</h1>
            </div>
            <div className="row-card-departamento reveal">
                {departmentsList}
            </div>
        </section>
    )
}

export default Departments;