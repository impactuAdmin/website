import Help from '../Help'
import styles from './Stats.module.css'

const Stats = () => {
  return (
    <section className={styles['stats-wrapper']}>
      <div className={`${styles['stats-content']} reveal`}>
        <div className={styles['title']}>
          <h1>DESDE 2018</h1>
        </div>
        <div className={styles['stats']}>
          <div className={`${styles['card']} one`}>
            <h1 className={styles['counter']} data-target="25">
              25
            </h1>
            <h2>Famílias ajudadas</h2>
          </div>
          <div className={`${styles['card']} two`}>
            <h1 className={styles['counter']} data-target="18">
              18
            </h1>
            <h2>Famílias a serem apoiadas</h2>
          </div>
          <div className={`${styles['card']} three`}>
            <h1 className={styles['counter']} data-target="8">
              8
            </h1>
            <h2>Casas reabilitadas</h2>
          </div>
        </div>
      </div>
      <Help />
    </section>
  )
}

export default Stats
