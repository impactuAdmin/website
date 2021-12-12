import Head from 'next/head'

const PageHead = () => {
    return(
    <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Impac&apos;tu</title>
        <link rel="icon" type="image/png" href="favicon.png"/>
        <meta property="og:title" content="Impac&apos;tu" />
        <meta property="og:url" content="https://www.impactu.org" />
        <meta property="og:description" content="Somos uma Associação de estudantes do Porto que ajuda pessoas e famílias carenciadas. Vamos criar impacto?"/>
        <meta property="og:image" content="./favicon.png"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>
    </Head>
    )
}

export default PageHead;