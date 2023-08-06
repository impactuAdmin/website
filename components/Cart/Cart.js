import { useRef } from 'react'
import CartItem from './CartItem'
import styles from './Cart.module.css'

const Cart = ({ cartProducts, setCartProducts }) => {
  const cartRef = useRef(null)

  return (
    <div className={styles['cart-container']}>
      <div className={styles['cart-title']}>
        <span>Carrinho</span>
        <div className={styles['cart-icon']}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="22"
            viewBox="0 0 24 21"
            fill="none"
          >
            <path
              d="M0.782615 0C0.350377 0 0 0.352577 0 0.7875C0 1.22242 0.350377 1.575 0.782615 1.575H3.90493C5.20021 4.80309 6.47606 8.03709 7.76093 11.2711L6.57887 14.134C6.47984 14.3727 6.5077 14.6605 6.65063 14.8754C6.79359 15.0904 7.04737 15.2261 7.3044 15.225H20.348C20.7614 15.2308 21.1417 14.8536 21.1417 14.4375C21.1417 14.0214 20.7614 13.6441 20.348 13.65H8.47833L9.15497 12.0258L21.7176 11.0168C22.0464 10.9908 22.344 10.7331 22.4187 10.4098L23.9839 3.58477C24.0862 3.12507 23.6857 2.62346 23.2176 2.625H6.00819L5.16035 0.492187C5.04427 0.203485 4.74431 7.875e-06 4.43482 0H0.782615ZM6.63592 4.2H22.2312L21.0165 9.49922L9.12237 10.4508L6.63592 4.2ZM9.91312 15.75C8.48164 15.75 7.3044 16.9346 7.3044 18.375C7.3044 19.8154 8.48164 21 9.91312 21C11.3446 21 12.5218 19.8154 12.5218 18.375C12.5218 16.9346 11.3446 15.75 9.91312 15.75ZM17.7393 15.75C16.3078 15.75 15.1306 16.9346 15.1306 18.375C15.1306 19.8154 16.3078 21 17.7393 21C19.1707 21 20.348 19.8154 20.348 18.375C20.348 16.9346 19.1707 15.75 17.7393 15.75ZM9.91312 17.325C10.4987 17.325 10.9566 17.7858 10.9566 18.375C10.9566 18.9642 10.4987 19.425 9.91312 19.425C9.32759 19.425 8.86963 18.9642 8.86963 18.375C8.86963 17.7858 9.32759 17.325 9.91312 17.325ZM17.7393 17.325C18.3248 17.325 18.7828 17.7858 18.7828 18.375C18.7828 18.9642 18.3248 19.425 17.7393 19.425C17.1537 19.425 16.6958 18.9642 16.6958 18.375C16.6958 17.7858 17.1537 17.325 17.7393 17.325Z"
              fill="#10845A"
            />
          </svg>
          <div className={styles['cart-quantity']}>
            <span>{cartProducts.length}</span>
          </div>
        </div>
      </div>

      <div className={styles['cart']} ref={cartRef}>
        {cartProducts.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          <>
            {cartProducts.map((product) => {
              return (
                <CartItem
                  product={product}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                />
              )
            })}
            <p className={styles['cart-total']}>
              Sub-total:&nbsp;
              <span>
                €{cartProducts.reduce((total, acc) => total + acc.price * acc.quantity, 0)}
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
