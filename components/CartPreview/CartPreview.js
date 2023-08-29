import { useRef, useEffect } from 'react'
import styles from './CartPreview.module.css'
import Link from 'next/link'

const CartPreview = ({ cartProducts, setPreviewing }) => {
  const cartRef = useRef(null)

  useEffect(() => {
    const cart = cartRef.current

    const timeoutId = setTimeout(() => {
      cart.classList.add('closing')
      cart.addEventListener('animationend', closePreview)
    }, 2500)

    function closePreview() {
      cart.classList.remove('closing')
      setPreviewing(false)
      cart.removeEventListener('animationend', closePreview)
    }

    cart.addEventListener('mouseover', () => {
      cart.classList.remove('closing')
      clearTimeout(timeoutId)
      cart.removeEventListener('animationend', closePreview)
    })

    cart.addEventListener('mouseleave', () => {
      setTimeout(() => {
        cart.classList.add('closing')
        cart.addEventListener('animationend', closePreview)
      }, 500)
    })

    return () => {
      cart.classList.remove('closing')
      clearTimeout(timeoutId)
      cart.removeEventListener('animationend', closePreview)
    }
  }, [cartProducts])

  return (
    <div className={styles['cart']} ref={cartRef}>
      {cartProducts.length === 0 ? (
        <p>O cesto está vazio!</p>
      ) : (
        <>
          {cartProducts.map((product) => {
            return (
              <div className={styles['item']} key={product.name}>
                <img className={styles['item-img']} src={product.images[0]}></img>
                <div className={styles['item-info']}>
                  <p>{product.name}</p>
                  <div className={styles['secondary-info']}>
                    <p>Quantidade: {product.quantity}</p>
                    {product.size && <p>Tamanho: {product.size}</p>}
                  </div>
                </div>
              </div>
            )
          })}
          <Link href="/Checkout">
            <button className={`secondary-btn ${styles['checkout-btn']}`}>Finalizar</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default CartPreview
