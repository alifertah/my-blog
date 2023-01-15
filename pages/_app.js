import Layout from '../components/layout'
import '../styles/globals.css'
import Progressbar from '../components/Progressbar'

function MyApp({ Component, pageProps }) {
return(
  <Layout>
    <Component {...pageProps} />
    <Progressbar />
  </Layout>
)
}

export default MyApp
