import Link from 'next/link'
import { useRef, useEffect } from 'react'
import styles from './Product.module.css'

const Product = ({ product, cartProducts, setCartProducts }) => {
  const addBtnRef = useRef(null)

  const handleAdd = () => {
    const isAdded = cartProducts.find((item) => item.id === product.id)
    if (!isAdded) {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }])
      addBtnRef.current.classList.add('active')
      addBtnRef.current.innerText = 'Adicionado'
    } else {
      const updatedCart = cartProducts.filter((item) => item.id !== product.id)
      setCartProducts(updatedCart)
    }
  }

  useEffect(() => {
    if (!cartProducts.find((item) => item.id === product.id)) {
      addBtnRef.current.classList.remove('active')
      addBtnRef.current.innerText = 'Adicionar'
    }
  }, [cartProducts])

  return (
    <div className={styles['product-wrapper']} key={product.id}>
      <div className={styles['product-img']}></div>
      <div className={styles['info']}>
        <p>{product.name}</p>
        {product.colors ? <p className={styles['secondary-info']}>+ cores</p> : null}
      </div>
      <p className={styles['price']}>{product.price}€</p>
      {product.colors || product.sizes ? (
        <Link href={{ pathname: '/ProductPage', query: product }}>
          <button className="tertiary-btn" ref={addBtnRef}>
            Adicionar
          </button>
        </Link>
      ) : (
        <button className="tertiary-btn" ref={addBtnRef} onClick={handleAdd}>
          Adicionar
        </button>
      )}
    </div>
  )
}

export default Product
