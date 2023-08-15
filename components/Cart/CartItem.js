import { useRef, useEffect } from 'react'
import styles from './Cart.module.css'
import Link from 'next/link'

const CartItem = ({ product, cartProducts, setCartProducts }) => {
  const itemRef = useRef(null)

  function handleRemove() {
    const updatedCart = cartProducts.filter((item) => item.name !== product.name)
    setCartProducts(updatedCart)
  }

  useEffect(() => {
    if (product.quantity === 0) handleRemove()
  }, [product])

  return (
    <div className={styles['cart-item']} ref={itemRef}>
      <div className={styles['delete-btn']}>
        <button onClick={handleRemove}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M5.04418 10.9078C5.21285 10.9078 5.37462 10.8488 5.49389 10.7439C5.61316 10.639 5.68016 10.4967 5.68016 10.3483V4.2997C5.68016 4.15132 5.61316 4.00902 5.49389 3.9041C5.37462 3.79918 5.21285 3.74023 5.04418 3.74023C4.87551 3.74023 4.71375 3.79918 4.59448 3.9041C4.47521 4.00902 4.4082 4.15132 4.4082 4.2997V10.3563C4.41059 10.5033 4.47865 10.6436 4.59766 10.7468C4.71667 10.8499 4.87707 10.9078 5.04418 10.9078Z"
              fill="#10845A"
            />
            <path
              d="M8.12231 10.9078C8.29098 10.9078 8.45274 10.8488 8.57201 10.7439C8.69128 10.639 8.75828 10.4967 8.75828 10.3483V4.2997C8.75828 4.15132 8.69128 4.00902 8.57201 3.9041C8.45274 3.79918 8.29098 3.74023 8.12231 3.74023C7.95363 3.74023 7.79187 3.79918 7.6726 3.9041C7.55333 4.00902 7.48633 4.15132 7.48633 4.2997V10.3563C7.48872 10.5033 7.55677 10.6436 7.67578 10.7468C7.79479 10.8499 7.9552 10.9078 8.12231 10.9078Z"
              fill="#10845A"
            />
            <path
              d="M0.635978 2.56555C0.917974 2.56555 1.14658 2.79415 1.14658 3.07615V10.3981C1.14754 11.1397 1.48287 11.8507 2.07901 12.3751C2.67514 12.8995 3.4834 13.1945 4.32647 13.1954H8.84009C9.68316 13.1945 10.4914 12.8995 11.0876 12.3751C11.6837 11.8507 12.019 11.1397 12.02 10.3981V3.07615C12.02 2.79415 12.2486 2.56555 12.5306 2.56555C12.6993 2.56555 12.861 2.5066 12.9803 2.40168C13.0996 2.29676 13.1666 2.15446 13.1666 2.00608C13.1666 1.8577 13.0996 1.7154 12.9803 1.61048C12.861 1.50556 12.6993 1.44662 12.5306 1.44662H9.58029C9.44345 1.44662 9.33252 1.33569 9.33252 1.19885C9.33204 0.881028 9.18831 0.57634 8.93283 0.351603C8.67736 0.126866 8.33101 0.000422923 7.96971 0H5.19685C4.83556 0.000422923 4.4892 0.126866 4.23373 0.351603C3.97826 0.57634 3.83452 0.881028 3.83404 1.19885C3.83404 1.33569 3.72311 1.44662 3.58628 1.44662H0.635978C0.467306 1.44662 0.305543 1.50556 0.186274 1.61048C0.0670045 1.7154 0 1.8577 0 2.00608C0 2.15446 0.0670045 2.29676 0.186274 2.40168C0.305543 2.5066 0.467306 2.56555 0.635978 2.56555ZM5.106 1.19885C5.106 1.17766 5.11557 1.15733 5.13261 1.14234C5.14964 1.12735 5.17275 1.11893 5.19685 1.11893H7.96971C7.99381 1.11893 8.01692 1.12735 8.03396 1.14234C8.051 1.15733 8.06057 1.17766 8.06057 1.19885C8.06057 1.33569 7.94964 1.44662 7.81281 1.44662H5.35376C5.21692 1.44662 5.106 1.33569 5.106 1.19885ZM2.41853 6.7303C2.41853 4.43017 4.28315 2.56555 6.58328 2.56555C8.88341 2.56555 10.748 4.43017 10.748 6.73029V10.3981C10.7475 10.8431 10.5464 11.2697 10.1887 11.5844C9.83097 11.8991 9.34596 12.076 8.84009 12.0765H4.32647C3.8206 12.076 3.33559 11.8991 2.97789 11.5844C2.62018 11.2697 2.41901 10.8431 2.41853 10.3981V6.7303Z"
              fill="#10845A"
            />
          </svg>
        </button>
      </div>
      <Link href={`ProductPage/${product.linkParam}`}>
        <img src="/bone.webp" className={styles['item-img']}></img>
      </Link>
      <div className={styles['item-info']}>
        <Link href={`ProductPage/${product.linkParam}`}>{product.name}</Link>
        {/* <p className={styles['price']}>€{product.price.display}</p> */}
        {product.sizes ? (
          <p className={styles['secondary-info']}>Tamanho: {product.sizes[0]}</p>
        ) : null}
      </div>
      <div className={styles['item-quantity-wrapper']}>
        <button
          onClick={() => {
            const updatedCart = cartProducts.map((item) => {
              if (item.name === product.name) return { ...item, quantity: item.quantity - 1 }
              return item
            })

            setCartProducts(updatedCart)
          }}
        >
          <span>-</span>
        </button>
        <p className={styles['item-quantity']}>{product.quantity}</p>
        <button
          onClick={() => {
            const updatedCart = cartProducts.map((item) => {
              if (item.name === product.name) return { ...item, quantity: item.quantity + 1 }
              return item
            })

            setCartProducts(updatedCart)
          }}
        >
          <span>+</span>
        </button>
      </div>
    </div>
  )
}

export default CartItem
