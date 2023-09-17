import styles from './VideoHero.module.css'

const VideoHero = () => {
  return (
    <section className={styles['hero-wrapper']}>
      <video id="video" width="100%" height="100%" autoPlay loop muted playsInline>
        <source src="../video_hero.mp4" type="video/mp4" />
      </video>
      {/* <img src="/videoGif.gif" alt="This is an animated gif image, but it does not move" width='100%' height='100%'/> */}
      <div className={styles['title-hero']}>
        <div className={styles['animate-title']}>
          <h1>O impacto social começa em ti.</h1>
          <h3>
            Somos uma associação que sonha em criar uma sociedade&nbsp;
            <br />
            equitativa e, sobretudo, mais inclusiva, onde
            <br />
            todas as famílias têm igualdade de oportunidades.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default VideoHero
