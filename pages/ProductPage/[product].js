import styles from './ProductPage.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import CartPreview from '../../components/CartPreview/CartPreview'
import { merchProducts } from '../../public/data/dados'

const ProductPage = ({ product }) => {
  const [cartProducts, setCartProducts] = useState([])
  const [selectedSize, setSelectedSize] = useState()
  const [slideIndex, setSlideIndex] = useState(1)
  const [previewing, setPreviewing] = useState(false)

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

  function updateSlides(n) {
    const updatedIndex = slideIndex + n

    if (updatedIndex > product.images.length) {
      setSlideIndex(1)
    } else if (updatedIndex < 1) {
      setSlideIndex(product.images.length)
    } else {
      setSlideIndex(slideIndex + n)
    }
  }

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

    if (isAdded && isAdded.size === selectedSize) {
      const updatedCart = cartProducts.map((cartProduct) =>
        cartProduct.name === product.name
          ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
          : cartProduct
      )
      setCartProducts(updatedCart)
      preview()
    } else if (hasOptions && selectedSize === undefined) {
      alert('Selecione um tamanho')
    } else {
      const updatedCart = [
        ...cartProducts,
        {
          name: product.name,
          quantity: 1,
          size: selectedSize,
          images: product.images,
          price: product.price,
        },
      ]
      setCartProducts(updatedCart)
      preview()
    }
  }

  return (
    <section className={styles['product-section']}>
      <div className={styles['product-page-header']}>
        <div className="back-link">
          <Link href="/LojaOnline#products">← voltar</Link>
        </div>
      </div>

      <div className={styles['container']}>
        <div className={styles['title-mobile']}>
          <h1>{product.name}</h1>
          <Link href="/Checkout">
            <div className="cart-link-wrapper">
              <div className="cart-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.1125 21.946L20.7095 21.994C20.6185 22.0048 20.5298 21.9999 20.4429 21.9878H1.55658C1.46996 21.9996 1.38131 22.0048 1.28995 21.994L0.886944 21.946C0.332689 21.8797 -0.0611776 21.3919 0.00785045 20.8567L1.6696 7.1694C1.73728 6.64271 2.22792 6.26828 2.77202 6.31958C2.7974 6.31762 2.82176 6.31206 2.84782 6.31206H5.7179V5.10317H5.72771C5.72872 2.28448 8.0953 0 11.0144 0C13.9343 0 16.2758 2.28546 16.2758 5.1048C16.2758 5.25738 16.291 5.39624 16.2775 5.53085V6.31206H19.1344C19.1601 6.31206 19.1845 6.31762 19.2098 6.31925C19.7533 6.26861 20.2432 6.64271 20.3109 7.16907L21.9923 20.8564C22.0606 21.3919 21.6671 21.8797 21.1125 21.946ZM13.8612 5.11591C13.8612 3.59858 12.5872 2.36845 11.0158 2.36845C9.44474 2.36845 8.1711 3.59793 8.17042 5.11493H8.16501V6.31239H13.8483V5.3456C13.8558 5.27307 13.8612 5.19825 13.8612 5.11591ZM16.2758 9.12748V10.0159C16.2758 10.5553 15.8231 10.9924 15.2644 10.9924H14.8584C14.3058 10.9924 13.8581 10.5641 13.8487 10.0325V8.65764H8.16501V9.12748H8.15452V10.0159C8.15452 10.5553 7.70178 10.9924 7.14312 10.9924H6.73708C6.17842 10.9924 5.72568 10.5553 5.72568 10.0159V9.12748H5.71756V8.65764H3.93433L2.60046 19.6429H19.397L18.0475 8.65764H16.2772V9.12748H16.2758Z"
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

        <div className={styles['slider-container']}>
          <button className={styles['prev']} onClick={() => updateSlides(-1)}>
            &#10094;
          </button>

          <div className={styles['product-images-container']}>
            {product.images.map((src, index) => (
              <img
                key={index}
                src={src}
                className={`${styles['product-img']} fade`}
                style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
              ></img>
            ))}
          </div>

          <button className={styles['next']} onClick={() => updateSlides(1)}>
            &#10095;
          </button>

          <div className={styles['dots-container']}>
            {product.images.map((img, index) => (
              <span
                key={index}
                className={
                  index + 1 === slideIndex ? `${styles['dot']} ${styles['active']}` : styles['dot']
                }
                // {index + 1 === slideIndex}
                onClick={() => setSlideIndex(index + 1)}
              ></span>
            ))}
          </div>
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
          {hasOptions ? (
            <p>
              <label htmlFor="options">Tamanho</label>&nbsp;<span style={{ color: 'red' }}>*</span>
            </p>
          ) : (
            <p>Tamanho único</p>
          )}

          <div className={styles['options-wrapper']}>
            {hasOptions
              ? hasOptions.map((option) => (
                  <div key={option}>
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
          <button className="tertiary-btn" onClick={(e) => handleAdd(e)}>
            Adicionar
          </button>
        </div>
      </div>

      {previewing && <CartPreview cartProducts={cartProducts} setPreviewing={setPreviewing} />}
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
