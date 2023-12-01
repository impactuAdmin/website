const organs = [
  {
    name: 'Direção',
    elements: [
      {
        name: ['Filipe Ribeiro'],
        role: 'Presidente',
        imgSrc: 'membros-02.webp',
      },
    ],
  },
  {
    elements: [
      {
        name: ['Margarida Santos'],
        role: 'Gestora Financeira e Tesouraria',
        imgSrc: 'membros-02.webp',
      },
      {
        name: ['Inês Póvoa'],
        role: 'Gestora Marketing e Comunicação',
        imgSrc: 'membros-02.webp',
      },
      {
        name: ['Inês Costa'],
        role: 'Gestora Recursos Humanos',
        imgSrc: 'membros-02.webp',
      },
      {
        name: ['Francisco Durães'],
        role: 'Gestor Estratégia e Desenvolvimento',
        imgSrc: 'membros-02.webp',
      },
      {
        name: ['Sofia Lessa'],
        role: 'Presidente Conselho Consultivo',
        imgSrc: 'membros-02.webp',
      },
      {
        name: ['Francisca Ribeiro'],
        role: 'Gestora de empresas e parcerias',
        imgSrc: 'membros-02.webp',
      },
    ],
  },
  {
    elements: [
      {
        name: ['Beatriz Machado'],
        role: 'Gestora Operações Sul',
        imgSrc: 'membros-02.webp',
      },
      {
        name: ['Guilherme Lessa'],
        role: 'Gestor Projetos Sul',
        imgSrc: 'membros-02.webp',
      },
    ],
  },
  {
    elements: [
      {
        name: ['Francisca Fernandes'],
        role: 'Gestora Operações Norte',
        imgSrc: 'membros-02.webp',
      },
      {
        name: ['Luís Pinheiro'],
        role: 'Gestor Projetos Norte',
        imgSrc: 'membros-02.webp',
      },
    ],
  },
  {
    elements: [
      {
        name: ['Margarida Ferreira'],
        role: 'Gestor de Impacto Social',
        imgSrc: 'membros-02.webp',
      },
    ],
  },
  {
    elements: [
      {
        name: ['Francisca Fernandes'],
        role: 'Gestora Operações Norte',
        imgSrc: 'membros-02.webp',
      },
      {
        name: ['Luís Pinheiro'],
        role: 'Gestor Projetos Norte',
        imgSrc: 'membros-02.webp',
      },
    ],
  },
]

function OrgaoSocial(orgao) {
  function elementsList(element) {
    const names = element.name.map((personName) => (
      <>
        {personName}
        <br />
      </>
    ))

    return (
      <div className="column">
        <img src={'/' + element.imgSrc} />
        <h2>
          {names}
          <strong>{element.role}</strong>
        </h2>
      </div>
    )
  }

  return (
    <section className="orgaosociais">
      <div className="orgaosociais-wrapper">
        <div className="pilares">{orgao.elements.map((element) => elementsList(element))}</div>
      </div>
    </section>
  )
}

export default function OrgaosSociais() {
  return (
    <>
      <section className="orgaosociais-box docs">
        <div className="orgaosociais-title docs">
          <h3>Orgãos Sociais</h3>
        </div>
      </section>
      {organs.map((organ) => OrgaoSocial(organ))}
    </>
  )
}
