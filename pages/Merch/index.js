import { merchProducts } from '../../public/data/dados'
import styles from './Merch.module.css'

import { checkout } from '../../public/scripts/checkout'

const Merch = () => {
  return (
    <div className={styles['products-wrapper']}>
      <button
        onClick={() =>
          checkout({
            lineItems: [
              {
                price: 'price_1NSOHvJBDnnfkEM987oFIaeI',
                quantity: 1,
              },
              {
                price: 'price_1NSS7NJBDnnfkEM9ZhBvryRU',
                quantity: 1,
              },
            ],
          })
        }
      >
        Comprar
      </button>
    </div>
  )
}

export default Merch
