import Departments from '../../components/Departments'
import Projects from '../../components/Projects/Projects'
import styles from './ImpactoSocial.module.css'

const ImpactoSocial = () => {
  return (
    <>
      <section className={styles['impactosocial-hero-wrapper']}>
        <div className={styles['impactosocial-hero-content']}>
          <div className={styles['impactosocial-title']}>
            <h1>Impacto social</h1>
          </div>
        </div>
      </section>

      <section id="social" className="section-container reveal">
        <div className="section-title-wrapper">
          <p>O nosso impacto:</p>
          <h2>Social</h2>
        </div>

        <div className="section-content">
          <div className="section-content-col">
            <img className="section-content-img" src="/senhora.webp" alt="senhora" />
          </div>

          <div className="section-content-col">
            <h3>
              A Impac&rsquo;tu é uma associação sem fins lucrativos, constituída por jovens do Porto
              e de Lisboa, cuja missão é apoiar e capacitar pessoas e famílias em situação
              vulnerável, para a sua inserção social.
              <br />
              <br />
              Enquadrada dentro dos ODS: <br />
              <ul className={styles['ods-list']}>
                <li>
                  <img className={styles['ods-img']} src="/ods 1.webp" alt="ODS 1 Icon"></img>
                  <p>1. Erradicação da pobreza</p>
                </li>
                <li>
                  <img className={styles['ods-img']} src="/ods 4.webp" alt="ODS 1 Icon"></img>
                  <p>4. Educação de qualidade</p>
                </li>
                <li>
                  <img className={styles['ods-img']} src="/ods 10.webp" alt="ODS 1 Icon"></img>
                  <p>10. Redução de desigualdades</p>
                </li>
                <li>
                  <img className={styles['ods-img']} src="/ods 11.webp" alt="ODS 1 Icon"></img>
                  <p>11. Cidades e comunidades sustentáveis</p>
                </li>
              </ul>
              a Associação trabalha na resiliência e capacitação das famílias como na redução do
              nível de pobreza. Guiados pelos objetivo de Inclusão social acreditamos que só
              conseguiremos criar impacto garantindo a igualdade de oportunidades para todos e
              redução de desigualdades, sem esquecer que uma dessas garantias será o acesso à
              habitação digna e serviços básicos.
              <br />
              <br />
              Vamos criar impacto?
            </h3>
          </div>
        </div>
        <Projects />
        {/* <Departments /> */}
      </section>
    </>
  )
}

export default ImpactoSocial
