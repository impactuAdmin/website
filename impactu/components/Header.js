import Link from 'next/link'
import { useState } from 'react';
import Logo from '../components/Logo'

const Header = ( { datasDeRecrutamento } ) => {

    const [overlayMenuStyle, setOverlayMenuStyle] = useState({display: "none", opacity: "0"});
    
    const closeButtonClick = () => {
        setOverlayMenuStyle({display: "none", opacity: "0"});
    }

    const openButtonClick = () => {
        setOverlayMenuStyle({display: "flex", opacity: "1"});
    }

    return (
        <>
        <nav className='navigation_wrapper'>
            <div className='navigation'>
                <Logo />
                <div className="links">
                    <Link href="/QuemSomos"><a>Quem somos?</a></Link>
                    <Link href="/ImpactoSocial"><a>Impacto Social</a></Link>
                    {datasDeRecrutamento.length === 0 ? null: <Link href="/Recrutamento"><a>Recrutamento</a></Link>}
                    <Link href="/Contactos"><a>Contactos</a></Link>
                </div>
                <Link href="/QueroAjudar">
                    <a>
                        <button className='donate_button' type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                <path
                                    d="M6.69298 11.8736C6.77908 11.9579 6.89099 12 7.00291 12C7.11483 12 7.23536 11.9579 7.31284 11.8736L12.9088 6.32022C15.2419 4.00281 13.5889 0 10.2658 0C8.26846 0 7.35589 1.43258 7.00291 1.70225C6.64994 1.43258 5.73737 0 3.74005 0C0.425528 0 -1.25326 3.98596 1.09704 6.32022L6.69298 11.8736Z"
                                    fill="#10845A" />
                            </svg>
                            Quero ajudar
                        </button>
                    </a>
                </Link>
            </div>
        </nav>
        <nav className='mobile-header'>
            <div className="mobile-header-wrapper">
                <div className="burger-menu" onClick={openButtonClick}>
                    <div className="rect 1">

                    </div>
                    <div className="rect 2">

                    </div>
                    <div className="rect 3">

                    </div>
                </div>
                <div className="logo mobile">
                    <Logo />
                </div>
            </div>
        </nav>
        {/* MENU LAYOVER */}
        <menu className='menu-wrapper' style={overlayMenuStyle}>
            <div className='menu-content'>
                <nav className='mobile-header'>
                    <div className="mobile-header-wrapper">
                        <div className='menu-dismiss' onClick={closeButtonClick}>X</div>
                        <div className="logo mobile">
                            <Logo closeMenuFunction={closeButtonClick}/>
                        </div>
                    </div>
                </nav>
                <Link href="/QuemSomos">
                    <a onClick={closeButtonClick}>
                        <h1>Quem somos?</h1>
                    </a>
                </Link>
                <Link href="/ImpactoSocial">
                    <a onClick={closeButtonClick}>
                        <h1>Impacto Social</h1>
                    </a>
                </Link>
                {
                    datasDeRecrutamento.length === 0 ? 
                        null :
                        <Link href="/Recrutamento">
                            <a onClick={closeButtonClick}>
                                <h1>Recrutamento</h1>
                            </a>
                        </Link>
                }
                <Link href="/Contactos">
                    <a className="nth-of-type-wasnt-working" style={{marginBottom: "2em"}} onClick={closeButtonClick}>
                        <h1>Contactos</h1>
                    </a>
                </Link>
                <Link href="/QueroAjudar">
                    <a onClick={closeButtonClick}>
                        <button className='donate_button overlay-menu' type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                <path
                                    d="M6.69298 11.8736C6.77908 11.9579 6.89099 12 7.00291 12C7.11483 12 7.23536 11.9579 7.31284 11.8736L12.9088 6.32022C15.2419 4.00281 13.5889 0 10.2658 0C8.26846 0 7.35589 1.43258 7.00291 1.70225C6.64994 1.43258 5.73737 0 3.74005 0C0.425528 0 -1.25326 3.98596 1.09704 6.32022L6.69298 11.8736Z"
                                    fill="#10845A" />
                            </svg>
                            Quero ajudar
                        </button>
                    </a>
                </Link>
            </div>
        </menu>
    </>
    )
}

export default Header;