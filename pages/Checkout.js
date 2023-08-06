import { useRef, useState, useEffect } from 'react'
import Select from 'react-select'

const Checkout = () => {
  const sizeInputRef = useRef(null)
  const colorInputRef = useRef(null)
  const [selectedProducts, setSelectedProducts] = useState()
  const [selectedSize, setSelectedSize] = useState()
  const [selectedColor, setSelectedColor] = useState()
  const [total, setTotal] = useState(0)

  const produtos = [
    {
      label: 'Boné 5,00€',
      value: 'Boné',
      price: 5,
    },
    {
      label: 'Tshirt 5,00€',
      value: 'Tshirt',
      price: 5,
    },
    // {
    //   label: 'Agenda',
    //   value: 'Agenda',
    // price: 5,
    // },
  ]

  const handleChange = (data) => {
    setTotal(data.reduce((acc, product) => acc + product.price, 0))

    if (data.some((obj) => Object.values(obj).includes('Boné'))) {
      colorInputRef.current.style.display = 'block'
    } else {
      colorInputRef.current.style.display = 'none'
    }

    if (data.some((obj) => Object.values(obj).includes('Tshirt'))) {
      sizeInputRef.current.style.display = 'block'
    } else {
      sizeInputRef.current.style.display = 'none'
    }
  }

  return (
    <section className="formulario-wrapper">
      <div className="container-formulario" id="start">
        <div className="titulo">
          <h1>Formulário de Compra</h1>
        </div>
        <div className="container-formulario-2">
          <form name="compra" method="POST" data-netlify="true" action="/Sucesso">
            <input type="hidden" name="form-name" value="compra" required />

            <label htmlFor="produtos">Produto</label>
            <Select
              id="produtos"
              className="product-select"
              name="Produtos"
              required
              placeholder="Seleciona o(s) produto(s)"
              options={produtos}
              value={selectedProducts}
              onChange={handleChange}
              isMulti
            />

            <div ref={sizeInputRef} style={{ display: 'none' }}>
              <label htmlFor="tamanho" className="input-select-title">
                Tamanho (Tshirt)
              </label>
              <Select
                id="tamanho"
                className="input-select"
                name="Tamanho"
                // required
                placeholder="Seleciona o tamanho da Tshirt"
                options={[
                  {
                    label: 'S',
                    value: 'S',
                  },
                  {
                    label: 'M',
                    value: 'M',
                  },
                  {
                    label: 'L',
                    value: 'L',
                  },
                ]}
                value={selectedSize}
                onChange={(data) => setSelectedSize(data)}
              />
            </div>

            <div ref={colorInputRef} style={{ display: 'none' }}>
              <label htmlFor="cor" className="input-select-title">
                Cor (Boné)
              </label>
              <Select
                id="cor"
                className="input-select"
                name="Cor"
                // required
                placeholder="Seleciona a cor do boné"
                options={[
                  {
                    label: 'Verde',
                    value: 'verde',
                  },
                  {
                    label: 'Beige',
                    value: 'beige',
                  },
                ]}
                value={selectedColor}
                onChange={(data) => setSelectedColor(data)}
              />
            </div>
            <label htmlFor="fname">Nome Completo</label>
            <input
              type="text"
              id="fname"
              name="Nome"
              placeholder="Texto de resposta curta"
              required
            />

            <label htmlFor="mail">E-mail</label>
            <input
              type="email"
              id="mail"
              name="Email"
              placeholder="Texto de resposta curta"
              required
            />
            <label htmlFor="tel">Contacto telefónico</label>
            <input type="tel" id="tel" name="Tel." placeholder="Texto de resposta curta" required />
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
            <div className="doar-info">
              <p>
                Total: <span className="total">{total}€</span>
              </p>
              <br />
              <p>
                Para concluir a sua compra só necessita de realizar a transferência com o valor
                para:
              </p>
              <br />
              <p>
                *IBAN: <strong>PT50 0033 0000 4553 2412 3620 5</strong>
              </p>
              <p>
                *MBWAY: <strong>+351 913 363 673</strong>
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
