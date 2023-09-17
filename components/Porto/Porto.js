import styles from './Porto.module.css'

const Porto = () => {
  return (
    <section id="onde" className={styles['about-porto']}>
      <div className={`${styles['about-porto-content']} reveal`}>
        <div className={styles['about-porto-content-top']}>
          <h1 style={{ textAlign: 'left' }}>
            A nossa <br />
            área de ação
          </h1>
          <h2>Onde?</h2>
        </div>
        <div className={styles['about-porto-content-bottom']}>
          <div className={styles['teste']}>
            <img
              src="/onde-timeline.webp"
              alt="Cronologia dos locais de ação"
              className={styles['onde-timeline']}
            />
            <img src="/onde-mapa.webp" alt="Mapa da área de ação" className={styles['onde-mapa']} />
          </div>
          <div className={styles['about-porto-content-bottom-text']}>
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
        </div>
      </div>
    </section>
  )
}

export default Porto
