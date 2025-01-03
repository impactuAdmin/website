import MultipleSelector from "./MultipleSelector"

const RecruitmentForm = ({ dates, departments }) => {
  const departmentOptions = departments.map((department) => (
    <option key={department.id} value={department.value}>
      {department.name}
    </option>
  ))

  return (
    <section className="formulario-wrapper">
      <div className="container-formulario" id="start">
        <div className="titulo">
          <h1>Candidatura Impac&rsquo;tu</h1>
        </div>
        <div className="container-formulario-2">
          <form name="candidaturas" method="POST" data-netlify="true" action="/Sucesso">
            <input type="hidden" name="form-name" value="candidaturas" required />
            <label htmlFor="fname">Nome Completo</label>
            <input
              type="text"
              id="fname"
              name="Nome"
              placeholder="Texto de resposta curta"
              required
            />
            <label htmlFor="nascimento">Data de Nascimento</label>
            <input
              type="date"
              id="nascimento"
              name="Idade"
              placeholder="Texto de resposta curta"
              required
            />
            <label htmlFor="tel">Contacto telefónico</label>
            <input type="tel" id="tel" name="Tel." placeholder="Texto de resposta curta" required />
            <label htmlFor="mail">E-mail</label>
            <input
              type="email"
              id="mail"
              name="email"
              placeholder="Texto de resposta curta"
              required
            />
            <label htmlFor="work">Curso / Ocupação Profissional</label>
            <input
              type="text"
              id="work"
              name="trabalho"
              placeholder="Texto de resposta curta"
              required
            />
            <label htmlFor="residence">Concelho de Residência</label>
            <input
              type="text"
              id="residence"
              name="residencia"
              placeholder="Texto de resposta curta"
              required
            />
            <label htmlFor="how">Como conheceste a Impac&apos;tu?</label>
            <input
              type="text"
              id="how"
              name="como"
              placeholder="Texto de resposta livre"
              required
            />

            <label htmlFor="departamento">Esta candidatura dirige-se à equipa de:</label>
            <select id="departamento" name="departamento">
              {departmentOptions}
            </select>

            <label htmlFor="dataEscolhida">
              Assinala a/as tua/s disponibilidade/s para as dinâmicas de grupo
              <br />
            </label>
            <MultipleSelector dates={dates} />

            <label htmlFor="observations">Observações</label>
            <input
              type="text"
              id="observations"
              name="observações"
              placeholder="Texto de resposta livre"
              required
            />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default RecruitmentForm
