const RecruitmentForm = ( {dates, departments} ) => {

    const departmentOptions = departments.map((department) => 
        <option key={department.id} value={department.value}>{department.name}</option>
    );

    const dateOptions = dates.map((date) => 
        <option key={date.id} value={date.data}>{date.data}</option>
    );

    return (
        <section className="formulario-wrapper">
            <div className="container-formulario">
                <div className="titulo">
                    <h1>Candidatura Impac&rsquo;tu</h1>
                </div>
                <div className="container-formulario-2">
                    <form name="candidaturas" method="POST" data-netlify="true" action="/Sucesso">
                        <input type="hidden" name="form-name" value="candidaturas" required/>
                        <label htmlFor="fname">Nome Completo</label>
                        <input type="text" id="fname" name="Nome" placeholder="Texto de resposta curta" required/>
                        <label htmlFor="nascimento">Data de Nascimento</label>
                        <input type="date" id="nascimento" name="Data de nascimento" placeholder="Dia, mês, anos" required/>
                        <label htmlFor="tel">Número de telemóvel</label>
                        <input type="tel" id="tel" name="Tel." placeholder="Texto de resposta curta" required/>
                        <label htmlFor="mail">E-mail</label>
                        <input type="email" id="mail" name="email" placeholder="Texto de resposta curta" required/>
                        <label htmlFor="institution">Instituição de Ensino Superior</label>
                        <input type="text" id="institution" name="instituicao" placeholder="Texto de resposta curta" required/>
                        <label htmlFor="course">Curso</label>
                        <input type="text" id="course" name="curso" placeholder="Texto de resposta curta" required/>
                        <label htmlFor="currYear">Ano curricular atual</label>
                        <input type="text" id="currYear" name="ano" placeholder="Texto de resposta curta" required/>
                        <label htmlFor="city">Cidade onde vives? Tens facilidade para te deslocar para o Porto sempre que necessário?</label>
                        <input type="text" id="city" name="ondeVives" placeholder="Texto de resposta curta" required/>
                        <label htmlFor="departamento1">1ª Opção de Departamento</label>
                        <select id="departamento1" name="1 departamento">
                            {departmentOptions}
                        </select>
                        <label htmlFor="departamento2">2ª Opção de Departamento</label>
                        <select id="departamento2" name="2 departamento">
                            {departmentOptions}
                        </select>
                        <label htmlFor="dataEscolhida">No caso de passares às dinâmicas de grupo, assinala a/as tua/s disponibilidade/s</label>
                        <select id="dataEscolhida" name="Data preferencia">
                            {dateOptions}
                        </select>
                        <label htmlFor="description">Descreve-nos uma situação em que tenhas causado impacto em algo/alguém</label>
                        <input type="text" id="description" name="description" placeholder="Texto de resposta curta" required/>
                        <label htmlFor="convence">Convence-nos que és a pessoa indicada para integrar a Impac&rsquo;tu</label>
                        <input type="text" id="convence" name="Pessoa Indicada" placeholder="Texto de resposta curta" required/>
                        <label htmlFor="linkCurriculo">Currículo</label>
                        <input type="url" id="linkCurriculo" name="curriculo" placeholder="Texto de resposta curta"/>
                        <label htmlFor="linkPortfolio">No caso de te candidatares a marketing, envia o link do teu portfólio</label>
                        <input type="url" id="linkPortfolio" name="portfolio" placeholder="Texto de resposta curta"></input>
                        <input type="submit" value="Enviar"/>
                    </form>
                </div>
            </div>
    </section>
    )
}

export default RecruitmentForm;