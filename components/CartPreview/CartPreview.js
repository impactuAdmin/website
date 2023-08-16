import { useRef } from 'react'
import styles from './CartPreview.module.css'
import Link from 'next/link'

const CartPreview = ({ cartProducts, setCartProducts }) => {
  const cartRef = useRef(null)

  return (
    <div className={styles['cart']} ref={cartRef}>
      {cartProducts.length === 0 ? (
        <div>O cesto está vazio!</div>
      ) : (
        <>
          {cartProducts.map((product) => {
            return <p>{product.name}</p>
          })}
          <button className={`secondary-btn ${styles['checkout-btn']}`}>Finalizar</button>
        </>
      )}
    </div>
  )
}

export default CartPreview
