import Link from 'next/link'
import AjudarCard from '../components/AjudarCard'

const QueroAjudar = () => {
  return (
    <>
      <section className="ajudar-hero-wrapper">
        <div className="ajudar-hero-content">
          <div className="doar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="70"
              viewBox="0 0 51 45"
              fill="#10845a"
            >
              <path
                d="M24.5132 41.5892C24.7899 41.8631 25.1496 42 25.5094 42C25.8691 42 26.2565 41.8631 26.5056 41.5892L44.4925 23.5407C51.9917 16.0091 46.6786 3 35.9971 3C29.5772 3 26.6439 7.6559 25.5094 8.5323C24.3748 7.6559 21.4415 3 15.0216 3C4.36777 3 -1.02832 15.9544 6.5262 23.5407L24.5132 41.5892Z"
                stroke="#10845a"
                strokeWidth="4.5"
                strokeMiterlimit="10"
              />
            </svg>
            <br />
            <h2>
              Ser <span>sócio</span> ou <span>doar</span> é ajudar a criar impacto!
              <br />
            </h2>
            <br />
            <p>
              Se estás aqui é porque pretendes fazer a diferença. Agora só falta concretizar esse
              apoio!
            </p>
            <p>
              Pssss, sabias que, pelo módico preço de um café por mês, podes ajudar a nossa causa?
            </p>
            <br />
            <br />
            <div className="ajudar-btn-wrapper">
              <a className="ajudar_button socio_button" href="#ajudarCards">
                Torna-te sócio
              </a>
              <Link href="/Doar">
                <a className="ajudar_button">Faz uma doação</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="ajudarCards" className="ajudar-cards-wrapper">
        <h1>Modalidade de cartão de sócio</h1>
        <div className="ajudar-cards-content reveal">
          <AjudarCard
            modalidade="companheiro"
            value="12€"
            features={
              <>
                <li>Contributo na causa de criar impacto</li>
                <br />
                <li>Descontos nos parceiros da Impac&apos;tu</li>
                <br />
                <li>Newsletter periódica</li>
              </>
            }
          />
          <AjudarCard
            modalidade="amigo"
            value="25€"
            features={
              <>
                <li>Contributo na causa de criar impacto</li>
                <br />
                <li>Descontos nos parceiros da Impac&apos;tu</li>
                <br />
                <li>Newsletter periódica</li>
                <br />
                <li>Divulgação personalizada</li>
                <br />
                <li>Acesso prioritário a eventos</li>
                <br />
                <li>Acesso a uma formação</li>
                <br />
                <li>Participação em campanhas de rua</li>
              </>
            }
          />
          <AjudarCard
            modalidade="familiar"
            value="50€"
            features={
              <>
                <li>Contributo na causa de criar impacto</li>
                <br />
                <li>Descontos nos parceiros da Impac&apos;tu</li>
                <br />
                <li>Newsletter periódica</li>
                <br />
                <li>Divulgação personalizada</li>
                <br />
                <li>Acesso prioritário a eventos</li>
                <br />
                <li>Acesso gratuito a eventos</li>
                <br />
                <li>Acesso a duas formações</li>
                <br />
                <li>Apadrinhamento de um caso</li>
                <br />
                <li>Participação em campanhas de rua</li>
              </>
            }
          />
        </div>
      </section>
    </>
  )
}

export default QueroAjudar
