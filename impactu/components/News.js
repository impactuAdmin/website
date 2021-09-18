import Footer from './Footer'

const Stats = () => {
    return (
        <section className='cenas2'>
        <section className='news-wrapper'>
            <div className="news-content-wrapper reveal">
                <div className="cenas">
                    <div className="text">
                        <div className="news-title">
                            <h1>Notícias com <strong>impacto</strong>.</h1>
                            <p>Mantém-te a par de todo o nosso trabalho enquanto associação!</p>
                        </div>
                        <div className='link news'>
                            <div className='link-underline news'>
                                <a href='#'>
                                    <h4>Ver mais</h4>
                                    <svg className='arrow news' xmlns="http://www.w3.org/2000/svg" width="19" height="14"
                                        viewBox="0 0 19 14" fill="none">
                                        <path d="M17.6151 7.0705H0.515381V7.99454H17.6151V7.0705Z" fill="black"
                                            stroke-width="1" stroke-miterlimit="102" />
                                        <path
                                            d="M18.5153 7.30319L12.1274 1L11.5484 1.57138L17.9363 7.87457L18.5153 7.30319Z"
                                            fill="black" stroke-width="1" stroke-miterlimit="10" />
                                        <path
                                            d="M17.3516 7.30151L11.5464 13.0297L12.1254 13.6011L17.9306 7.8729L17.3516 7.30151Z"
                                            fill="black" stroke-width="1" stroke-miterlimit="10" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-container'>
                    <div className="card-slider">
                        <a href='#'>
                            <div className="news-card">
                                <img src='https://placeimg.com/640/640/nature' alt='news' />
                                <div className="card-info">
                                    <h2>Covid-19</h2>
                                    <p>Plano de Prevenção e Contingência</p>
                                    <p>20 de Abril de 2021</p>
                                </div>
                            </div>
                        </a>
                        <a href='#'>
                            <div className="news-card">
                                <img src='https://placeimg.com/640/640/tech' alt='news' />
                                <div className="card-info">
                                    <h2>Banco Alimentar Contra a Fome</h2>
                                    <p>Lorem ipsum dolor sit.
                                        corrupti obcaecati.</p>
                                    <p>20 de Abril de 2021</p>
                                </div>
                            </div>
                        </a>
                        <a href='#'>
                            <div className="news-card">
                                <img src='https://placeimg.com/640/640/arch' alt='news' />
                                <div className="card-info">
                                    <h2>Reunião com a União de Freguesias do...</h2>
                                    <p>Plano de Prevenção e Contingência</p>
                                    <p>20 de Abril de 2021</p>
                                </div>
                            </div>
                        </a>
                        <a href='#'>
                            <div className="news-card">
                                <img src='https://placeimg.com/640/640/people' alt='news' />
                                <div className="card-info">
                                    <h2>Reunião com a União de Freguesias do...</h2>
                                    <p>Plano de Prevenção e Contingência</p>
                                    <p>20 de Abril de 2021</p>
                                </div>
                            </div>
                        </a>
                        <a href='#'>
                            <div className="news-card">
                                <img src='https://placeimg.com/640/640/nature' alt='news' />
                                <div className="card-info">
                                    <h2>Covid-19</h2>
                                    <p>Plano de Prevenção e Contingência</p>
                                    <p>20 de Abril de 2021</p>
                                </div>
                            </div>
                        </a>
                        <a href='#'>
                            <div className="news-card">
                                <img src='https://placeimg.com/640/640/tech' alt='news' />
                                <div className="card-info">
                                    <h2>Banco Alimentar Contra a Fome</h2>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <p>20 de Abril de 2021</p>
                                </div>
                            </div>
                        </a>
                        <a href='#'>
                            <div className="news-card">
                                <img src='https://placeimg.com/640/640/arch' alt='news' />
                                <div className="card-info">
                                    <h2>Reunião com a União de Freguesias do...</h2>
                                    <p>Plano de Prevenção e Contingência</p>
                                    <p>20 de Abril de 2021</p>
                                </div>
                            </div>
                        </a>
                        <a href='#'>
                            <div className="news-card">
                                <img src='https://placeimg.com/640/640/people' alt='news' />
                                <div className="card-info">
                                    <h2>Reunião com a União de Freguesias do...</h2>
                                    <p>Plano de Prevenção e Contingência</p>
                                    <p>20 de Abril de 2021</p>
                                </div>
                            </div>
                        </a>
                        <div className="space">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </section>
    )
}

export default Stats;