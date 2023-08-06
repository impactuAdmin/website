import styles from './ProductPage.module.css'
import Cart from '../../components/Cart/Cart'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const router = useRouter()
  const product = router.query

  console.log(router.query)

  return (
    <>
      <div>{product.name}</div>
    </>
  )
}

export default ProductPage
