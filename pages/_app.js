import "@/styles/globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Dashboard from "@/components/Dashboard"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Dashboard/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
