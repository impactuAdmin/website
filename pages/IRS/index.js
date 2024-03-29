import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./IRS.module.css"

const IRS = () => {
  return (
    <>
      <section className={styles["section"]}>
        <div className={styles["section-content"]}>
          <div className={styles["content-col"]}>
            <h2 className={styles["section-header"]}>
              Defina até <span className={styles["reenie"]}>31 de março</span>, a entidade à qual
              pretende consignar 0,5% do seu IRS!
            </h2>

            <p>
              O IRS solidário permite que os contribuintes contribuam para causas sociais e ajuda a
              fortalecer o apoio a organizações que trabalham em prol do bem-estar da comunidade.
            </p>
          </div>

          <div className={styles["content-col"]}>
            <div className={styles["nif-container"]}>
              <p>Juntos criamos Impac’tu!</p>

              <div className={styles["nif"]}>
                <p>NIF 561 345 782</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["section-2"]}>
        <div className={styles["section-content"]}>
          <div className={styles["content-col"]}>
            <h2 className={styles["section-header"]}>
              O que <span className={styles["reenie"]}>é</span> e como{" "}
              <span className={styles["reenie"]}>funciona</span> ?
            </h2>

            <p>
              O IRS solidário é uma iniciativa que permite aos contribuintes{" "}
              <span className={styles["green-text"]}>destinarem 0,5% do imposto</span> sobre o
              rendimento das pessoas singulares (IRS) a{" "}
              <span className={styles["green-text"]}>instituições de solidariedade</span> social. Em
              países como Portugal, os contribuintes podem escolher direcionar uma parte do seu IRS
              para uma entidade sem fins lucrativos, como a Impac’tu.
            </p>
            <br />
            <br />
            <p>
              Essa opção de doação é realizada no momento da entrega da declaração de IRS, onde os
              contribuintes podem indicar o NIF da instituição que desejam apoiar e o montante que
              pretendem doar. Essas doações{" "}
              <span className={styles["green-text"]}>não implicam custos adicionais</span> para o
              contribuinte, sendo retiradas diretamente do valor do imposto a pagar ou aumentando o
              valor a receber da declaração.
            </p>
          </div>

          <div className={styles["content-col"]}>
            <img className={styles["col-img"]} src="/irs-img.jpg"></img>
          </div>
        </div>
      </section>

      <section className={styles["section"]}>
        <h2 className={styles["heading-2"]}>Passos a tomar</h2>
        <img className={styles["irs-img"]} src="/irs-consignacao-previa.jpg"></img>
        <Link href="/IRS">
          <button className={styles["click-btn"]}>Clique aqui para fazer</button>
        </Link>
      </section>
    </>
  )
}

export default IRS
