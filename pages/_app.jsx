import '../styles/globals.css'
import '../styles/defaultPages.css'
import '../styles/geralPages.css'
import '../styles/aboutStyle.css'
import '../styles/teste.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from '../contexts/AppContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
     <div className="backColor">
       <Header />
       <Component  {...pageProps} />
       <Footer />
     </div>
    </AppProvider>
  )
}

export default MyApp

