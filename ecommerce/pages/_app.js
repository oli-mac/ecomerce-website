import '../styles/globals.css';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
// import { StoreProvider } from '../utils/Store';
// import { SnackbarProvider } from 'notistack';
// import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const clientSideEmotionCache = createCache({ key: 'css' });
function MyApp({ Component, pageProps,emotionCache = clientSideEmotionCache, }) {


  return(
    <CacheProvider value={emotionCache}>
       <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp
