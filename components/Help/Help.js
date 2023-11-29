import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './Help.module.css'

const Help = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const bannerData = [
    {
      image: '/como-ajudar.webp',
      title: 'Como ajudar?',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="45"
          viewBox="0 0 51 45"
          fill="none"
        >
          <path
            d="M24.5132 41.5892C24.7899 41.8631 25.1496 42 25.5094 42C25.8691 42 26.2565 41.8631 26.5056 41.5892L44.4925 23.5407C51.9917 16.0091 46.6786 3 35.9971 3C29.5772 3 26.6439 7.6559 25.5094 8.5323C24.3748 7.6559 21.4415 3 15.0216 3C4.36777 3 -1.02832 15.9544 6.5262 23.5407L24.5132 41.5892Z"
            stroke="#E8F6F4"
            strokeWidth="4.5"
            strokeMiterlimit="10"
          />
        </svg>
      ),
      link: 'Fazer doação',
      href: '/QueroAjudar',
    },
    {
      image: '/como-ajudar2.webp',
      title: 'Dá a tua voz',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="45"
          viewBox="0 0 51 45"
          fill="none"
        >
          <path
            d="M24.5132 41.5892C24.7899 41.8631 25.1496 42 25.5094 42C25.8691 42 26.2565 41.8631 26.5056 41.5892L44.4925 23.5407C51.9917 16.0091 46.6786 3 35.9971 3C29.5772 3 26.6439 7.6559 25.5094 8.5323C24.3748 7.6559 21.4415 3 15.0216 3C4.36777 3 -1.02832 15.9544 6.5262 23.5407L24.5132 41.5892Z"
            stroke="#E8F6F4"
            strokeWidth="4.5"
            strokeMiterlimit="10"
          />
        </svg>
      ),
      link: 'Fala connosco',
      href: '/Contactos#fala-connosco',
    },
  ]

  function updateSlides(n) {
    const updatedIndex = slideIndex + n

    if (updatedIndex > bannerData.length) {
      setSlideIndex(1)
    } else if (updatedIndex < 1) {
      setSlideIndex(bannerData.length)
    } else {
      setSlideIndex(slideIndex + n)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => updateSlides(slideIndex), 4000)

    return () => clearTimeout(timeoutId)
  }, [slideIndex])

  return (
    <section className={styles['help-wrapper']}>
      <div className={`${styles['slider-wrapper']} reveal`}>
        {bannerData.map((banner, index) => (
          <div
            key={index}
            className={`${styles['img-wrapper']} fade`}
            style={{
              display: slideIndex === index + 1 ? 'block' : 'none',
              backgroundImage: `url(${banner.image})`,
            }}
          >
            <div className={styles['content-wrapper']}>
              <div className={styles['content-foo']}>
                <h1>{banner.title}</h1>
                {banner.svg}
              </div>

              <div className="link help">
                <div className="link-underline help">
                  <Link href={banner.href}>
                    <a href="#">
                      <h4>{banner.link}</h4>
                      <svg
                        className="arrow help"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                      >
                        <path
                          d="M17.6151 7.0705H0.515381V7.99454H17.6151V7.0705Z"
                          fill="black"
                          strokeWidth="1"
                          strokeMiterlimit="102"
                        />
                        <path
                          d="M18.5153 7.30319L12.1274 1L11.5484 1.57138L17.9363 7.87457L18.5153 7.30319Z"
                          fill="black"
                          strokeWidth="1"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M17.3516 7.30151L11.5464 13.0297L12.1254 13.6011L17.9306 7.8729L17.3516 7.30151Z"
                          fill="black"
                          strokeWidth="1"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className={styles['dots-container']}>
          {bannerData.map((img, index) => (
            <span
              key={index}
              className={
                index + 1 === slideIndex ? `${styles['dot']} ${styles['active']}` : styles['dot']
              }
              onClick={() => setSlideIndex(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Help
