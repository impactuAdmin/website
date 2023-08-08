import { useState, useEffect } from 'react'
import Select from 'react-select'

const Checkout = () => {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [sizes, setSizes] = useState([])

  // useEffect(() => {
  //   console.log(sizes)
  // }, [sizes])

  const artigos = [
    {
      label: 'Tshirt bordada 12€',
      value: 'Tshirt bordada',
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
    {
      label: "Boné Impac'tu 7,5€",
      value: 'Boné',
    },
  ]

  return (
    <section className="formulario-wrapper">
      <div className="container-formulario" id="start">
        <div className="titulo">
          <h1>Formulário de Compra</h1>
        </div>
        <div className="container-formulario-2">
          <form name="compra" method="POST" data-netlify="true" action="/Sucesso">
            <input type="hidden" name="form-name" value="compra" required />

            <label htmlFor="artigos">Artigo(s)</label>
            <Select
              id="artigos"
              className="product-select"
              name="Artigos"
              required
              placeholder="Seleciona o(s) artigo(s)"
              options={artigos}
              onChange={(data) => setSelectedProducts(data)}
              isMulti
            />

            <input type="hidden" name="Tamanhos" value={sizes} required />

            {selectedProducts.map((product) => {
              if (product.label.includes('shirt')) {
                return (
                  <>
                    <label htmlFor="size">Tamanho {product.value}</label>
                    <Select
                      id="size"
                      className="product-select"
                      name={`Tamanho ${product.value}`}
                      required
                      placeholder="Seleciona o tamanho do artigo"
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
                      onChange={(data) =>
                        setSizes((sizes) => [...sizes, `${product.value} ${data.value}`])
                      }
                    />
                  </>
                )
              }
            })}

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
                Ao efectuares esta compra estás-nos a ajudar a elevar histórias de mais famílias.
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
