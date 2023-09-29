import { useState, useEffect } from 'react'
import Select from 'react-select'
import Cart from '../components/Cart/Cart'
import Link from 'next/link'

const Checkout = () => {
  const [cartProducts, setCartProducts] = useState([])
  const [boughtProducts, setBoughtProducts] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)

  // Load cartProducts from localStorage when the component mounts
  useEffect(() => {
    const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
    setCartProducts(savedCartProducts)

    cartProducts.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
  }, [])

  // Save cartProducts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))

    const updatedArray = cartProducts.map(
      (product) => `produto:${product.name}/tamanho:${product.size}/quantidade:${product.quantity}`
    )
    setBoughtProducts(updatedArray)

    cartProducts.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
  }, [cartProducts])

  // function handleFormSubmit() {
  //   setCartProducts([])
  // }

  useEffect(() => {
    console.log(boughtProducts)
  }, [boughtProducts])

  return (
    <section className="formulario-wrapper">
      <div className="container-formulario" id="start">
        {/* <div className="back-link">
          <Link href="/LojaOnline#products">← voltar</Link>
        </div> */}
        <div className="titulo">
          <h1>Checkout</h1>
        </div>
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
        <div className="container-formulario-2 checkout-form">
          <form
            name="compra"
            method="POST"
            data-netlify="true"
            action="/Sucesso"
            // onSubmit={handleFormSubmit}
          >
            <input type="hidden" name="form-name" value="compra" required />
            <input type="hidden" name="Produtos" value={boughtProducts} required />

            <label htmlFor="fname">Nome e apelido</label>
            <input
              type="text"
              id="fname"
              name="Nome"
              placeholder="Texto de resposta curta"
              required
              // disabled={isEmpty}
            />

            <label htmlFor="morada">Morada</label>
            <input
              type="text"
              id="morada"
              name="Morada"
              placeholder="Texto de resposta curta"
              required
              // disabled={isEmpty}
            />

            <label htmlFor="localidade">Código Postal e Localidade</label>
            <input
              type="text"
              id="localidade"
              name="Localidade"
              placeholder="Texto de resposta curta"
              required
              // disabled={isEmpty}
            />

            <label htmlFor="tel">Contacto telefónico</label>
            <input
              type="tel"
              id="tel"
              name="Tel."
              placeholder="Texto de resposta curta"
              required
              // disabled={isEmpty}
            />

            <label htmlFor="mail">E-mail</label>
            <input
              type="email"
              id="mail"
              name="Email"
              placeholder="Texto de resposta curta"
              required
              // disabled={isEmpty}
            />

            <div className="doar-info">
              <p>
                <strong>Os dados de pagamento ser-te-ão enviados para o e-mail.</strong>
              </p>
              <br />
              <p>
                Ao efectuares esta compra estás a ajudar-nos a elevar histórias de mais famílias.
                Obrigado :)
              </p>
            </div>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Checkout
