import Link from 'next/link'
import { useRef, useEffect } from 'react'
import styles from './Product.module.css'

const Product = ({ product, cartProducts, setCartProducts }) => {
  const isAdded = cartProducts.find((item) => item.name === product.name)

  function handleAdd() {
    if (isAdded) {
      const updatedCart = cartProducts.filter((cartProduct) => cartProduct.name !== product.name)
      setCartProducts(updatedCart)
    } else {
      const updatedCart = [...cartProducts, { name: product.name, quantity: 1 }]
      setCartProducts(updatedCart)
    }
  }

  return (
    <div className={styles['product-wrapper']} key={product.name}>
      <Link href={`/ProductPage/${product.linkParam}`}>
        <img className={styles['product-img']} src={product.images[0]}></img>
      </Link>

      <Link href={`/ProductPage/${product.linkParam}`}>{product.name}</Link>

      <p className={styles['price']}>€{product.price.display}</p>

      {product.sizes && !isAdded ? (
        <Link href={`/ProductPage/${product.linkParam}`}>
          <button className={`tertiary-btn ${isAdded ? 'active' : null}`}>
            {isAdded ? 'Adicionado' : 'Adicionar'}
          </button>
        </Link>
      ) : (
        <button className={`tertiary-btn ${isAdded ? 'active' : null}`} onClick={handleAdd}>
          {isAdded ? 'Adicionado' : 'Adicionar'}
        </button>
      )}
    </div>
  )
}

export default Product
