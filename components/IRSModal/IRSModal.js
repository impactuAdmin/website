import styles from "./IRSModal.module.css"
import Link from "next/link"
import { useState } from "react"

const IRSModal = () => {
  const [modalActive, setModalActive] = useState(true)

  return (
    modalActive && (
      <div className={styles["modal"]}>
        <button className={styles["close-btn"]} onClick={() => setModalActive(false)}>
          &#x2715;
        </button>
        <h3 className={styles["title"]}>IRS Solidário</h3>

        <button className={styles["modal-btn"]}>
          <Link href="/IRS">Saber mais</Link>
        </button>
      </div>
    )
  )
}

export default IRSModal
