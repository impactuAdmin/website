import Link from 'next/link'

const Help = () => {
    return (
        <section className='help-wrapper'>
            <div className="img-wrapper reveal">
                <div className='content-wrapper'>
                    <div className='content-foo'>
                        <h1>Como ajudar?</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="45" viewBox="0 0 51 45" fill="none">
                            <path
                                d="M24.5132 41.5892C24.7899 41.8631 25.1496 42 25.5094 42C25.8691 42 26.2565 41.8631 26.5056 41.5892L44.4925 23.5407C51.9917 16.0091 46.6786 3 35.9971 3C29.5772 3 26.6439 7.6559 25.5094 8.5323C24.3748 7.6559 21.4415 3 15.0216 3C4.36777 3 -1.02832 15.9544 6.5262 23.5407L24.5132 41.5892Z"
                                stroke="#E8F6F4" strokeWidth="4.5" strokeMiterlimit="10" />
                        </svg>
                    </div>
                    <div className='link help'>
                        <div className='link-underline help'>
                            <Link href="/QueroAjudar">
                                <a href='#'>
                                    <h4>Sabe como</h4>
                                    <svg className='arrow help' xmlns="http://www.w3.org/2000/svg" width="19" height="14"
                                        viewBox="0 0 19 14" fill="none">
                                        <path d="M17.6151 7.0705H0.515381V7.99454H17.6151V7.0705Z" fill="black"
                                            strokeWidth="1" strokeMiterlimit="102" />
                                        <path
                                            d="M18.5153 7.30319L12.1274 1L11.5484 1.57138L17.9363 7.87457L18.5153 7.30319Z"
                                            fill="black" strokeWidth="1" strokeMiterlimit="10" />
                                        <path
                                            d="M17.3516 7.30151L11.5464 13.0297L12.1254 13.6011L17.9306 7.8729L17.3516 7.30151Z"
                                            fill="black" strokeWidth="1" strokeMiterlimit="10" />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Help;