const RecruitmentForm = () => {
    return (
        <section className="formulario-wrapper">
            <div className="container-formulario">
                <div style={{textAlign: "center"}}>
                    <h1>Candidatura Impac&quot;tu</h1>
                </div>
            </div>
            <div className="container-formulario">
                <form name="candidaturas" method="POST" data-netlify="true" action="/Success">
                    <input type="hidden" name="form-name" value="candidaturas" />
                    <label htmlFor="fname">Nome Completo</label>
                    <input type="text" id="fname" name="Nome" placeholder="Texto de resposta curta"/>
                    <label htmlFor="lname">Data de Nascimento</label>
                    <input type="text" id="lname" name="Data de nascimento" placeholder="Dia, mês, anos"/>
                    <label htmlFor="lname">Telemóvel</label>
                    <input type="text" id="lname" name="Tel." placeholder="Texto de resposta curta"/>
                    <label htmlFor="lname">E-mail</label>
                    <input type="text" id="lname" name="email" placeholder="Texto de resposta curta"/>
                    <label htmlFor="lname">Instituição de Ensino Superior</label>
                    <input type="text" id="lname" name="instituicao" placeholder="Texto de resposta curta"/>
                    <label htmlFor="lname">Curso</label>
                    <input type="text" id="lname" name="curso" placeholder="Texto de resposta curta"/>
                    <label htmlFor="lname">Ano curricular atual</label>
                    <input type="text" id="lname" name="ano" placeholder="Texto de resposta curta"/>
                    <label htmlFor="departamento">1ª Opção de Departamento</label>
                    <select id="departamento" name="1 departamento">
                        <option value="Social">Departamento Social (intervenção social)</option>
                        <option value="Jurídico">Departamento Jurídico (apoio jurídico)</option>
                        <option value="Marketing">Departamento Comunicação e Marketing</option>
                        <option value="Relaçõesexternas">Departamento Relações Externas</option>
                        <option value="Recursoshumanos">Departamento de Recursos Humanos</option>
                    </select>
                    <label htmlFor="departamento">2ª Opção de Departamento</label>
                    <select id="departamento" name="2 departamento">
                        <option value="Social">Departamento Social (intervenção social)</option>
                        <option value="Jurídico">Departamento Jurídico (apoio jurídico)</option>
                        <option value="Marketing">Departamento Comunicação e Marketing</option>
                        <option value="Relaçõesexternas">Departamento Relações Externas</option>
                        <option value="Recursoshumanos">Departamento de Recursos Humanos</option>
                    </select>
                    <label htmlFor="lname">O que é para ti criar impacto? De que forma achas que já o criaste?</label>
                    <input type="text" id="lname" name="impacto" placeholder="Texto de resposta curta"/>
                    <label htmlFor="lname">Que importância tem para ti integrar a Impac&quot;tu?</label>
                    <input type="text" id="lname" name="importancia" placeholder="Texto de resposta curta"/>
                    <label htmlFor="lname">Descreve-te num pequeno texto</label>
                    <input type="text" id="lname" name="descricao" placeholder="Texto de resposta curta"/>
                    <label htmlFor="lname">CV / Carta de Motivação / Portfólio</label>
                    <input type="text" id="lname" name="motivacao" placeholder="Texto de resposta curta"/>
                    <label htmlFor="lname">Link do Portfólio se tiveres em versão online</label>
                    <input type="text" id="lname" name="portfolio" placeholder="Texto de resposta curta"/>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
    </section>
    )
}

export default RecruitmentForm;