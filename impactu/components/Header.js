import Link from 'next/link'
import { useState } from 'react';

const Header = () => {

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
                <Link href="/">
                    <a className='logo-container'>
                        <svg className='logo desktop' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 686 161" fill="none">
                            <path d="M31.6571 25.8997H0.748047V122.235H31.6571V25.8997Z" fill="#ffffff" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M143.558 26.3614C137.829 26.3614 132.513 27.8345 127.767 30.7273C124.73 32.5731 121.882 35.0578 119.259 38.1104C116.325 34.8803 113.029 32.3246 109.405 30.4789C104.055 27.7457 97.6348 26.3614 90.3174 26.3614C84.9674 26.3614 80.0834 27.4618 75.838 29.6447C74.9578 30.0884 74.0949 30.6031 73.2665 31.1355V28.0474H44.9634V122.235H73.0249V81.2021C73.0249 68.4414 74.8888 62.6556 76.4765 60.0467C77.65 58.0767 79.9454 55.4678 86.072 55.4678C92.0777 55.4678 94.1142 57.6685 95.1152 59.319C96.2369 61.1826 98.1353 66.3649 98.1353 79.9775V122.253H126.732V81.2021C126.732 68.4059 128.561 62.6201 130.097 59.9935C131.236 58.059 133.445 55.4678 139.468 55.4678C145.181 55.4678 147.148 57.633 148.114 59.2481C149.219 61.1116 151.083 66.2762 151.083 79.9775V122.253H179.524V68.9384C179.524 55.6807 176.418 45.2095 170.326 37.8442C164.026 30.2304 155.035 26.3614 143.558 26.3614Z"
                                fill="#ffffff" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M360.042 31.4018C358.921 30.6741 357.747 30.0175 356.522 29.4318C351.603 27.0891 345.753 25.9177 339.108 25.9177C332.292 25.9177 326.027 27.1068 320.504 29.4673C314.93 31.8455 309.804 35.5548 305.317 40.4532C301.106 44.9434 297.845 50.2145 295.584 56.089C293.34 61.9458 292.201 68.2462 292.201 74.7597C292.201 88.6562 296.757 100.476 305.766 109.918C314.792 119.378 326.148 124.17 339.557 124.17C346.702 124.17 352.742 122.998 357.506 120.709C358.472 120.247 359.387 119.733 360.267 119.182V122.253H388.346V28.0475H360.06V31.4018H360.042ZM326.821 60.8631C330.48 57.1183 334.777 55.3081 339.954 55.3081C344.769 55.3081 348.911 57.2248 352.587 61.1648C356.315 65.1581 358.127 69.808 358.127 75.3808C358.127 80.5099 356.332 84.8759 352.656 88.7449C348.997 92.5785 344.942 94.442 340.248 94.442C334.932 94.442 330.566 92.5784 326.907 88.7627C323.214 84.9114 321.402 80.2437 321.402 74.4579C321.385 69.0449 323.162 64.6079 326.821 60.8631Z"
                                fill="#ffffff" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M269.593 37.01C265.52 33.3362 260.844 30.5321 255.735 28.6686C245.933 25.1013 234.094 24.9593 224.429 28.4378C222.548 29.1123 220.701 29.9464 218.889 30.9048V28.0296H190.448V124.134H218.889V119.733C220.563 120.62 222.306 121.365 224.067 121.986C228.709 123.619 233.956 124.436 239.668 124.436C245.605 124.436 251.334 123.335 256.736 121.188C262.138 119.023 267.005 115.846 271.147 111.799C276.065 107.203 279.896 101.648 282.571 95.3115C285.229 88.9933 286.593 82.2669 286.593 75.3453C286.593 67.9267 285.108 60.8098 282.157 54.2076C279.241 47.641 275.012 41.8552 269.593 37.01ZM257.254 75.0613C257.254 80.5986 255.425 85.2308 251.662 89.2063C247.935 93.1463 243.568 95.0631 238.322 95.0631C232.989 95.0631 228.64 93.1996 225.05 89.3483C221.392 85.4438 219.631 80.6874 219.631 74.7596C219.631 69.2045 221.357 64.6611 224.912 60.8631C228.416 57.1183 232.506 55.308 237.424 55.308C243.258 55.308 247.935 57.1538 251.697 60.9341C255.442 64.6788 257.254 69.311 257.254 75.0613Z"
                                fill="#ffffff" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M442.553 54.7756C446.557 54.7756 449.887 55.6275 452.683 57.3491C455.462 59.0706 457.809 61.7505 459.656 65.3178L461.019 67.9445H490.392L488.96 61.8038C486.388 50.8356 480.917 41.944 472.703 35.3773C464.522 28.8461 454.754 25.5273 443.675 25.5273C436.875 25.5273 430.42 26.8761 424.466 29.5383C418.512 32.2004 413.128 36.1404 408.451 41.2163C404.154 45.813 400.858 51.0486 398.648 56.7811C396.439 62.5137 395.335 68.7076 395.335 75.2211C395.335 81.5038 396.56 87.7688 398.976 93.8385C401.375 99.8905 404.775 105.25 409.09 109.812C413.697 114.603 418.927 118.277 424.674 120.744C430.403 123.211 436.685 124.471 443.364 124.471C454.72 124.471 464.557 121.135 472.582 114.586C480.607 108.037 486.06 98.9676 488.804 87.609L490.288 81.4328H460.467L459.276 84.6274C457.947 88.1947 456.049 90.7504 453.477 92.4542C450.871 94.1935 447.42 95.0631 443.226 95.0631C437.841 95.0631 433.51 93.2351 429.989 89.4726C426.417 85.6568 424.674 80.9536 424.674 75.0791C424.674 69.0804 426.382 64.2707 429.903 60.3839C433.303 56.6037 437.444 54.7756 442.553 54.7756Z"
                                fill="#ffffff" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M570.607 90.6438C567.898 88.0881 566.569 84.4498 566.552 79.5337C566.534 73.0558 566.534 61.8924 566.552 55.4677H590.592V28.0474H566.552V0.786743H537.817V28.0474H522.164V55.4499H537.938C538.11 63.046 538.421 77.8122 538.421 86.8458C538.421 97.6542 541.873 106.262 548.672 112.438C558.164 121.046 571.833 122.483 579.84 122.483C583.551 122.483 586.053 122.182 586.364 122.146L590.592 121.596L590.609 94.6371L585.363 95.0808C585.259 95.0985 576.009 95.7197 570.607 90.6438Z"
                                fill="#ffffff" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M656.828 28.0472V69.5593C656.828 82.3377 654.964 88.2122 653.394 90.8921C652.22 92.8799 649.977 95.5243 643.867 95.5243C637.931 95.5243 635.894 93.2881 634.859 91.5843C633.72 89.703 631.787 84.4852 631.787 70.8549V28.0472H602.828V81.8052C602.828 95.1338 606.003 105.641 612.285 113.041C618.74 120.62 627.938 124.471 639.605 124.471C644.955 124.471 649.839 123.353 654.101 121.134C654.981 120.691 655.827 120.176 656.656 119.626V122.235H685.252V28.0472H656.828Z"
                                fill="#ffffff" />
                            <path
                                d="M16.1941 160.908C24.1242 160.908 30.5528 154.297 30.5528 146.141C30.5528 137.986 24.1242 131.375 16.1941 131.375C8.26404 131.375 1.83545 137.986 1.83545 146.141C1.83545 154.297 8.26404 160.908 16.1941 160.908Z"
                                fill="#ffffff" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M498.434 0.946442C490.513 0.946442 484.075 7.54862 484.075 15.7126C484.075 23.8588 490.495 30.4788 498.434 30.4788C506.356 30.4788 512.793 23.8766 512.793 15.7126C512.793 7.54862 506.356 0.946442 498.434 0.946442Z"
                                fill="#ffffff" />
                            <path
                                d="M204.634 160.89C212.326 160.89 218.561 154.477 218.561 146.567C218.561 138.657 212.326 132.245 204.634 132.245C196.942 132.245 190.707 138.657 190.707 146.567C190.707 154.477 196.942 160.89 204.634 160.89Z"
                                fill="#ffffff" />
                        </svg>
                    </a>
                </Link>
                <div className="links">
                    <Link href="/About"><a>Quem somos?</a></Link>
                    <Link href="/ImpactoSocial"><a>Impacto Social</a></Link>
                    <Link href="/Recrutamento"><a>Recrutamento</a></Link>
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
                    <Link href="/">
                        <a className='logo-container' href='#'>
                            <svg className='logo-mobile' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 686 161" fill="none">
                                <path d="M31.6571 25.8997H0.748047V122.235H31.6571V25.8997Z" fill="#ffffff" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M143.558 26.3614C137.829 26.3614 132.513 27.8345 127.767 30.7273C124.73 32.5731 121.882 35.0578 119.259 38.1104C116.325 34.8803 113.029 32.3246 109.405 30.4789C104.055 27.7457 97.6348 26.3614 90.3174 26.3614C84.9674 26.3614 80.0834 27.4618 75.838 29.6447C74.9578 30.0884 74.0949 30.6031 73.2665 31.1355V28.0474H44.9634V122.235H73.0249V81.2021C73.0249 68.4414 74.8888 62.6556 76.4765 60.0467C77.65 58.0767 79.9454 55.4678 86.072 55.4678C92.0777 55.4678 94.1142 57.6685 95.1152 59.319C96.2369 61.1826 98.1353 66.3649 98.1353 79.9775V122.253H126.732V81.2021C126.732 68.4059 128.561 62.6201 130.097 59.9935C131.236 58.059 133.445 55.4678 139.468 55.4678C145.181 55.4678 147.148 57.633 148.114 59.2481C149.219 61.1116 151.083 66.2762 151.083 79.9775V122.253H179.524V68.9384C179.524 55.6807 176.418 45.2095 170.326 37.8442C164.026 30.2304 155.035 26.3614 143.558 26.3614Z"
                                    fill="#ffffff" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M360.042 31.4018C358.921 30.6741 357.747 30.0175 356.522 29.4318C351.603 27.0891 345.753 25.9177 339.108 25.9177C332.292 25.9177 326.027 27.1068 320.504 29.4673C314.93 31.8455 309.804 35.5548 305.317 40.4532C301.106 44.9434 297.845 50.2145 295.584 56.089C293.34 61.9458 292.201 68.2462 292.201 74.7597C292.201 88.6562 296.757 100.476 305.766 109.918C314.792 119.378 326.148 124.17 339.557 124.17C346.702 124.17 352.742 122.998 357.506 120.709C358.472 120.247 359.387 119.733 360.267 119.182V122.253H388.346V28.0475H360.06V31.4018H360.042ZM326.821 60.8631C330.48 57.1183 334.777 55.3081 339.954 55.3081C344.769 55.3081 348.911 57.2248 352.587 61.1648C356.315 65.1581 358.127 69.808 358.127 75.3808C358.127 80.5099 356.332 84.8759 352.656 88.7449C348.997 92.5785 344.942 94.442 340.248 94.442C334.932 94.442 330.566 92.5784 326.907 88.7627C323.214 84.9114 321.402 80.2437 321.402 74.4579C321.385 69.0449 323.162 64.6079 326.821 60.8631Z"
                                    fill="#ffffff" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M269.593 37.01C265.52 33.3362 260.844 30.5321 255.735 28.6686C245.933 25.1013 234.094 24.9593 224.429 28.4378C222.548 29.1123 220.701 29.9464 218.889 30.9048V28.0296H190.448V124.134H218.889V119.733C220.563 120.62 222.306 121.365 224.067 121.986C228.709 123.619 233.956 124.436 239.668 124.436C245.605 124.436 251.334 123.335 256.736 121.188C262.138 119.023 267.005 115.846 271.147 111.799C276.065 107.203 279.896 101.648 282.571 95.3115C285.229 88.9933 286.593 82.2669 286.593 75.3453C286.593 67.9267 285.108 60.8098 282.157 54.2076C279.241 47.641 275.012 41.8552 269.593 37.01ZM257.254 75.0613C257.254 80.5986 255.425 85.2308 251.662 89.2063C247.935 93.1463 243.568 95.0631 238.322 95.0631C232.989 95.0631 228.64 93.1996 225.05 89.3483C221.392 85.4438 219.631 80.6874 219.631 74.7596C219.631 69.2045 221.357 64.6611 224.912 60.8631C228.416 57.1183 232.506 55.308 237.424 55.308C243.258 55.308 247.935 57.1538 251.697 60.9341C255.442 64.6788 257.254 69.311 257.254 75.0613Z"
                                    fill="#ffffff" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M442.553 54.7756C446.557 54.7756 449.887 55.6275 452.683 57.3491C455.462 59.0706 457.809 61.7505 459.656 65.3178L461.019 67.9445H490.392L488.96 61.8038C486.388 50.8356 480.917 41.944 472.703 35.3773C464.522 28.8461 454.754 25.5273 443.675 25.5273C436.875 25.5273 430.42 26.8761 424.466 29.5383C418.512 32.2004 413.128 36.1404 408.451 41.2163C404.154 45.813 400.858 51.0486 398.648 56.7811C396.439 62.5137 395.335 68.7076 395.335 75.2211C395.335 81.5038 396.56 87.7688 398.976 93.8385C401.375 99.8905 404.775 105.25 409.09 109.812C413.697 114.603 418.927 118.277 424.674 120.744C430.403 123.211 436.685 124.471 443.364 124.471C454.72 124.471 464.557 121.135 472.582 114.586C480.607 108.037 486.06 98.9676 488.804 87.609L490.288 81.4328H460.467L459.276 84.6274C457.947 88.1947 456.049 90.7504 453.477 92.4542C450.871 94.1935 447.42 95.0631 443.226 95.0631C437.841 95.0631 433.51 93.2351 429.989 89.4726C426.417 85.6568 424.674 80.9536 424.674 75.0791C424.674 69.0804 426.382 64.2707 429.903 60.3839C433.303 56.6037 437.444 54.7756 442.553 54.7756Z"
                                    fill="#ffffff" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M570.607 90.6438C567.898 88.0881 566.569 84.4498 566.552 79.5337C566.534 73.0558 566.534 61.8924 566.552 55.4677H590.592V28.0474H566.552V0.786743H537.817V28.0474H522.164V55.4499H537.938C538.11 63.046 538.421 77.8122 538.421 86.8458C538.421 97.6542 541.873 106.262 548.672 112.438C558.164 121.046 571.833 122.483 579.84 122.483C583.551 122.483 586.053 122.182 586.364 122.146L590.592 121.596L590.609 94.6371L585.363 95.0808C585.259 95.0985 576.009 95.7197 570.607 90.6438Z"
                                    fill="#ffffff" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M656.828 28.0472V69.5593C656.828 82.3377 654.964 88.2122 653.394 90.8921C652.22 92.8799 649.977 95.5243 643.867 95.5243C637.931 95.5243 635.894 93.2881 634.859 91.5843C633.72 89.703 631.787 84.4852 631.787 70.8549V28.0472H602.828V81.8052C602.828 95.1338 606.003 105.641 612.285 113.041C618.74 120.62 627.938 124.471 639.605 124.471C644.955 124.471 649.839 123.353 654.101 121.134C654.981 120.691 655.827 120.176 656.656 119.626V122.235H685.252V28.0472H656.828Z"
                                    fill="#ffffff" />
                                <path
                                    d="M16.1941 160.908C24.1242 160.908 30.5528 154.297 30.5528 146.141C30.5528 137.986 24.1242 131.375 16.1941 131.375C8.26404 131.375 1.83545 137.986 1.83545 146.141C1.83545 154.297 8.26404 160.908 16.1941 160.908Z"
                                    fill="#ffffff" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M498.434 0.946442C490.513 0.946442 484.075 7.54862 484.075 15.7126C484.075 23.8588 490.495 30.4788 498.434 30.4788C506.356 30.4788 512.793 23.8766 512.793 15.7126C512.793 7.54862 506.356 0.946442 498.434 0.946442Z"
                                    fill="#ffffff" />
                                <path
                                    d="M204.634 160.89C212.326 160.89 218.561 154.477 218.561 146.567C218.561 138.657 212.326 132.245 204.634 132.245C196.942 132.245 190.707 138.657 190.707 146.567C190.707 154.477 196.942 160.89 204.634 160.89Z"
                                    fill="#ffffff" />
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
        <menu className='menu-wrapper' style={overlayMenuStyle}>
            <div className='menu-content'>
                <div className="menu-content">
                    <div className='menu-dismiss' onClick={closeButtonClick}>O</div>
                    <Link href="/About">
                        <a onClick={closeButtonClick}>
                            <h1>Quem somos?</h1>
                        </a>
                    </Link>
                    <Link href="/ImpactoSocial">
                        <a onClick={closeButtonClick}>
                            <h1>Impacto Social</h1>
                        </a>
                    </Link>
                    <Link href="/Recrutamento">
                        <a onClick={closeButtonClick}>
                            <h1>Recrutamento</h1>
                        </a>
                    </Link>
                    <Link href="/Contactos">
                        <a className="nth-of-type-wasnt-working" onClick={closeButtonClick}>
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
            </div>
        </menu>
    </>
    )
}

export default Header;