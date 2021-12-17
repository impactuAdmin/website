import { pdfs } from '../../public/data/dados'

const Document = ( { pdf } ) => {
    return (
        <>
            <section className="orgaosociais-box">
                <div className='orgaosociais-title'>
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

// export async function getStaticPaths() {
//     const paths = pdfs.map((pdf) => ({
//             params: { name: pdf.linkParam },
//         }))

//     return {paths, fallback: false};
// }

export default Document;

Document.layout = "L1";

export async function getServerSideProps({ params }) {
    for(let i = 0; i < pdfs.length; i++) {
        if(pdfs[i].linkParam === params.name) {
            return { props: { pdf: pdfs[i] } };
        }
    }
}

// export async function getServerSideProps() {
//     const premierDate = new Date("Dec 17, 2021 21:45:00").getTime();
//     const difference = premierDate - +new Date();

//     if(difference < 0) {
//         return {
//             redirect: {
//               destination: '/',
//               permanent: false,
//             },
//           }
//     }
//     else {
//         return {
//             props: {}
//         }
//     }
// }