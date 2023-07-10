import { merchProducts } from '../../public/data/dados'
import styles from './Merch.module.css'

const Merch = () => {
  return (
    <div className={styles['products-wrapper']}>
      <ul>
        {merchProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button
              className="snipcart-add-item"
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-name={product.name}
              data-item-description={product.description}
              data-item-url="/"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Merch
