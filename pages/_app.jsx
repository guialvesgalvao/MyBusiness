import '../styles/globals.css'
import '../styles/defaultPages.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from '../contexts/AppContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
     <Header />
     <Component {...pageProps} />
     <Footer />
    </AppProvider>
  )
}

export default MyApp

