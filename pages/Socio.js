import { useRouter } from 'next/router'

const Socio = () => {
  const router = useRouter()
  const { value } = router.query

  return (
    <section className="formulario-wrapper">
      <div className="container-formulario" id="start">
        <div className="titulo">
          <h1>Inscrição cartão de sócio</h1>
        </div>
        <div className="container-formulario-2">
          <form name="cartao-socio" method="POST" data-netlify="true" action="/Sucesso">
            <input type="hidden" name="form-name" value="cartao-socio" required />
            <input type="hidden" name="Valor" value={value} required />
            <label htmlFor="fname">Nome Completo</label>
            <input
              type="text"
              id="fname"
              name="Nome"
              placeholder="Texto de resposta curta"
              required
            />
            <label htmlFor="nascimento">Data de nascimento</label>
            <input type="date" id="nascimento" name="Nascimento" required />
            <label htmlFor="sexo">Sexo</label>
            <input
              type="text"
              id="sexo"
              name="Sexo"
              placeholder="Texto de resposta curta"
              required
            />
            <label htmlFor="mail">E-mail</label>
            <input
              type="email"
              id="mail"
              name="Email"
              placeholder="Texto de resposta curta"
              required
            />
            <label htmlFor="tel">Contacto telefónico</label>
            <input type="tel" id="tel" name="Tel." placeholder="Texto de resposta curta" required />
            <label htmlFor="morada">Morada</label>
            <input
              type="text"
              id="morada"
              name="Morada"
              placeholder="Texto de resposta livre"
              required
            />
            <label htmlFor="localidade">Código Postal e Localidade</label>
            <input
              type="text"
              id="localidade"
              name="Localidade"
              placeholder="Texto de resposta livre"
              required
            />
            <div className="doar-info">
              <p>
                Para concluir a sua inscrição como novo Sócio da Impac&rsquo;tu só necessita de
                realizar a transferência com o valor de {value} (quota anual) para:
              </p>
              <br />
              <p>
                *IBAN: <strong>PT50 0033 0000 4553 2412 3620 5</strong>
              </p>
              <p>
                *MBWAY: <strong>+351 913 363 673</strong>
              </p>
              <br />
              <p>
                Para concluirmos mais rapidamente a sua inscrição envie comprovativo para{' '}
                <strong>socios@impactu.org</strong>
              </p>
            </div>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Socio
