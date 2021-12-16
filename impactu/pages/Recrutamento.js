import Link from 'next/link';
import RecruitmentForm from '../components/RecruitmentForm';

import { datas, departamentos} from '../public/data/dados';

const Recrutamento = () => {

    return (
        <>
            <section className="recrutamento-hero-wrapper">
                <div className="recrutamento-hero-content">
                    <div className="recrutamento-title">
                        <h1><strong>Achas que tens<br />
                            o que é preciso?</strong>
                        </h1>
                    </div>
                    <div className="recrutamento-subtitle">
                        <h2>Estamos constantemente em busca de
                            pessoas que queiram, como nós, fazer a
                            diferença.<br />
                            Achas que tens o que é preciso?</h2>
                    </div>
                    <div className="space_button" href=''>
                        <Link href="https://docs.google.com/forms/d/1zcyufYI4HtjwWEua-cY0QvN-FSmmzkecGd4pMBsxQY8/edit?usp=sharing">
                            <a className="recrutar_button" > 
                                Inscreve-te aqui!
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
            <RecruitmentForm dates={datas} departments={departamentos}/>
        </>
    )
}

export async function getStaticProps() {
    if(datas.length === 0) {
        return {
            redirect: {
              destination: '/',
              permanent: false,
            },
          }
    }

    return {
        props: {
            datas,
            departamentos
        },
    }
}

export default Recrutamento;