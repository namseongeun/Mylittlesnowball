import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../public/static/fonts/style.css'
import { Provider } from 'react-redux'
import store from 'store/store'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
      <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
