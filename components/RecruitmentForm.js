import MultipleSelector from './MultipleSelector'

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
            <label htmlFor="nascimento">Idade</label>
            <input type="number" id="nascimento" name="Idade" placeholder="Número" required />
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
            <label htmlFor="work">Curso e Faculdade / Ocupação profissional </label>
            <input
              type="text"
              id="work"
              name="trabalho"
              placeholder="Texto de resposta curta"
              required
            />
            <label htmlFor="role">Num trabalho de grupo que papel costumas assumir?</label>
            <input
              type="text"
              id="role"
              name="papel"
              placeholder="Texto de resposta livre"
              required
            />
            <label htmlFor="description">O que é para ti criar impacto?</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Texto de resposta livre"
              required
            />
            <label htmlFor="dataEscolhida">
              Assinala a/as tua/s disponibilidade/s para as dinâmicas de grupo
              <br />
            </label>
            <MultipleSelector dates={dates} />
            <label htmlFor="description">Anexar Fotografia</label>
            <input type="file" id="photo" name="photo" required />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default RecruitmentForm
