import '../styles/globals.css'
import Layout from "../Common/Layout";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


//function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />
//}

function MyApp({ Component, pageProps }) {
  console.log('pageProps',pageProps)
  return(
    <Layout footerstatus={pageProps.footerstatus}>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
