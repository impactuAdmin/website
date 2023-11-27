import styles from './Porto.module.css'

const Porto = () => {
  return (
    <section id="onde" className="section-container reveal">
      <div className="section-title-wrapper">
        <p>
          A nossa <br />
          área de ação
        </p>
        <h2>Onde?</h2>
      </div>

      <div className="section-content">
        <div className="section-content-col">
          <h3>
            A Impac&rsquo;tu nasceu na cidade Invicta e durante 3 anos marcou a diferença na
            comunidade Portuense.
            <br />
            Impactante, Dinâmica e solidária, esta organização começou a crescer e surgiu a
            necessidade de expandir, em 2021, a sua área de atuação para Lisboa e em 2022 para a
            Região do Douro.
            <br />
            Movidos pela vontade de ajudar, todos os membros partilham entre si a vontade de
            realizar ações que ajudem a nossa sociedade.
            <br />
            <br />
            <strong>Porto</strong>, <strong>Lisboa</strong> e o <strong>Douro</strong> têm
            Impac&rsquo;tu.
          </h3>
        </div>

        <div className="section-content-col">
          <img
            src="/onde-timeline.webp"
            alt="Cronologia dos locais de ação"
            className={styles['onde-timeline']}
          />
          <img src="/onde-mapa.webp" alt="Mapa da área de ação" className={styles['onde-mapa']} />
        </div>
      </div>
    </section>
  )
}

export default Porto
