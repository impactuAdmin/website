import { pdfs } from '../../public/data/dados'

const Document = ({ pdf }) => {
    return (
        <>
            <section className="orgaosociais-box docs">
                <div className='orgaosociais-title docs'>
                    <h3>{pdf.title}</h3>
                </div>
            </section>

            <section className="relatoriocontas">
                <div className="relatoriocontas-wrapper">

                    <iframe src={`../documents/${pdf.file}`} width="100%" height="800px">
                    </iframe>
                </div>
            </section>
        </>
    )
}

export async function getStaticPaths() {
    const paths = pdfs.map((pdf) => ({
        params: { name: pdf.linkParam },
    }))

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    for (let i = 0; i < pdfs.length; i++) {
        if (pdfs[i].linkParam === params.name) {
            return { props: { pdf: pdfs[i] } };
        }
    }
}

export default Document;