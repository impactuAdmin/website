import Departments from '../components/Departments'
import Projects from '../components/Projects'

const ImpactoSocial = () => {
  return (
    <>
      <section className="impactosocial-hero-wrapper">
        <div className="impactosocial-hero-content">
          <div className="impactosocial-title">
            <h1>Impacto social</h1>
          </div>
        </div>
      </section>
      <section className="impactosocial-background">
        <section className="impactosocial-intro-content reveal">
          <div className="impactosocial-intro-title">
            <h1>O nosso impacto:</h1>
            <h2>Social</h2>
          </div>
          <div className="impactosocial-intro-title-2">
            <div className="impactosocial-intro-img">
              <img src="/senhora.webp" alt="senhora" />
            </div>

            <div className="impactosocial-intro-text">
              <h3>
                A Impac&rsquo;tu é uma associação sem fins lucrativos, constituída por jovens do
                Porto e de Lisboa, cuja missão é apoiar e capacitar pessoas e famílias em situação
                vulnerável, para a sua inserção social.
                <br />
                <br />
                Enquadrada dentro dos ODS: <br />
                <ul className="ods-list">
                  <li>
                    <img className="ods-img" src="/ods 1.webp" alt="ODS 1 Icon"></img>
                    <p>1. Erradicação da pobreza</p>
                  </li>
                  <li>
                    <img className="ods-img" src="/ods 4.webp" alt="ODS 1 Icon"></img>
                    <p>4. Educação de qualidade</p>
                  </li>
                  <li>
                    <img className="ods-img" src="/ods 10.webp" alt="ODS 1 Icon"></img>
                    <p>10. Redução de desigualdades</p>
                  </li>
                  <li>
                    <img className="ods-img" src="/ods 11.webp" alt="ODS 1 Icon"></img>
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
        </section>
        <Projects />
        {/* <Departments /> */}
      </section>
    </>
  )
}

export default ImpactoSocial
