import Link from 'next/link'
import { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import Cart from '../../components/Cart/Cart'
import Product from '../../components/Product/Product'
import { merchProducts } from '../../public/data/dados'
import styles from './LojaOnline.module.css'

const LojaOnline = () => {
  const [cartProducts, setCartProducts] = useState([])

  return (
    <>
      <Hero title={'Loja Online'} backgroundImage={'loja-banner.webp'} />
      <section className={styles['products-section']}>
        <div className={styles['products-container']}>
          <Link href={'#'}>
            <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
          </Link>
          <div className={styles['products-wrapper']}>
            {merchProducts.map((product) => (
              <Product
                key={product.name}
                product={product}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default LojaOnline
