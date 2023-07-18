import { loadStripe } from '@stripe/stripe-js'

export async function checkout({ lineItems }) {
  let stripePromise = null

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
    }
    return stripePromise
  }

  const stripe = await getStripe()

  await stripe.redirectToCheckout({
    lineItems,
    mode: 'payment',
    shippingAddressCollection: {
      allowedCountries: ['PT'],
    },
    successUrl: `${window.location.origin}/Sucesso`,
    cancelUrl: `${window.location.origin}/Merch`,
  })
}
