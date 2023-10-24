import { team } from '../../public/data/dados'
import styles from './Equipa.module.css'

const Equipa = () => {
  return (
    <section id="equipa" className={styles['about-team']}>
      <h1>A nossa equipa</h1>
      <div className={styles['team-container']}>
        {team.map((member) => (
          <div className={styles['member-container']}>
            <div
              className={styles['member-img']}
              style={{
                backgroundImage: `url(${member.src})`,
                backgroundPosition: member.imgAjustments.position,
                backgroundSize: member.imgAjustments.size,
                transform: member.imgAjustments.rotation,
              }}
            ></div>
            <p className={styles['member-name']}>{member.name}</p>
            <p className={styles['member-post']}>{member.post}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Equipa
