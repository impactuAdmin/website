import styles from './Hero.module.css'

const Hero = ({ title, backgroundImage }) => {
  return (
    <section
      className={styles['hero-wrapper']}
      style={{ backgroundImage: `url('/${backgroundImage}')` }}
    >
      <div className={styles['hero-content']}>
        <div className={styles['title']}>
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
