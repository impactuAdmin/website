const AboutIntro = () => {
  return (
    <section className="about-intro-content reveal">
      <div className="about-intro-title">
        <h1 style={{ textAlign: 'left' }}>
          Uma família,
          <br />
          unida pelo mesmo objetivo
        </h1>
        <h2>Ajudar</h2>
      </div>
      <div className="about-intro-title-2">
        <div className="about-intro-img">
          <img src="/pipo.webp" alt="pipo" />
        </div>
        <div className="about-intro-text">
          <h3>
            A Impac&rsquo;tu é uma associação sem fins lucrativos, constituída por jovens do Porto e
            de Lisboa, cuja missão é apoiar e capacitar pessoas e famílias em situação vulnerável,
            para a sua inserção social.
            <br />
            <br />
            <strong>Os nossos objetivos são:</strong> <br />
            <ul class="ods-list">
              <li>
                <img className="ods-img" src="/ods 1.png" alt="ODS 1 Icon"></img>
                <p>1. Erradicação da pobreza</p>
              </li>
              <li>
                <img className="ods-img" src="/ods 4.png" alt="ODS 1 Icon"></img>
                <p>4. Educação de qualidade</p>
              </li>
              <li>
                <img className="ods-img" src="/ods 10.png" alt="ODS 1 Icon"></img>
                <p>10. Redução de desigualdades</p>
              </li>
              <li>
                <img className="ods-img" src="/ods 11.png" alt="ODS 1 Icon"></img>
                <p>11. Cidades e comunidades sustentáveis</p>
              </li>
              <li>
                <img className="ods-img" src="/ods 16.png" alt="ODS 1 Icon"></img>
                <p>10. Redução de desigualdades</p>
              </li>
              <li>
                <img className="ods-img" src="/ods 17.png" alt="ODS 1 Icon"></img>
                <p>11. Cidades e comunidades sustentáveis</p>
              </li>
            </ul>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
