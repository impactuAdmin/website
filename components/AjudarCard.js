import Link from 'next/link'

const AjudarCard = ({ modalidade, value, features }) => {
  return (
    <div className="ajudar-card">
      <img src={`/${modalidade}.webp`} className="ajudar-card-img"></img>
      <div className="ajudar-card-value-wrapper">
        <p>{modalidade}</p>
        <p className="ajudar-card-value">{value}</p>
        <p>/ano</p>
      </div>
      <hr />
      <ul>{features}</ul>
      <div className="link intro contactos">
        <div className="link-underline contactos intro">
          <Link href={{ pathname: '/Socio', query: { value: value } }}>
            <a>
              <h4>Inscrever</h4>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="14"
                viewBox="0 0 19 14"
              >
                <path
                  d="M17.6151 7.0705H0.515381V7.99454H17.6151V7.0705Z"
                  strokeWidth="1"
                  strokeMiterlimit="102"
                />
                <path
                  d="M18.5153 7.30319L12.1274 1L11.5484 1.57138L17.9363 7.87457L18.5153 7.30319Z"
                  strokeWidth="1"
                  strokeMiterlimit="10"
                />
                <path
                  d="M17.3516 7.30151L11.5464 13.0297L12.1254 13.6011L17.9306 7.8729L17.3516 7.30151Z"
                  strokeWidth="1"
                  strokeMiterlimit="10"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AjudarCard
