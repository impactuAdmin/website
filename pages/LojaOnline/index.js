import Link from 'next/link'
import { useState, useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import CartPreview from '../../components/CartPreview/CartPreview'
import Product from '../../components/Product/Product'
import { merchProducts } from '../../public/data/dados'
import styles from './LojaOnline.module.css'

const LojaOnline = () => {
  const [cartProducts, setCartProducts] = useState([])

  // Load cartProducts from localStorage when the component mounts
  useEffect(() => {
    const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
    setCartProducts(savedCartProducts)
  }, [])

  // Save cartProducts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
  }, [cartProducts])

  return (
    <>
      <Hero title={'Loja Online'} backgroundImage={'loja-banner.webp'} />

      <section className="products-section">
        <div className={styles['products-section-header']}>
          <Link href="/Checkout">
            <div className="cart-link-wrapper">
              <span>Cesto</span>
              <div className="cart-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17.2739 17.9558L16.9441 17.9951C16.8697 18.0039 16.7971 17.9999 16.726 17.99H1.27357C1.20269 17.9997 1.13016 18.0039 1.05541 17.9951L0.725682 17.9558C0.2722 17.9016 -0.0500544 17.5024 0.0064231 17.0646L1.36604 5.86587C1.42141 5.43495 1.82284 5.12859 2.26802 5.17056C2.28878 5.16896 2.30871 5.16441 2.33003 5.16441H4.67828V4.17532H4.68631C4.68714 1.86912 6.62343 0 9.01182 0C11.4008 0 13.3166 1.86992 13.3166 4.17666C13.3166 4.3015 13.329 4.41511 13.318 4.52524V5.16441H15.6554C15.6764 5.16441 15.6964 5.16896 15.7171 5.1703C16.1618 5.12886 16.5626 5.43494 16.618 5.8656L17.9937 17.0643C18.0496 17.5024 17.7276 17.9016 17.2739 17.9558ZM11.341 4.18574C11.341 2.9443 10.2986 1.93782 9.01293 1.93782C7.72751 1.93782 6.68545 2.94376 6.68489 4.18494H6.68046V5.16468H11.3304V4.37367C11.3365 4.31433 11.341 4.25311 11.341 4.18574ZM13.3166 7.46794V8.19479C13.3166 8.63614 12.9461 8.99382 12.4891 8.99382H12.1568C11.7047 8.99382 11.3385 8.64336 11.3307 8.20842V7.08353H6.68046V7.46794H6.67188V8.19479C6.67188 8.63614 6.30145 8.99382 5.84437 8.99382H5.51215C5.05507 8.99382 4.68465 8.63614 4.68465 8.19479V7.46794H4.678V7.08353H3.219L2.12765 16.0715H15.8702L14.7662 7.08353H13.3177V7.46794H13.3166Z"
                    fill="#10845A"
                  />
                </svg>
                <div className="cart-quantity">
                  <span>{cartProducts.length}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* <CartPreview cartProducts={cartProducts} setCartProducts={setCartProducts} /> */}
        <div className={styles['products-container']}>
          {merchProducts.map((product) => (
            <Product
              key={product.name}
              product={product}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default LojaOnline
