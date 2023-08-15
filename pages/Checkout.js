import { useState, useEffect } from 'react'
import Select from 'react-select'
import Cart from '../components/Cart/Cart'

const Checkout = () => {
  const [sizes, setSizes] = useState([])
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

  const artigos = [
    {
      label: 'Tshirt bordada 12€',
      value: 'Tshirt bordada',
    },
    {
      label: "Boné Impac'tu 13,50€",
      value: 'Boné',
    },
    {
      label: 'Tshirt impactador 12€',
      value: 'Tshirt impactador',
    },
    {
      label: 'Sweatshirt impactador 25€',
      value: 'Sweatshirt',
    },
    {
      label: "Tote bag Impac'tu 7,5€",
      value: 'Tote bag',
    },
  ]

  return (
    <section className="formulario-wrapper">
      <div className="container-formulario" id="start">
        <div className="titulo">
          <h1>Checkout</h1>
        </div>
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
        <div className="container-formulario-2 checkout-form">
          <form name="compra" method="POST" data-netlify="true" action="/Sucesso">
            <input type="hidden" name="form-name" value="compra" required />

            <label htmlFor="fname">Nome e apelido</label>
            <input
              type="text"
              id="fname"
              name="Nome"
              placeholder="Texto de resposta curta"
              required
            />

            <label htmlFor="morada">Morada</label>
            <input
              type="text"
              id="morada"
              name="Morada"
              placeholder="Texto de resposta curta"
              required
            />

            <label htmlFor="localidade">Código Postal e Localidade</label>
            <input
              type="text"
              id="localidade"
              name="Localidade"
              placeholder="Texto de resposta curta"
              required
            />

            <label htmlFor="tel">Contacto telefónico</label>
            <input type="tel" id="tel" name="Tel." placeholder="Texto de resposta curta" required />

            <label htmlFor="mail">E-mail</label>
            <input
              type="email"
              id="mail"
              name="Email"
              placeholder="Texto de resposta curta"
              required
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
