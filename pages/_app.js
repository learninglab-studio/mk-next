import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return  (
    <AnimatePresence 
      exitBeforeEnter={ true } 
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  )
}

export default MyApp


      // initial={false}
      // onExitComplete={() => window.scrollTo(0, 0)}