const Doar = () => {
  return (
    <section className="formulario-wrapper">
      <div className="container-formulario" id="start">
        <div className="titulo">
          <h1>Donativo único</h1>
          <p>Nenhum dos campos abaixo é obrigatório, preencha apenas se quiser</p>
        </div>
        <div className="container-formulario-2">
          <form
          // name="candidaturas" method="POST" data-netlify="true" action="/Sucesso"
          >
            <input type="hidden" name="form-name" value="candidaturas" />
            <label htmlFor="fname">Nome Completo</label>
            <input type="text" id="fname" name="Nome" placeholder="Texto de resposta curta" />
            <label htmlFor="nascimento">Data de nascimento</label>
            <input type="date" id="nascimento" name="Nascimento" />
            <label htmlFor="sexo">Sexo</label>
            <input type="text" id="sexo" name="Sexo" placeholder="Texto de resposta curta" />
            <label htmlFor="mail">E-mail</label>
            <input type="email" id="mail" name="Email" placeholder="Texto de resposta curta" />
            <label htmlFor="tel">Contacto telefónico</label>
            <input type="tel" id="tel" name="Tel." placeholder="Texto de resposta curta" />
            <label htmlFor="morada">Morada</label>
            <input type="text" id="morada" name="Morada" placeholder="Texto de resposta livre" />
            <label htmlFor="localidade">Código Postal e Localidade</label>
            <input
              type="text"
              id="localidade"
              name="Localidade"
              placeholder="Texto de resposta livre"
            />
            <div className="doar-info">
              <p>
                Para concluir o seu donativo único só necessita de transferir o montante abaixo
                para:
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
                Se entender enviar comprovativo do donativo pode fazer para{' '}
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

export default Doar
