import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Logo from "../Logo"
import Dropdown from "../Dropdown/Dropdown"
import styles from "./Header.module.css"

const Header = ({ datasDeRecrutamento, merchProducts }) => {
  const [overlayMenuStyle, setOverlayMenuStyle] = useState({ display: "none", opacity: "0" })
  const router = useRouter()
  const [navLinkClassName, setNavLinkClassName] = useState("")

  const closeButtonClick = () => {
    setOverlayMenuStyle({ display: "none", opacity: "0" })
  }

  const openButtonClick = () => {
    setOverlayMenuStyle({ display: "flex", opacity: "1" })
  }

  useEffect(() => {
    const handleScroll = () => {
      if ((window.scrollY > 1100 && window.scrollY < 3350) || window.scrollY > 4200) {
        setNavLinkClassName("nav-links-scrolling-active")
      } else {
        setNavLinkClassName("")
      }
      if (
        window.scrollY >= 3350 &&
        window.scrollY < 4000
        // && e === getSticker
      ) {
        setNavLinkClassName("nav-links-scrolling-active")
      } else if (
        window.scrollY >= 4000
        // && e === getSticker
      ) {
        setNavLinkClassName("")
      }
    }

    if (
      router.pathname === "/QueroAjudar" ||
      router.pathname === "/Doar" ||
      router.pathname === "/Socio" ||
      router.pathname === "/ProductPage/[product]" ||
      router.pathname === "/Checkout"
    ) {
      setNavLinkClassName("nav-links-scrolling-active")
    } else {
      setNavLinkClassName("")
      document.addEventListener("scroll", handleScroll)
    }

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [router.pathname])

  return (
    <>
      <nav className="navigation_wrapper">
        <div className="navigation">
          <Logo isMobile={false} router={router} />
          <ul className={`links ${styles["links"]}`}>
            <Dropdown
              title={"Quem somos?"}
              navLinkClassName={`${styles["nav-link"]} ${navLinkClassName}`}
            />
            <Dropdown
              title={"Impacto Social"}
              navLinkClassName={`${styles["nav-link"]} ${navLinkClassName}`}
            />
            {datasDeRecrutamento.length === 0 ? null : (
              <li>
                <Link href="/Recrutamento">
                  <a className={`${styles["nav-link"]} ${navLinkClassName}`}>Recrutamento</a>
                </Link>
              </li>
            )}
            {merchProducts.length === 0 ? null : (
              <li>
                <Link href="/LojaOnline">
                  <a className={`${styles["nav-link"]} ${navLinkClassName}`}>Loja Online</a>
                </Link>
              </li>
            )}
            <li>
              <Link href="/Contactos">
                <a className={`${styles["nav-link"]} ${navLinkClassName}`}>Contactos</a>
              </Link>
            </li>
          </ul>
          <Link href="/QueroAjudar">
            <a>
              <button className="donate_button" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                >
                  <path
                    d="M6.69298 11.8736C6.77908 11.9579 6.89099 12 7.00291 12C7.11483 12 7.23536 11.9579 7.31284 11.8736L12.9088 6.32022C15.2419 4.00281 13.5889 0 10.2658 0C8.26846 0 7.35589 1.43258 7.00291 1.70225C6.64994 1.43258 5.73737 0 3.74005 0C0.425528 0 -1.25326 3.98596 1.09704 6.32022L6.69298 11.8736Z"
                    fill="#10845A"
                  />
                </svg>
                Quero ajudar
              </button>
            </a>
          </Link>
        </div>
      </nav>

      <nav className="mobile-header">
        <div className="mobile-header-wrapper">
          <div className="burger-menu" onClick={openButtonClick}>
            <div className="rect 1"></div>
            <div className="rect 2"></div>
            <div className="rect 3"></div>
          </div>
          <div className="logo mobile">
            <Logo isMobile={true} />
          </div>
        </div>
      </nav>
      {/* MENU LAYOVER */}
      <menu className="menu-wrapper" style={overlayMenuStyle}>
        <div className="menu-content">
          <nav className="mobile-header">
            <div className="mobile-header-wrapper">
              <div className="menu-dismiss" onClick={closeButtonClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  version="1.1"
                  viewBox="0 0 650 500"
                  fill="white"
                >
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
          {datasDeRecrutamento.length === 0 ? null : (
            <Link href="/Recrutamento">
              <a onClick={closeButtonClick}>
                <h1>Recrutamento</h1>
              </a>
            </Link>
          )}
          {merchProducts.length === 0 ? null : (
            <Link href="/LojaOnline">
              <a onClick={closeButtonClick}>
                <h1>Loja Online</h1>
              </a>
            </Link>
          )}
          <Link href="/Contactos">
            <a onClick={closeButtonClick}>
              <h1>Contactos</h1>
            </a>
          </Link>
          <Link href="/QueroAjudar">
            <a onClick={closeButtonClick}>
              <button className="donate_button overlay-menu" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                >
                  <path
                    d="M6.69298 11.8736C6.77908 11.9579 6.89099 12 7.00291 12C7.11483 12 7.23536 11.9579 7.31284 11.8736L12.9088 6.32022C15.2419 4.00281 13.5889 0 10.2658 0C8.26846 0 7.35589 1.43258 7.00291 1.70225C6.64994 1.43258 5.73737 0 3.74005 0C0.425528 0 -1.25326 3.98596 1.09704 6.32022L6.69298 11.8736Z"
                    fill="#10845A"
                  />
                </svg>
                Quero ajudar
              </button>
            </a>
          </Link>
          <div className="social-media">
            <Link href="https://www.linkedin.com/company/impac%E2%80%99tu">
              <a target="blank">
                <svg
                  className="linkedin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g>
                    <path d="M4.44989 6.56006H0.389893V19.6801H4.44989V6.56006Z" fill="white" />
                    <path
                      d="M2.4 4.84C3.73 4.84 4.8 3.76 4.8 2.42C4.8 1.08 3.73 0 2.4 0C1.07 0 0 1.08 0 2.42C0 3.76 1.07 4.84 2.4 4.84Z"
                      fill="white"
                    />
                    <path
                      d="M10.94 12.7899C10.94 10.9499 11.79 9.84991 13.41 9.84991C14.9 9.84991 15.62 10.8999 15.62 12.7899C15.62 14.6799 15.62 19.6799 15.62 19.6799H19.66C19.66 19.6799 19.66 14.8899 19.66 11.3699C19.66 7.85991 17.67 6.15991 14.89 6.15991C12.11 6.15991 10.94 8.32991 10.94 8.32991V6.55991H7.04004V19.6799H10.94C10.94 19.6799 10.94 14.8099 10.94 12.7899Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
            </Link>
            <Link href="https://www.facebook.com/associacaoimpactu/">
              <a target="blank">
                <svg
                  className="facebook"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                >
                  <g>
                    <path
                      d="M2.74017 19.74H6.72017V9.79H9.49017L9.79017 6.46H6.71017C6.71017 6.46 6.71017 5.22 6.71017 4.56C6.71017 3.77 6.87017 3.46 7.63017 3.46C8.24017 3.46 9.78017 3.46 9.78017 3.46V0C9.78017 0 7.51017 0 7.03017 0C4.07017 0 2.74017 1.3 2.74017 3.8C2.74017 5.97 2.74017 6.46 2.74017 6.46H0.670166V9.83H2.74017V19.74Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
            </Link>
            <Link href="https://www.instagram.com/impac.tu/">
              <a target="blank">
                <svg
                  className="instagram"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M10.85 1.82C13.54 1.82 13.86 1.83 14.92 1.88C15.9 1.92 16.44 2.09 16.79 2.23C17.26 2.41 17.6 2.63 17.95 2.98C18.3 3.33 18.52 3.67 18.7 4.14C18.84 4.5 19 5.03 19.05 6.01C19.1 7.07 19.11 7.39 19.11 10.08C19.11 12.77 19.1 13.09 19.05 14.15C19.01 15.13 18.84 15.67 18.7 16.02C18.52 16.49 18.3 16.83 17.95 17.18C17.6 17.53 17.26 17.75 16.79 17.93C16.43 18.07 15.9 18.23 14.92 18.28C13.86 18.33 13.54 18.34 10.85 18.34C8.16003 18.34 7.85003 18.32 6.78003 18.27C5.80003 18.23 5.26003 18.06 4.91003 17.92C4.44003 17.74 4.10003 17.52 3.75003 17.17C3.40003 16.82 3.18003 16.48 3.00003 16.01C2.86003 15.66 2.70003 15.12 2.65003 14.14C2.60003 13.08 2.59003 12.76 2.59003 10.07C2.59003 7.38 2.60003 7.06 2.65003 6C2.69003 5.02 2.86003 4.48 3.00003 4.13C3.18003 3.66 3.40003 3.32 3.75003 2.97C4.11003 2.62 4.44003 2.4 4.91003 2.22C5.27003 2.08 5.80003 1.92 6.78003 1.87C7.85003 1.83 8.16003 1.82 10.85 1.82ZM10.85 0C8.12003 0 7.77003 0.01 6.70003 0.06C5.63003 0.11 4.90003 0.28 4.25003 0.53C3.59003 0.79 3.03003 1.13 2.47003 1.69C1.91003 2.25 1.57003 2.81 1.31003 3.47C1.06003 4.12 0.890029 4.85 0.840029 5.92C0.790029 6.99 0.780029 7.34 0.780029 10.07C0.780029 12.8 0.790029 13.15 0.840029 14.22C0.890029 15.29 1.06003 16.02 1.31003 16.67C1.57003 17.33 1.91003 17.89 2.47003 18.45C3.03003 19.01 3.59003 19.35 4.25003 19.61C4.89003 19.86 5.62003 20.03 6.70003 20.08C7.77003 20.13 8.12003 20.14 10.85 20.14C13.59 20.14 13.93 20.13 15 20.08C16.07 20.03 16.8 19.86 17.45 19.61C18.11 19.35 18.67 19.01 19.23 18.45C19.79 17.89 20.13 17.33 20.39 16.67C20.64 16.03 20.81 15.3 20.86 14.22C20.91 13.15 20.92 12.8 20.92 10.07C20.92 7.34 20.91 6.99 20.86 5.92C20.81 4.85 20.64 4.12 20.39 3.47C20.13 2.81 19.79 2.25 19.23 1.69C18.67 1.13 18.11 0.79 17.45 0.53C16.81 0.28 16.08 0.11 15 0.06C13.93 0.01 13.59 0 10.85 0Z"
                      fill="white"
                    />
                    <path
                      d="M10.8499 4.8999C7.98993 4.8999 5.67993 7.2199 5.67993 10.0699C5.67993 12.9199 7.99993 15.2399 10.8499 15.2399C13.7099 15.2399 16.0199 12.9199 16.0199 10.0699C16.0199 7.2199 13.7099 4.8999 10.8499 4.8999ZM10.8499 13.4299C8.99993 13.4299 7.48993 11.9299 7.48993 10.0699C7.48993 8.2199 8.98993 6.7099 10.8499 6.7099C12.7099 6.7099 14.2099 8.2099 14.2099 10.0699C14.2099 11.9299 12.7099 13.4299 10.8499 13.4299Z"
                      fill="white"
                    />
                    <path
                      d="M17.44 4.69999C17.44 5.36999 16.9 5.90999 16.23 5.90999C15.56 5.90999 15.02 5.36999 15.02 4.69999C15.02 4.02999 15.56 3.48999 16.23 3.48999C16.9 3.48999 17.44 4.02999 17.44 4.69999Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCU7OPFgYWKE-eYjvdjUdCUA">
              <a target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 700 700"
                  width="33"
                  height="33"
                  fill="white"
                >
                  <g>
                    <path
                      className="st0"
                      d="M526.4,174.4H189.7h0c-22.9,0-44.8,9.1-60.9,25.2c-16.2,16.2-25.2,38.1-25.2,60.9v180.1v0   c0,22.9,9.1,44.8,25.2,60.9c16.2,16.2,38.1,25.2,60.9,25.2h336.8h0c22.9,0,44.8-9.1,60.9-25.2c16.2-16.2,25.2-38.1,25.2-60.9V260.5   v0c0-22.9-9.1-44.8-25.2-60.9C571.2,183.5,549.3,174.4,526.4,174.4L526.4,174.4z M457.8,354.1L305,432.4c-1.2,0.6-2.7,0.6-3.8-0.1   c-1.2-0.7-1.9-2-1.9-3.3V272.3c0-1.4,0.7-2.6,1.9-3.3c1.2-0.7,2.6-0.7,3.8-0.1l152.7,78.3c1.3,0.7,2.1,2,2.1,3.5   C459.9,352.1,459.1,353.5,457.8,354.1L457.8,354.1z"
                    />
                  </g>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </menu>
    </>
  )
}

export default Header
