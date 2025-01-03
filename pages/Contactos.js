import Link from "next/link"

const Contactos = () => {
  return (
    <>
      <section className="contacts-hero-wrapper">
        <div className="contacts-hero-content">
          <div className="contacts-title">
            <h1>
              Caso precises
              <br /> de nos encontrar
            </h1>
          </div>
        </div>
      </section>
      <section className="contacts-background">
        <section className="contacts-intro-content">
          <div className="contacts-intro-title">
            <h2>
              <img src="../sede.webp" alt="Sede" className="sede" />
              Praça de Carlos Alberto nº52 <br />
              4050-153 Porto <br />
            </h2>
            <div className="localiza">
              <br />
              <br />
              <p>
                <strong>Email</strong>
                <a href="mailto:geral@impactu.org" style={{ color: "#10845A" }}>
                  geral@impactu.org
                </a>
                <br />
              </p>
              <br />
              <p>
                <strong>Telemóvel</strong>
                913 459 225
              </p>
              <br />
              <p>
                <strong>Segue a Impac&rsquo;tu</strong>
              </p>
            </div>
            <div className="icons">
              <Link href="https://www.linkedin.com/company/impac%E2%80%99tu">
                <a target="_blank">
                  <svg
                    className="linkedin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g>
                      <path d="M4.44989 6.56006H0.389893V19.6801H4.44989V6.56006Z" fill="black" />
                      <path
                        d="M2.4 4.84C3.73 4.84 4.8 3.76 4.8 2.42C4.8 1.08 3.73 0 2.4 0C1.07 0 0 1.08 0 2.42C0 3.76 1.07 4.84 2.4 4.84Z"
                        fill="black"
                      />
                      <path
                        d="M10.94 12.7899C10.94 10.9499 11.79 9.84991 13.41 9.84991C14.9 9.84991 15.62 10.8999 15.62 12.7899C15.62 14.6799 15.62 19.6799 15.62 19.6799H19.66C19.66 19.6799 19.66 14.8899 19.66 11.3699C19.66 7.85991 17.67 6.15991 14.89 6.15991C12.11 6.15991 10.94 8.32991 10.94 8.32991V6.55991H7.04004V19.6799H10.94C10.94 19.6799 10.94 14.8099 10.94 12.7899Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </a>
              </Link>
              <Link href="https://www.facebook.com/associacaoimpactu/">
                <a target="_blank">
                  <svg
                    className="facebook"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 10 20"
                    fill="none"
                  >
                    <g>
                      <path
                        d="M2.74017 19.74H6.72017V9.79H9.49017L9.79017 6.46H6.71017C6.71017 6.46 6.71017 5.22 6.71017 4.56C6.71017 3.77 6.87017 3.46 7.63017 3.46C8.24017 3.46 9.78017 3.46 9.78017 3.46V0C9.78017 0 7.51017 0 7.03017 0C4.07017 0 2.74017 1.3 2.74017 3.8C2.74017 5.97 2.74017 6.46 2.74017 6.46H0.670166V9.83H2.74017V19.74Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </a>
              </Link>
              <Link href="https://www.instagram.com/impac.tu/">
                <a target="_blank">
                  <svg
                    className="instagram"
                    width="20"
                    height="20"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M10.85 1.82C13.54 1.82 13.86 1.83 14.92 1.88C15.9 1.92 16.44 2.09 16.79 2.23C17.26 2.41 17.6 2.63 17.95 2.98C18.3 3.33 18.52 3.67 18.7 4.14C18.84 4.5 19 5.03 19.05 6.01C19.1 7.07 19.11 7.39 19.11 10.08C19.11 12.77 19.1 13.09 19.05 14.15C19.01 15.13 18.84 15.67 18.7 16.02C18.52 16.49 18.3 16.83 17.95 17.18C17.6 17.53 17.26 17.75 16.79 17.93C16.43 18.07 15.9 18.23 14.92 18.28C13.86 18.33 13.54 18.34 10.85 18.34C8.16003 18.34 7.85003 18.32 6.78003 18.27C5.80003 18.23 5.26003 18.06 4.91003 17.92C4.44003 17.74 4.10003 17.52 3.75003 17.17C3.40003 16.82 3.18003 16.48 3.00003 16.01C2.86003 15.66 2.70003 15.12 2.65003 14.14C2.60003 13.08 2.59003 12.76 2.59003 10.07C2.59003 7.38 2.60003 7.06 2.65003 6C2.69003 5.02 2.86003 4.48 3.00003 4.13C3.18003 3.66 3.40003 3.32 3.75003 2.97C4.11003 2.62 4.44003 2.4 4.91003 2.22C5.27003 2.08 5.80003 1.92 6.78003 1.87C7.85003 1.83 8.16003 1.82 10.85 1.82ZM10.85 0C8.12003 0 7.77003 0.01 6.70003 0.06C5.63003 0.11 4.90003 0.28 4.25003 0.53C3.59003 0.79 3.03003 1.13 2.47003 1.69C1.91003 2.25 1.57003 2.81 1.31003 3.47C1.06003 4.12 0.890029 4.85 0.840029 5.92C0.790029 6.99 0.780029 7.34 0.780029 10.07C0.780029 12.8 0.790029 13.15 0.840029 14.22C0.890029 15.29 1.06003 16.02 1.31003 16.67C1.57003 17.33 1.91003 17.89 2.47003 18.45C3.03003 19.01 3.59003 19.35 4.25003 19.61C4.89003 19.86 5.62003 20.03 6.70003 20.08C7.77003 20.13 8.12003 20.14 10.85 20.14C13.59 20.14 13.93 20.13 15 20.08C16.07 20.03 16.8 19.86 17.45 19.61C18.11 19.35 18.67 19.01 19.23 18.45C19.79 17.89 20.13 17.33 20.39 16.67C20.64 16.03 20.81 15.3 20.86 14.22C20.91 13.15 20.92 12.8 20.92 10.07C20.92 7.34 20.91 6.99 20.86 5.92C20.81 4.85 20.64 4.12 20.39 3.47C20.13 2.81 19.79 2.25 19.23 1.69C18.67 1.13 18.11 0.79 17.45 0.53C16.81 0.28 16.08 0.11 15 0.06C13.93 0.01 13.59 0 10.85 0Z"
                        fill="black"
                      />
                      <path
                        d="M10.8499 4.8999C7.98993 4.8999 5.67993 7.2199 5.67993 10.0699C5.67993 12.9199 7.99993 15.2399 10.8499 15.2399C13.7099 15.2399 16.0199 12.9199 16.0199 10.0699C16.0199 7.2199 13.7099 4.8999 10.8499 4.8999ZM10.8499 13.4299C8.99993 13.4299 7.48993 11.9299 7.48993 10.0699C7.48993 8.2199 8.98993 6.7099 10.8499 6.7099C12.7099 6.7099 14.2099 8.2099 14.2099 10.0699C14.2099 11.9299 12.7099 13.4299 10.8499 13.4299Z"
                        fill="black"
                      />
                      <path
                        d="M17.44 4.69999C17.44 5.36999 16.9 5.90999 16.23 5.90999C15.56 5.90999 15.02 5.36999 15.02 4.69999C15.02 4.02999 15.56 3.48999 16.23 3.48999C16.9 3.48999 17.44 4.02999 17.44 4.69999Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </a>
              </Link>
              <Link href="https://www.youtube.com/channel/UCU7OPFgYWKE-eYjvdjUdCUA">
                <a target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 700 700"
                    width="33"
                    height="33"
                    fill="black"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M526.4,174.4H189.7h0c-22.9,0-44.8,9.1-60.9,25.2c-16.2,16.2-25.2,38.1-25.2,60.9v180.1v0   c0,22.9,9.1,44.8,25.2,60.9c16.2,16.2,38.1,25.2,60.9,25.2h336.8h0c22.9,0,44.8-9.1,60.9-25.2c16.2-16.2,25.2-38.1,25.2-60.9V260.5   v0c0-22.9-9.1-44.8-25.2-60.9C571.2,183.5,549.3,174.4,526.4,174.4L526.4,174.4z M457.8,354.1L305,432.4c-1.2,0.6-2.7,0.6-3.8-0.1   c-1.2-0.7-1.9-2-1.9-3.3V272.3c0-1.4,0.7-2.6,1.9-3.3c1.2-0.7,2.6-0.7,3.8-0.1l152.7,78.3c1.3,0.7,2.1,2,2.1,3.5   C459.9,352.1,459.1,353.5,457.8,354.1L457.8,354.1z"
                      />
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="responsive-map-container reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.0845826769427!2d-8.616641770750023!3d41.148968208559054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465309c670e5b%3A0x9eb91bbabfd13a89!2sImpac&#39;tu!5e0!3m2!1spt-PT!2spt!4v1632066576066!5m2!1spt-PT!2spt"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section id="fala-connosco" className="contactar-wrapper">
          <div className="container-contactos reveal">
            <div style={{ textAlign: "center" }}>
              <h1>Fala connosco</h1>
            </div>
            <div className="container">
              <form
                name="contactos"
                method="POST"
                data-netlify="true"
                action="/PedidoDeContactoSubmetido"
              >
                <input type="hidden" name="form-name" value="contactos" required />
                <label htmlFor="nameInput">
                  Nome<span className="asterisk"> *</span>
                </label>
                <input type="text" id="nameInput" name="nome" placeholder="Nome" required />
                <label htmlFor="emailInput">
                  Email<span className="asterisk"> *</span>
                </label>
                <input type="email" id="emailInput" name="email" placeholder="Email" required />
                <label htmlFor="subject">
                  Assunto/Mensagem<span className="asterisk"> *</span>
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Escreve a tua mensagem"
                  required
                  style={{ heigth: "200px" }}
                />

                <input type="submit" value="Enviar" className="hidden-button" />
                <div className="link intro contactos">
                  <div className="link-underline contactos intro">
                    <a>
                      <h4>Enviar</h4>
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
export default Contactos
