import '../styles/build.css'
//import Layout from './Layout'

function MyApp({ Component, pageProps }) {
//   	return (
// 		<Layout>
// 			<Component {...pageProps} />	
//     	</Layout>
//   )
	return <Component {...pageProps} />
}

export default MyApp