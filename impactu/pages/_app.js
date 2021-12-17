import '../styles/build.css'
import PageHead from '../components/PageHead'
import Layout from '../components/layouts/Layout'

const Layout2 = ({ children }) => {
	return (<><PageHead/><body>{children}</body></>);
};

const layouts = {
	L1: Layout,
	L2: Layout2,
  };

function MyApp({ Component, pageProps }) {
	const FinalLayout = layouts[Component.layout];

  	return (
		<FinalLayout>
			<Component {...pageProps} />	
    	</FinalLayout>
  )
}

export default MyApp