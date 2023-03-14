import Link from 'next/link'

const RecruitmentNews = () => {
  return (
    <section className="recrutamento-home-wrapper">
      <div className="manel-wrapper">
        <div className="manel-content-wrapper">
          <div className="manel-text-wrapper">
            <div className="content-recrutamento">
              <h1>Só faltas tu!</h1>
              <h3>
                Estamos constantemente em <br />
                busca de pessoas que queiram, <br />
                como nós, fazer a diferença. <br />
                Achas que tens o que é preciso?
              </h3>
            </div>
            <div className="link recrutamento">
              <div className="link-underline recrutamento">
                <Link href="/Recrutamento">
                  <a>
                    <h4>Verificar Recrutamento</h4>
                    <svg
                      className="arrow recrutamento"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 19 14"
                      fill="none"
                    >
                      <path
                        d="M17.6151 7.0705H0.515381V7.99454H17.6151V7.0705Z"
                        fill="black"
                        strokeWidth="1"
                        strokeMiterlimit="102"
                      />
                      <path
                        d="M18.5153 7.30319L12.1274 1L11.5484 1.57138L17.9363 7.87457L18.5153 7.30319Z"
                        fill="black"
                        strokeWidth="1"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M17.3516 7.30151L11.5464 13.0297L12.1254 13.6011L17.9306 7.8729L17.3516 7.30151Z"
                        fill="black"
                        strokeWidth="1"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecruitmentNews
