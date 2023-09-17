import styles from './Pilars.module.css'

const Pilars = () => {
  return (
    <section id="pilares" className={styles['about-pillars']}>
      <div className={styles['about-pillars-wrapper reveal']}>
        <div className={styles['about-pillars-content']}>
          <h1>Regemo-nos por estes pilares</h1>
        </div>
      </div>
      <div className={`${styles['pilares']} reveal`}>
        <div className={styles['column']}>
          <img src="/solidariedade.webp" alt="solidariedade" />
          <figcaption>CONSCIÊNCIA SOCIAL</figcaption>
        </div>
        <div className={styles['column']}>
          <img src="/honestidade.webp" alt="honestidade" />
          <figcaption>LIDERANÇA SOCIAL</figcaption>
        </div>
        <div className={styles['column']}>
          <img src="/empatia.webp" alt="empatia" />
          <figcaption>EMPATIA</figcaption>
        </div>
        <div className={styles['column']}>
          <img src="/compromisso.webp" alt="solidariedade" />
          <figcaption>SERVIÇO</figcaption>
        </div>
        <div className={styles['column']}>
          <img src="/icons responsabilidade social-15.png" alt="solidariedade" />
          <figcaption>RESPONSABILIDADE SOCIAL</figcaption>
        </div>
      </div>
    </section>
  )
}

export default Pilars
