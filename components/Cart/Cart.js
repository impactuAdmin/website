import { useRef } from 'react'
import CartItem from './CartItem'
import styles from './Cart.module.css'
import Link from 'next/link'

const Cart = ({ cartProducts, setCartProducts }) => {
  const cartRef = useRef(null)

  return (
    <div>
      <Link href="/Checkout">
        <div className={styles['cart-link-wrapper']}>
          <span>Cesto</span>
          <div className={styles['cart-icon']}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.1932 19.9509L18.8268 19.9946C18.7441 20.0044 18.6635 19.9999 18.5844 19.9889H1.41508C1.33633 19.9996 1.25573 20.0044 1.17268 19.9946L0.806313 19.9509C0.302445 19.8906 -0.055616 19.4472 0.00713677 18.9606L1.51782 6.51763C1.57934 6.03883 2.02538 5.69844 2.52002 5.74507C2.54309 5.74329 2.56524 5.73824 2.58892 5.73824H5.19809V4.63924H5.20701C5.20793 2.0768 7.35937 0 10.0131 0C12.6675 0 14.7962 2.07769 14.7962 4.64073C14.7962 4.77944 14.81 4.90567 14.7977 5.02805V5.73824H17.3949C17.4183 5.73824 17.4404 5.74329 17.4635 5.74477C17.9575 5.69873 18.4029 6.03883 18.4645 6.51734L19.993 18.9603C20.0551 19.4472 19.6974 19.8906 19.1932 19.9509ZM12.6011 4.65083C12.6011 3.27144 11.4429 2.15314 10.0144 2.15314C8.58612 2.15314 7.42827 3.27085 7.42766 4.64994H7.42274V5.73854H12.5894V4.85964C12.5962 4.7937 12.6011 4.72568 12.6011 4.65083ZM14.7962 8.29771V9.10532C14.7962 9.59571 14.3846 9.99313 13.8767 9.99313H13.5076C13.0053 9.99313 12.5983 9.60373 12.5897 9.12047V7.87059H7.42274V8.29771H7.4132V9.10532C7.4132 9.59571 7.00162 9.99313 6.49375 9.99313H6.12461C5.61675 9.99313 5.20516 9.59571 5.20516 9.10532V8.29771H5.19778V7.87059H3.57666L2.36406 17.8572H17.6336L16.4068 7.87059H14.7974V8.29771H14.7962Z"
                fill="#10845A"
              />
            </svg>
            <div className={styles['cart-quantity']}>
              <span>{cartProducts.length}</span>
            </div>
          </div>
        </div>
      </Link>

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
            <button className={`secondary-btn ${styles['checkout-btn']}`}>Finalizar</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
