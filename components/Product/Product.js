import Link from 'next/link'
import { useRef, useEffect } from 'react'
import styles from './Product.module.css'

const Product = ({ product, cartProducts, setCartProducts, previewing, setPreviewing }) => {
  const isAdded = cartProducts.find((item) => item.name === product.name)

  function handleAdd(e) {
    const addBtn = e.target
    if (previewing && addBtn.classList.contains('active')) return

    function preview() {
      setPreviewing(true)

      addBtn.classList.add('active')
      addBtn.innerText = 'Adicionado'
      setTimeout(() => {
        addBtn.classList.remove('active')
        addBtn.innerText = 'Adicionar'
      }, 3000)
    }

    if (isAdded) {
      const updatedCart = cartProducts.map((cartProduct) =>
        cartProduct.name === product.name
          ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
          : cartProduct
      )
      setCartProducts(updatedCart)
      preview()
    } else {
      const updatedCart = [
        ...cartProducts,
        { name: product.name, quantity: 1, images: product.images, price: product.price },
      ]
      setCartProducts(updatedCart)
      preview()
    }
  }

  return (
    <div className={styles['product-wrapper']} key={product.name}>
      <Link href={`/ProductPage/${product.linkParam}`}>
        <img className={styles['product-img']} src={product.images[0]}></img>
      </Link>

      <Link href={`/ProductPage/${product.linkParam}`}>{product.name}</Link>

      <p className={styles['price']}>€{product.price.display}</p>

      {product.sizes ? (
        <Link href={`/ProductPage/${product.linkParam}`}>
          <button className="tertiary-btn">Adicionar</button>
        </Link>
      ) : (
        <button className="tertiary-btn" onClick={(e) => handleAdd(e)}>
          Adicionar
        </button>
      )}
    </div>
  )
}

export default Product
