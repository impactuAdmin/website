import React, { useEffect, useState } from 'react'
import styles from './AboutStarted.module.css'

const phases = [
  {
    slideNumber: 1,
    imsgSrc: '/ideia.webp',
    alt: 'Grupo de amigos',
    title: 'A IDEIA',
    description:
      'Em 2017, um grupo de amigos idealizava criar um projeto\nque marcasse a diferença no centro histórico do Porto.',
  },
  {
    slideNumber: 2,
    imsgSrc: '/baloes.webp',
    alt: 'Grupo de amigos',
    title: 'O SONHO',
    description: 'Sonharam, tentaram e alcançaram.',
  },
  {
    slideNumber: 3,
    imsgSrc: '/2018.webp',
    alt: 'Grupo de amigos',
    title: 'ALCANCE DO SONHO',
    description:
      'Em 2018, o projeto foi criado, nasceu a Impac’tu\ncomposta por membros estudantes da Academia do Porto.',
  },
  {
    slideNumber: 4,
    imsgSrc: '/Bairro-porto.webp',
    alt: 'Grupo de amigos',
    title: 'CRESCIMENTO',
    description:
      'Muitos casos têm passado pelas mãos destes membros que nunca baixam\nos braços e já ajudaram várias famílias e pessoas com necessidades diferentes.',
  },
]

const AboutStarted = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  function increaseSlideIndex(increment) {
    const index = (slideIndex + increment) % phases.length
    setSlideIndex(index === -1 ? phases.length - 1 : index)
  }

  function setCurrentSlide(index) {
    setSlideIndex(index)
  }

  const listItems = phases.map((phase) => (
    <div
      key={phase.slideNumber}
      className={`${styles['mySlides']} fade`}
      style={phase.slideNumber === slideIndex + 1 ? { display: 'flex' } : { display: 'none' }}
    >
      <div className={styles['numbertext']}>{phase.slideNumber} / 4</div>
      <img src={phase.imsgSrc} alt={phase.alt} />
      <div className={styles['text']}>
        <strong>{phase.title}</strong>
        <br />
        <br />
        {phase.description}
      </div>
    </div>
  ))

  const dots = phases.map((phase) => (
    <span
      key={phase.slideNumber}
      className={
        phase.slideNumber === slideIndex + 1
          ? `${styles['dot']} ${styles['active']}`
          : styles['dot']
      }
      onClick={() => setCurrentSlide(phase.slideNumber - 1)}
    ></span>
  ))

  return (
    <section id="historia" className={`${styles['about-comecou']} reveal`}>
      <h1>Como tudo começou</h1>
      <div className={styles['slideshow-container']}>
        {listItems}
        <a className={styles['prev']} onClick={() => increaseSlideIndex(-1)}>
          &#10094;
        </a>
        <a className={styles['next']} onClick={() => increaseSlideIndex(1)}>
          &#10095;
        </a>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>{dots}</div>
    </section>
  )
}

export default AboutStarted
