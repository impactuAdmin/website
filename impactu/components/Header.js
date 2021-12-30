import Link from 'next/link'
import { useState } from 'react';
import Logo from '../components/Logo'

const Header = ({ datasDeRecrutamento }) => {

    const [overlayMenuStyle, setOverlayMenuStyle] = useState({ display: "none", opacity: "0" });

    const closeButtonClick = () => {
        setOverlayMenuStyle({ display: "none", opacity: "0" });
    }

    const openButtonClick = () => {
        setOverlayMenuStyle({ display: "flex", opacity: "1" });
    }

    return (
        <>
            <nav className='navigation_wrapper'>
                <div className='navigation'>
                    <Logo isMobile={false} />
                    <div className="links">
                        <Link href="/QuemSomos"><a>Quem somos?</a></Link>
                        <Link href="/ImpactoSocial"><a>Impacto Social</a></Link>
                        {datasDeRecrutamento.length === 0 ? null : <Link href="/Recrutamento"><a>Recrutamento</a></Link>}
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
                        <Logo isMobile={true} />
                    </div>
                </div>
            </nav>
            {/* MENU LAYOVER */}
            <menu className='menu-wrapper' style={overlayMenuStyle}>
                <div className='menu-content'>
                    <nav className='mobile-header'>
                        <div className="mobile-header-wrapper">
                            <div className='menu-dismiss' onClick={closeButtonClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" version="1.1" viewBox="0 0 650 500" fill="white">
                                    <g>
                                        <path d="m212.37 390.15 241.14-241.14 20.789 20.789-241.14 241.14z" />
                                        <path d="m212.37 169.8 20.789-20.789 241.14 241.14-20.789 20.789z" />
                                        <path d="m343.35 538.3c-68.504-0.003906-134.2-27.219-182.64-75.656-48.441-48.441-75.652-114.14-75.652-182.64s27.211-134.2 75.648-182.64c48.551-47.91 114.08-74.672 182.29-74.445 68.207 0.22266 133.56 27.422 181.79 75.652 48.23 48.23 75.426 113.58 75.652 181.79 0.22656 68.207-26.535 133.74-74.445 182.29-23.93 24.059-52.395 43.133-83.746 56.121-31.348 12.984-64.961 19.625-98.895 19.539zm0-487.14c-45.297-0.035156-89.586 13.371-127.26 38.527-37.672 25.152-67.031 60.922-84.355 102.77-17.328 41.852-21.848 87.902-12.984 132.32 8.8672 44.422 30.715 85.211 62.781 117.21 42.938 42.914 101.17 67.016 161.88 67 60.711-0.015626 118.93-24.148 161.84-67.09 42.918-42.938 67.02-101.17 67-161.88-0.015625-60.711-24.148-118.93-67.086-161.84-21.207-21.309-46.426-38.203-74.199-49.711-27.777-11.504-57.555-17.387-87.617-17.312z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="logo mobile">
                                <Logo closeMenuFunction={closeButtonClick} isMobile={true} />
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
                        <a className="nth-of-type-wasnt-working" style={{ marginBottom: "2em" }} onClick={closeButtonClick}>
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