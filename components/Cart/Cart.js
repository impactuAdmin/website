import { useRef } from 'react'
import CartItem from './CartItem'
import styles from './Cart.module.css'
import Link from 'next/link'

const Cart = ({ cartProducts, setCartProducts }) => {
  const cartRef = useRef(null)

  return (
    <div className={styles['cart']} ref={cartRef}>
      {cartProducts.length === 0 ? (
        <div>O cesto está vazio!</div>
      ) : (
        <>
          {cartProducts.map((product) => {
            return (
              <CartItem
                key={product.name}
                product={product}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            )
          })}
          <p className={styles['cart-total']}>
            Sub-total:&nbsp;
            <span>
              {/* €{cartProducts.reduce((total, acc) => total + acc.price.value * acc.quantity, 0)} */}
            </span>
          </p>
        </>
      )}
    </div>
  )
}

export default Cart
