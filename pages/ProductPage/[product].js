import styles from './ProductPage.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Cart from '../../components/Cart/Cart'
import { useRouter } from 'next/router'
import { merchProducts } from '../../public/data/dados'

const ProductPage = ({ product }) => {
  const [cartProducts, setCartProducts] = useState([])
  const [selectedSize, setSelectedSize] = useState()

  const isAdded = cartProducts.find((item) => item.name === product.name)
  const hasOptions = product.colors || product.sizes

  // Load cartProducts from localStorage when the component mounts
  useEffect(() => {
    const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
    setCartProducts(savedCartProducts)
  }, [])

  // Save cartProducts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
  }, [cartProducts])

  function handleAdd() {
    if (isAdded) {
      const updatedCart = cartProducts.filter((cartProduct) => cartProduct.name !== product.name)
      setCartProducts(updatedCart)
    } else if (hasOptions && selectedSize === undefined) {
      alert('Selecione um tamanho')
    } else {
      const updatedCart = [
        ...cartProducts,
        { name: product.name, quantity: 1, sizes: selectedSize },
      ]
      setCartProducts(updatedCart)
    }
  }

  return (
    <section className={styles['product-section']}>
      <div className={styles['product-page-header']}>
        <div className={styles['back-link']}>
          <Link href="/LojaOnline">← voltar</Link>
        </div>
      </div>

      <div className={styles['container']}>
        <div className={styles['title-mobile']}>
          <h1>{product.name}</h1>
        </div>

        <div className={styles['product-images-container']}>
          {product.images.map((src, i) =>
            i === 0 ? (
              <img src={src} className={styles['main-img']}></img>
            ) : (
              <img src={src} className={styles['product-img']}></img>
            )
          )}
        </div>

        <div className={styles['product-text']}>
          <div className={styles['title-desktop']}>
            <h1>{product.name}</h1>
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
          <p>{product.description}</p>
          <br />
          <p>
            <i>{product.characteristics}</i>
          </p>
          <br />
          <p>
            <label htmlFor="options">{hasOptions ? 'Tamanho' : 'Tamanho único'}</label>&nbsp;
            <span style={{ color: 'red' }}>*</span>
          </p>
          <div className={styles['options-wrapper']}>
            {hasOptions
              ? hasOptions.map((option) => (
                  <div>
                    <input
                      id="options"
                      type="radio"
                      name="Tamanho"
                      value={option}
                      // checked={isAdded && cartProducts.find((item) => item.sizes === option)}
                      onChange={() => setSelectedSize(option)}
                    />
                    &nbsp;
                    <span>{option}</span>
                  </div>
                ))
              : null}
          </div>
          <br />
          <p className={styles['price']}>€{product.price.display}</p>
          <button className={`tertiary-btn ${isAdded ? 'active' : null}`} onClick={handleAdd}>
            {isAdded ? 'Adicionado' : 'Adicionar'}
          </button>
        </div>
      </div>
    </section>
  )
}

export async function getStaticPaths() {
  const paths = merchProducts.map((product) => ({
    params: { product: product.linkParam },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  for (let i = 0; i < merchProducts.length; i++) {
    if (merchProducts[i].linkParam === params.product) {
      return { props: { product: merchProducts[i] } }
    }
  }
}

export default ProductPage
