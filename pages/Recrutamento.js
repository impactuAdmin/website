import Link from 'next/link'
import RecruitmentForm from '../components/RecruitmentForm'
// import { datas, departamentos } from '../public/data/dados'

const Recrutamento = () =>
  // { datasDeRecrutamento, departamentosDisponiveis }
  {
    return (
      <>
        <section className="recrutamento-hero-wrapper">
          <div className="recrutamento-hero-content">
            <div className="recrutamento-title">
              <h1>
                <strong>
                  Achas que tens
                  <br />o que é preciso?
                </strong>
              </h1>
            </div>
            <div className="recrutamento-subtitle">
              <h2>
                Estamos constantemente em busca de pessoas que queiram, como nós, fazer a diferença.
                <br />
                Achas que tens o que é preciso?
              </h2>
            </div>
            <div className="space_button" href="">
              <Link href="#start">
                <a className="recrutar_button">Inscreve-te aqui!</a>
              </Link>
            </div>
          </div>
        </section>
        <RecruitmentForm
        //   dates={datasDeRecrutamento} departments={departamentosDisponiveis}
        />
      </>
    )
  }

// export async function getStaticProps() {
//   const datasDeRecrutamento = datas
//   const departamentosDisponiveis = departamentos

//   return {
//     props: {
//       datasDeRecrutamento,
//       departamentosDisponiveis,
//     },
//   }
// }

export default Recrutamento
