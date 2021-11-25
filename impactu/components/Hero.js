const Hero = () => {
    return (
        <section className="hero-wrapper">
            <video width='100%' height='100%' autoPlay loop muted>
                <source src='../video_hero.mp4' type="video/mp4" />
            </video>
        <div className='title-hero'>
            <div className='animate-title'>
                <h1>O impacto social começa em ti.</h1>
                <h3>Somos uma Associação de estudantes do Porto&nbsp;<br />
                    que ajuda pessoas e famílias carenciadas.<br />
                    Vamos criar impacto?
                </h3>
            </div>
        </div>
    </section>
    )
}

export default Hero;