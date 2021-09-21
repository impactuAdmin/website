import Link from 'next/link'

const MenuLayover = () => {
    return (
        <div className='menu-wrapper'>
        <div className="menu-content">
            <div className='menu-dismiss'>O</div>
            <Link href="/About">
                <a>
                    <h1>Quem somos?</h1>
                </a>
            </Link>
            <a href="impactosocial.html">
                <h1>Impacto Social</h1>
            </a>
            <a href="recrutamento.html">
                <h1>Recrutamento</h1>
            </a>
            <a className='nth-of-type-wasnt-working' href="contacts.html">
                <h1>Contactos</h1>
            </a>
            <a href='queroajudar.html'>
                <button className='donate_button overlay-menu' type='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path
                            d="M6.69298 11.8736C6.77908 11.9579 6.89099 12 7.00291 12C7.11483 12 7.23536 11.9579 7.31284 11.8736L12.9088 6.32022C15.2419 4.00281 13.5889 0 10.2658 0C8.26846 0 7.35589 1.43258 7.00291 1.70225C6.64994 1.43258 5.73737 0 3.74005 0C0.425528 0 -1.25326 3.98596 1.09704 6.32022L6.69298 11.8736Z"
                            fill="#10845A" />
                    </svg>
                    Quero ajudar
                </button>
            </a>
        </div>
    </div>
    )
}

export default MenuLayover;