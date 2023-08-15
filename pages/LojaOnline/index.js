import Link from 'next/link'
import { useState, useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import Cart from '../../components/Cart/Cart'
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
        <div className={styles['products-container']}>
          {/* <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} /> */}

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
