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
    <section className="products-section">
      <div className={styles['product-page-header']}>
        <div className={styles['back-link']}>
          <Link href="/LojaOnline">← voltar</Link>
        </div>
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
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
