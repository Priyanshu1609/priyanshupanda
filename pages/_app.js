import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  
  return (
    <ThemeProvider attribute="class">
      <div className="grid h-screen grid-cols-12 gap-6">
        <div className="col-span-12 p-5 text-center bg-thistle dark:bg-dark-500 rounded-2xl lg:col-span-3">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 py-12 pr-5 overflow-visible lg:overflow-hidden bg-thistle dark:bg-dark-500 rounded-2xl lg:col-span-9 ">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key ={router.route}/>
          </AnimatePresence>

        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
