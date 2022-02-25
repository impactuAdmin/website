const QueroAjudar = () => {
    return (
        <>
            <section className="ajudar-hero-wrapper">
                <div className="ajudar-hero-content">
                    <div className='doar'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="70" viewBox="0 0 51 45" fill="#10845a">
                            <path
                                d="M24.5132 41.5892C24.7899 41.8631 25.1496 42 25.5094 42C25.8691 42 26.2565 41.8631 26.5056 41.5892L44.4925 23.5407C51.9917 16.0091 46.6786 3 35.9971 3C29.5772 3 26.6439 7.6559 25.5094 8.5323C24.3748 7.6559 21.4415 3 15.0216 3C4.36777 3 -1.02832 15.9544 6.5262 23.5407L24.5132 41.5892Z"
                                stroke="#10845a" strokeWidth="4.5" strokeMiterlimit="10" />
                        </svg><br />
                        <h2>
                            FAZER DOAÇÃO<br />
                        </h2>
                        <br />
                        <p> *IBAN: <strong>PT50 0033 0000 4553 2412 3620 5</strong></p>
                        {/* <p> *MBWAY: <strong>+351 919 965 088</strong></p> */}
                        <br />
                        <p> *Pedimos para nos enviar o comprovativo da transferência <br />
                            para o email <strong>socios@impactu.org</strong></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QueroAjudar;